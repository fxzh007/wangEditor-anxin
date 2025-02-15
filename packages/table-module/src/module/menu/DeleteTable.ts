/**
 * @description del table menu
 * @author wangfupeng
 */

import {
  DomEditor, IButtonMenu, IDomEditor, t,
} from '@wangeditor-ax/core'
import { Transforms } from 'slate'

import { TRASH_SVG } from '../../constants/svg'

class DeleteTable implements IButtonMenu {
  readonly title = t('tableModule.deleteTable')

  readonly iconSvg = TRASH_SVG

  readonly tag = 'button'

  getValue(_editor: IDomEditor): string | boolean {
    // 无需获取 val
    return ''
  }

  isActive(_editor: IDomEditor): boolean {
    // 无需 active
    return false
  }

  isDisabled(editor: IDomEditor): boolean {
    if (editor.selection == null) { return true }

    const tableNode = DomEditor.getSelectedNodeByType(editor, 'table')

    if (tableNode == null) {
      // 选区未处于 table node ，则禁用
      return true
    }
    return false
  }

  exec(editor: IDomEditor, _value: string | boolean) {
    if (this.isDisabled(editor)) { return }

    // 删除表格
    Transforms.removeNodes(editor, { mode: 'highest' })
  }
}

export default DeleteTable
