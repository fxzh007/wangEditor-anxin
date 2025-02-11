import { IDomEditor } from '@wangeditor-ax/editor'
import { CursorEditor } from '@wangeditor-ax/yjs'

import { useEditorStatic } from './use-editor-static'

export function useRemoteCursorEditor<
  TCursorData extends Record<string, unknown> = Record<string, unknown>,
>(): CursorEditor<TCursorData> & IDomEditor {
  const editor = useEditorStatic()

  if (!CursorEditor.isCursorEditor(editor)) {
    console.warn('Cannot use useSyncExternalStore outside the context of a RemoteCursorEditor')
  }

  return editor as CursorEditor & IDomEditor
}
