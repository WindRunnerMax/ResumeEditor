import { Layout } from "react-grid-layout";
import { LocalComponentConfig } from "src/types/components";

type InitLayout = {
  x: number;
  y: number;
  w: number;
  h: number;
  isDraggable: boolean;
  isResizable: boolean;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
};

const initLayout: InitLayout = {
  x: 0,
  y: 0,
  w: 10,
  h: 30,
  isDraggable: true,
  isResizable: true,
  minW: 1,
  minH: 1,
};

export const generateLayout = (
  instances: LocalComponentConfig[],
  cols: number,
  isRender?: boolean
): Layout[] => {
  return instances.map(item => {
    const defaultLayout: Layout = { i: item.id, ...initLayout };
    if (item.config.layout) {
      const configLayout: Layout = item.config.layout as Layout;
      const layout = { ...defaultLayout, ...configLayout };
      layout.isDraggable = !isRender;
      layout.isResizable = !isRender;

      // 当网格调整时需要重新计算大小
      const x = layout.x;
      const w = layout.w;
      const differ = x + w - cols;
      if (differ > 0) {
        if (x >= differ) {
          // 格子足够 平移解决
          layout.x = x - differ;
        } else if (w - cols > 0) {
          // 格子不够 缩小元素
          layout.x = 0;
          layout.w = cols;
        }
      }

      return layout;
    }
    return defaultLayout;
  });
};
