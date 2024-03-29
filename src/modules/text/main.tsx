import "./index.scss";
import "doc-editor-plugin/dist/styles/index";

import { FC, useMemo } from "react";
import { LocalComponentConfig } from "src/types/components";
import { classes } from "src/utils/common/style";
import { EditorPlugin, makeEditor } from "doc-editor-core";
import { EditorProvider, BaseNode, Editable } from "doc-editor-delta";
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
  FontBasePlugin,
  LineHeightPlugin,
} from "doc-editor-plugin";
import { useMemoizedFn } from "ahooks";
import { debounce } from "lodash";
import { actions } from "src/store/actions";
import { ContextDispatch } from "src/store/context";
import { schema } from "./schema";

export const RichText: FC<{
  className?: string;
  instance: LocalComponentConfig;
  dispatch: ContextDispatch;
  isRender: boolean;
}> = props => {
  const editor = useMemo(() => makeEditor(schema), []);

  const initText = (props.instance.props as Record<string, BaseNode[]>).text || [
    { children: [{ text: "" }] },
  ];

  const updateText = useMemoizedFn(
    debounce((text: BaseNode[]) => {
      props.dispatch({
        type: actions.UPDATE_ONE_NO_UNDO,
        payload: { id: props.instance.id, key: "props", data: { text } },
      });
    }, 500)
  );

  const { renderElement, renderLeaf, onKeyDown, commands } = useMemo(() => {
    const register = new EditorPlugin(
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

  return (
    <div className={classes("pedestal-text", props.className)} style={props.instance.style}>
      <EditorProvider editor={editor} value={initText} onChange={updateText}>
        <div onClick={e => e.stopPropagation()}>
          <MenuToolBar readonly={props.isRender} commands={commands} editor={editor}></MenuToolBar>
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          readOnly={props.isRender}
          placeholder="Enter text ..."
          onKeyDown={onKeyDown}
        />
      </EditorProvider>
    </div>
  );
};

RichText.defaultProps = {
  className: "",
};
