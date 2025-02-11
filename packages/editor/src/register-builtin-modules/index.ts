/**
 * @description register builtin modules
 * @author wangfupeng
 */

// basic-modules
import '@wangeditor-ax/basic-modules/dist/css/style.css'
import '@wangeditor-ax/list-module/dist/css/style.css'
// table-module
import '@wangeditor-ax/table-module/dist/css/style.css'
// video-module
import '@wangeditor-ax/video-module/dist/css/style.css'
// upload-image-module
import '@wangeditor-ax/upload-image-module/dist/css/style.css'
// code-highlight
import '@wangeditor-ax/code-highlight/dist/css/style.css'

import basicModules from '@wangeditor-ax/basic-modules'
import { wangEditorCodeHighlightModule } from '@wangeditor-ax/code-highlight'
import wangEditorListModule from '@wangeditor-ax/list-module'
import wangEditorTableModule from '@wangeditor-ax/table-module'
import wangEditorUploadImageModule from '@wangeditor-ax/upload-image-module'
import wangEditorVideoModule from '@wangeditor-ax/video-module'

import registerModule from './register'

basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorVideoModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)
