import { LocalComponent, LocalComponentConfig, Panel } from "src/types/components";
import deepClone from "lodash/cloneDeep";
import { v4 as uuid } from "uuid";

/**
 * 组件定义转`CLD`定义
 * @param config ComponentConfig | SubclassComponent | R(subclass类型重载)
 * @param extra  T|void
 * @returns LocalComponentConfig
 */
export const getLocalComponentConfigClone = <
  T extends Record<string, unknown>,
  R extends { type: "subclass"; name: string; module: Record<string, unknown> }
>(
  config: LocalComponent | R,
  extra?: T
): LocalComponentConfig => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { module, ...rest } = config;
  return deepClone({
    id: uuid(),
    config: {},
    style: {},
    props: {},
    children: [],
    ...rest,
    ...extra,
  });
};

/**
 * 同步获取组件定义实例
 * @param name string
 * @param type "local" | "remote" | "subclass"
 * @return Panel | void
 */
export function getComponentInstanceSync(name: string): Panel | void {
  if (!window.store[name]) return void 0;
  return (window.store[name] as LocalComponent).module;
}
