import { isObject } from "./common/is";
import { LocalComponentConfig } from "src/types/components-types";

/**
 * @param tree LocalComponentConfig.children
 * @param uuid string
 * @returns number | null
 */
export const findIndexInSections = (
  tree: LocalComponentConfig["children"],
  uuid: string
): number | null => {
  if (!uuid) return null;
  for (let i = 0, n = tree.length; i < n; ++i) {
    if (tree[i].id === uuid) return i;
  }
  return null;
};

/**
 * @param tree LocalComponentConfig.children
 * @param uuid string
 * @returns LocalComponentConfig | null
 */
export const findOneInNodeTree = (
  tree: LocalComponentConfig["children"],
  uuid: string
): LocalComponentConfig | null => {
  if (!uuid) return null;
  const queue: typeof tree[] = [];
  queue.push(tree);
  while (queue.length) {
    const curChildren = queue.pop() as typeof tree;
    for (const item of curChildren) {
      if (item.id === uuid) return item;
      queue.push(item.children);
    }
  }
  return null;
};

/**
 * @param tree LocalComponentConfig.children
 * @param uuid string
 * @returns boolean
 */
export const deleteOneInNodeTree = (
  tree: LocalComponentConfig["children"],
  uuid: string
): boolean => {
  if (!uuid) return false;
  const queue: typeof tree[] = [];
  queue.push(tree);
  while (queue.length) {
    const curChildren = queue.pop() as typeof tree;
    const len = curChildren.length;
    for (let i = 0; i < len; ++i) {
      const item = curChildren[i];
      if (item.id === uuid) {
        curChildren.splice(i, 1);
        return true;
      }
      queue.push(item.children);
    }
  }
  return false;
};

/**
 * @param tree LocalComponentConfig.children
 * @param uuid string
 * @returns {parent, current}
 * @returns null !null  顶层节点
 * @returns !null !null 顶层节点
 * @returns null null   找不到节点
 */
export const findParentInNodeTree = (
  tree: LocalComponentConfig["children"],
  uuid: string
): { parent: LocalComponentConfig | null; current: LocalComponentConfig | null } => {
  if (!uuid) return { parent: null, current: null };
  const queue: LocalComponentConfig[] = [];
  for (const item of tree) {
    if (item.id === uuid) return { parent: null, current: item };
    queue.push(item);
  }
  while (queue.length) {
    const curNode = queue.pop() as LocalComponentConfig;
    for (const item of curNode.children) {
      if (item.id === uuid) return { parent: curNode, current: item };
      queue.push(item);
    }
  }
  return { parent: null, current: null };
};

/**
 * @param tree LocalComponentConfig.children
 * @param uuid string
 * @param key string
 * @param data unknown
 * @returns boolean
 */
export const updateOneInNodeTree = (
  tree: LocalComponentConfig["children"],
  uuid: string,
  key: string,
  data: unknown
): boolean => {
  const node = findOneInNodeTree(tree, uuid);
  if (!node) return false;
  let preKeyData: unknown = node;
  const deepKey = key.split(".");
  const lastKey = deepKey[deepKey.length - 1];
  for (let i = 0, n = deepKey.length - 1; i < n; ++i) {
    if (isObject(preKeyData)) preKeyData = preKeyData[deepKey[i]];
    else return false;
  }
  if (isObject(preKeyData)) {
    const target = preKeyData[lastKey];
    if (isObject(target) && isObject(data)) {
      preKeyData[lastKey] = { ...target, ...data };
    } else {
      preKeyData[lastKey] = data;
    }
    return true;
  }
  return false;
};
