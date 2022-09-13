import "./index.scss";
import "doc-editor-light/dist/plugins/styles";
import { FC, useMemo } from "react";
import { LocalComponentConfig } from "src/types/components-types";
import { classes } from "src/utils/common/utils";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor, Descendant } from "slate";
import {
  AlignPlugin,
  BoldPlugin,
  DividingLinePlugin,
  HeadingPlugin,
  HyperLinkPlugin,
  InlineCodePlugin,
  ItalicPlugin,
  MenuToolBar,
  OrderedListPlugin,
  ParagraphPlugin,
  QuoteBlockPlugin,
  ShortCutPlugin,
  StrikeThroughPlugin,
  UnderLinePlugin,
  UnorderedListPlugin,
  SlatePlugins,
  FontBasePlugin,
  LineHeightPlugin,
} from "doc-editor-light";
import { useMemoizedFn } from "ahooks";
import { debounce } from "lodash";
import { actions } from "src/store/actions";
import { ContextDispatch } from "src/store/context";

export const RichText: FC<{
  className?: string;
  instance: LocalComponentConfig;
  dispatch: ContextDispatch;
  isRender: boolean;
}> = props => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const initText = (props.instance.props as Record<string, Descendant[]>).text || [
    { children: [{ text: "" }] },
  ];

  const updateText = useMemoizedFn(
    debounce((text: Descendant[]) => {
      props.dispatch({
        type: actions.UPDATE_ONE,
        payload: { id: props.instance.id, key: "props", data: { text } },
      });
    }, 500)
  );

  const { renderElement, renderLeaf, onKeyDown, withVoidElements, commands, onCopy } =
    useMemo(() => {
      const register = new SlatePlugins(
        ParagraphPlugin(),
        HeadingPlugin(editor),
        BoldPlugin(),
        QuoteBlockPlugin(editor),
        HyperLinkPlugin(editor, props.isRender),
        UnderLinePlugin(),
        StrikeThroughPlugin(),
        ItalicPlugin(),
        InlineCodePlugin(),
        OrderedListPlugin(editor),
        UnorderedListPlugin(editor),
        DividingLinePlugin(),
        AlignPlugin(),
        FontBasePlugin(),
        LineHeightPlugin()
      );

      const commands = register.getCommands();
      register.add(ShortCutPlugin(editor, commands));

      return register.apply();
    }, [editor, props.isRender]);

  const withVoidEditor = useMemo(() => withVoidElements(editor), [editor, withVoidElements]);
  return (
    <div className={classes("pedestal-text", props.className)} style={props.instance.style}>
      <Slate editor={withVoidEditor} value={initText} onChange={updateText}>
        <div onClick={e => e.stopPropagation()}>
          <MenuToolBar isRender={props.isRender} commands={commands}></MenuToolBar>
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          readOnly={props.isRender}
          placeholder="Enter text ..."
          onKeyDown={onKeyDown}
          onCopy={e => onCopy(e, editor)}
        />
      </Slate>
    </div>
  );
};

RichText.defaultProps = {
  className: "",
};
