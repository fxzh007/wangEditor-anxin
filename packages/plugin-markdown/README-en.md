# wangEditor markdown plugin

[中文文档](./README.md)

## Introduction

Use basic markdown syntax in [wangeditor-ax](https://wangeditor-ax.github.io/docs/en/).

- Header
  - `#`
  - `##`
  - `###`
  - `####`
  - `#####`
- List `-` `+` `*`
- Blockquote `>`
- Divider `---`
- Codeblock ```js

## Installation

```sh
yarn add @wangeditor-ax/plugin-markdown
```

## Usage

You should register plugin before create editor, and register only once (not repeatedly).

```js
import { Boot } from '@wangeditor-ax/editor'
import markdownModule from '@wangeditor-ax/plugin-markdown'


Boot.registerModule(markdownModule)

// Then create editor and toolbar
```
