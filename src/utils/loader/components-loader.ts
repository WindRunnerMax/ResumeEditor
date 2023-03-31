import { LocalComponent } from "src/types/components";

export const components: LocalComponent[] = [];

window.store = window.store ? window.store : {};

/**
 * 注册组件到应用
 * @param registerComponents (...LocalComponent[])
 */
export const register = (...registerComponents: LocalComponent[]) => {
  components.push(...registerComponents);
  registerGlobalStore(...registerComponents);
};

/**
 * 注册组件到`window.store`
 * @param registerComponents (...LocalComponent[])
 */
export const registerGlobalStore = (...registerComponents: LocalComponent[]) => {
  registerComponents.forEach(item => {
    if (item.name in components) console.warn(`${item.name} is duplicate`);
    window.store[item.name] = item;
  });
};
