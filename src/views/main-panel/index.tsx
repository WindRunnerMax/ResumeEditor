import "./index.scss";
import { IconDragDot } from "@arco-design/web-react/icon";
import { useContext, useState } from "react";
import { AppContext } from "src/store/context";
import { getComponentInstanceSync } from "src/utils/components-utils";
import { generateLayout } from "./utils";
import GridLayout, { Layout, WidthProvider } from "react-grid-layout";
import { arrayMapper, cs } from "src/utils/common/utils";
import { LocalComponentConfig } from "src/types/components";
import { actions } from "src/store/actions";
import ReferenceLine from "src/views/main-panel/components/reference-line";
import { ToolBar } from "src/views/main-panel/components/tool-bar";
import { ResizeObserverHOC } from "./components/reszie-observe";
import { Empty } from "./components/empty";
const ResponsiveGridLayout = WidthProvider(GridLayout);

type PedestalMainProps = {
  className?: string;
  rowHeight: number;
  cols: number;
  minHeight: number | string;
  allowOverlap: boolean;
};
export const MainPanel: React.FC<PedestalMainProps> = props => {
  const { state, mode, dispatch } = useContext(AppContext);
  const instance = state.cld;
  const isRender = mode === "render";
  const { rowHeight, cols, minHeight, allowOverlap } = props;
  const [dragging, setDragging] = useState(false);
  const layouts = generateLayout(instance.children, cols, isRender);

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
    config?: LocalComponentConfig
  ) => {
    if (isRender) return void 0;
    if (!config) {
      dispatch({ type: actions.SELECT_NODE, payload: { id: "", name: "" } });
      return void 0;
    }
    if (config.id !== state.selectedNode.id) {
      dispatch({
        type: actions.SELECT_NODE,
        payload: { id: config.id, name: config.name },
      });
    }
    e.stopPropagation();
  };

  const dragStart = () => {
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
    <div className={props.className} onClick={e => focusElement(e)}>
      <div className={cs("pedestal-main-container", isRender && "render-mode")}>
        {instance.children.length ? (
          <>
            <ReferenceLine
              style={{ minHeight }}
              display={!isRender && dragging}
              rows={rowHeight}
              cols={cols}
            >
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
                useCSSTransforms={false} // 在`ObserveResize`时会出现动画
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
                        !isRender && state.selectedNode.id === item.id && "pedestal-item-focus"
                      )}
                      key={item.id}
                      onClick={e => focusElement(e, item)}
                    >
                      <ToolBar
                        selectedId={state.selectedNode.id}
                        dispatch={dispatch}
                        config={item}
                        cols={cols}
                        display={!isRender && !dragging}
                      >
                        {item.config.observeResize ? (
                          <ResizeObserverHOC
                            dispatch={dispatch}
                            instance={item}
                            isRender={isRender}
                            component={Component}
                            rowHeight={rowHeight}
                          ></ResizeObserverHOC>
                        ) : (
                          <Component
                            dispatch={dispatch}
                            instance={item}
                            isRender={isRender}
                          ></Component>
                        )}
                      </ToolBar>
                      <div className="pedestal-drag-dot" onMouseUp={dragStop}>
                        <IconDragDot />
                      </div>
                    </div>
                  );
                })}
              </ResponsiveGridLayout>
            </ReferenceLine>
          </>
        ) : (
          <Empty></Empty>
        )}
      </div>
    </div>
  );
};

export default MainPanel;
