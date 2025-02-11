/**
 * @description interface
 * @author wangfupeng
 */

import { IDomEditor } from '@wangeditor-ax/editor'

export interface IExtendConfig {
  mentionConfig: {
    showModal: (editor: IDomEditor) => void
    hideModal: (editor: IDomEditor) => void
  }
}
