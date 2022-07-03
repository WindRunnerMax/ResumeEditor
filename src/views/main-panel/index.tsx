import "../index.scss";
import { IconDragDot } from "@arco-design/web-react/icon";
import { useContext, useState } from "react";
import { AppContext } from "src/store/context";
import { getComponentInstanceSync } from "src/utils/components-utils";
import { generateLayout } from "./utils";
import GridLayout, { Layout, WidthProvider } from "react-grid-layout";
import { arrayMapper, cs } from "src/utils/common/utils";
import { LocalComponentConfig } from "src/types/components-types";
import { actions } from "src/store/actions";
import ReferenceLine from "src/views/main-panel/components/reference-line";
import { ToolBar } from "src/views/main-panel/components/tool-bar";
const ResponsiveGridLayout = WidthProvider(GridLayout);

type PedestalMainProps = {
  className?: string;
  rowHeight: number;
  cols: number;
  minHeight: number | string;
  allowOverlap: boolean;
};
export const MainPanel: React.FC<PedestalMainProps> = props => {
  const { state, dispatch } = useContext(AppContext);
  const instance = state.cld;
  const { rowHeight, cols, minHeight, allowOverlap } = props;
  const [dragging, setDragging] = useState(false);
  const layouts = generateLayout(instance.children, cols);

  const layoutChange = (layouts: Layout[]) => {
    const idNodeMap = arrayMapper(instance.children, "id");
    const nodeChildren: LocalComponentConfig[] = layouts.map(item => {
      const curNode = idNodeMap[item.i];
      return { ...curNode, config: { ...curNode.config, layout: { ...item } } };
    });
    dispatch({
      type: actions.UPDATE_ALL,
      payload: { data: nodeChildren },
    });
  };

  const focusElement = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    config: LocalComponentConfig
  ) => {
    if (config.id === state.selectedNode.id) {
      // 再点击一次则取消选中
      dispatch({ type: actions.SELECT_NODE, payload: { id: "", name: "" } });
    } else {
      dispatch({
        type: actions.SELECT_NODE,
        payload: { id: config.id, name: config.name },
      });
    }
    e.stopPropagation();
  };

  const dragStart = () => {
    // 开始拖动的时候取消选中元素
    dispatch({ type: actions.SELECT_NODE, payload: { id: "", name: "" } });
    setDragging(true);
  };

  const dragStop = () => {
    setDragging(false);
  };

  const resizeStart = () => {
    setDragging(true);
  };
  const resizeStop = () => {
    setDragging(false);
  };

  return (
    <div className={props.className}>
      <div className="pedestal-main-container">
        <ReferenceLine style={{ minHeight }} display={dragging} rows={rowHeight} cols={cols}>
          <ResponsiveGridLayout
            className="pedestal-responsive-grid-layout"
            style={{ minHeight }}
            layout={layouts}
            autoSize
            draggableHandle=".pedestal-drag-dot"
            margin={[0, 0]}
            onLayoutChange={layoutChange}
            cols={cols}
            rowHeight={rowHeight}
            measureBeforeMount
            onDragStart={dragStart}
            onDragStop={dragStop}
            onResizeStart={resizeStart}
            onResizeStop={resizeStop}
            allowOverlap={allowOverlap}
            compactType={null} // 关闭垂直压实
            preventCollision // 关闭重新排列
            // useCSSTransforms={false}
          >
            {instance.children.map(item => {
              const componentInstance = getComponentInstanceSync(item.name);
              if (!componentInstance) return null;
              const Component = componentInstance.main;
              return (
                <div
                  id={item.id}
                  className={cs(
                    "pedestal-item",
                    state.selectedNode.id === item.id && "pedestal-item-focus"
                  )}
                  key={item.id}
                  onClick={e => focusElement(e, item)}
                >
                  <ToolBar
                    selectedId={state.selectedNode.id}
                    dispatch={dispatch}
                    config={item}
                    cols={cols}
                  >
                    <Component dispatch={dispatch} instance={item}></Component>
                  </ToolBar>
                  <div
                    className="pedestal-drag-dot"
                    onClick={e => e.stopPropagation()}
                    onMouseUp={dragStop}
                  >
                    <IconDragDot />
                  </div>
                </div>
              );
            })}
          </ResponsiveGridLayout>
        </ReferenceLine>
      </div>
    </div>
  );
};

export default MainPanel;
