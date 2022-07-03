import { isPlainNumber, isString } from "./is";

/**
 * @param arr Record<string, unknown>[]
 * @param key string
 * @returns Record<string, T>
 */
export const arrayMapper = <T extends Record<string, unknown>>(
  arr: T[],
  key: string
): Record<string, T> => {
  const mapper: Record<string, T> = {};
  arr.forEach(item => {
    const mapperKey = item[key];
    if (typeof mapperKey === "string") mapper[mapperKey] = item;
  });
  return mapper;
};

/**
 * @param iterable [string, value][]
 * @returns Record<string, T>
 */
export const arrayMapperFromEntries = <T>(iterable: Iterable<[string, T]>): Record<string, T> => {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {} as Record<string, T>);
};

export const getStringifyStyle = (value?: string | number): string | undefined => {
  return isPlainNumber(value) ? value + "px" : value;
};

export const classes = (...values: unknown[]) => {
  return values.filter(it => isString(it)).join(" ");
};
export const cs = classes;
