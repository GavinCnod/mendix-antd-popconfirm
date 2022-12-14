**https://img.shields.io/github/downloads/GavinCnod/mendix-antd-popconfirm/total?style=social**![GitHub all releases](https://img.shields.io/github/downloads/GavinCnod/mendix-antd-popconfirm/total?style=social)

## 介绍
基于 Ant Design PopConfirm 组件封装的 Mendix Pluggable Widget，提供功能完备的弹出式浮动确认对话框。和弹出式的全屏居中模态对话框相比，交互形式更轻量。
A Mendix widget provide simple and compact confirmation dialog of an action, which based on Ant Design Component.

## 功能特性
1. 提供基于 Mendix textTemplate 的文本拼装能力渲染对话框标题。
2. 可自定义确认/取消（Confirm/Cancel）按钮文本。
3. 可自定义对话框相对位置（placement），默认包含12种。
4. 可自定义对话框 CSS 样式，通过配置项中的 Class Name 引入。
5. 除默认带双按钮的默认样式，可定义仅确认（Confirm）按钮的简化样式。
6. 容器中可容纳多种类型的 Mendix Widget（支持 OnClick 事件即可）。

## 快速安装和使用

### 将该组件添加到 Mendix Project 中
1. 从右边 Releases 处下载 mpk 文件。
2. 把 mpk 文件复制到您的 Project 目录下 `{YourMendixProjectFolder}/widgets/`
3. 用 Mendix Studio Pro 打开你的 Mendix Project，然后点击菜单 `Menu > App > Synchronize App Directory`.

### 快速配置组件

1. 选择任意页面，向页面添加一个 `Antd PopConfirm`。
2. 向上述 `PopConfirm` 中添加子组件，可为 `Button`, `Antd Button`, `Badge`, `Text`, `Label` 等组件。如需实现动态的 Title 文本，需将 PopConfirm 组件放在一个 Data container 容器组件中。
   
   <img width="378" alt="popconfirm-help-1" src="https://user-images.githubusercontent.com/24690236/205483695-954023f8-287d-4f29-869c-3042ebacf155.png">

3. 为该组件设置必要的属性。包括： `Title`, `Placement`, `Confirm Text`, `Confirm Event`, `Cancel Text` , `Cancel Event`.
   
   <img width="434" alt="popconfirm-help-3" src="https://user-images.githubusercontent.com/24690236/205483726-68b1e4e0-261b-45ad-accb-4d08c7d66950.png">

4. 运行。
   
## Demo 项目

1. 你可以在[这里](todo)访问在线 demo。  
2. 也可以下载 demo project，在自己的 Mendix Studio Pro 上启动运行。具体方法如下：
    1. clone demo project。
    2. 运行。

## 详细配置说明
### General Section
* Title：弹出框标题。
* Disabled：是否禁用弹出框，默认为`No`.
* Placement：弹出框相对子组件的位置，共12种选项。
* Class Name：弹出框样式。
### Confirm Setting Section
* Confirm Text：确认按钮文本。
* On Confirm Event：点击确认按钮事件。
### Cancel Setting Section
* Show Cancel：是否展示取消按钮，默认为`Yes`.
* Cancel Text：取消按钮文本。
* On Cancel Event：点击取消按钮事件。

## 与 `antd` PopConfirm 的功能对比

这里列举了 `antd` 中 `PopConfirm` 的所有参数，并说明了该组件是否支持该属性，以及不支持的原因。如果想查看`antd`中原属性的含义，请[移步这里](https://ant.design/components/popconfirm)。

| antd 组件参数             | 参数说明                                       | 是否支持 | 备注                   |
| --------------------- | ------------------------------------------ | ---- | -------------------- |
| cancelText            | 取消按钮文字                                | Y    |                      |
| disabled              | 阻止点击 Popconfirm 子元素时弹出确认框       | Y    |                     |
| icon                  | 自定义弹出气泡 Icon 图标                    | N    | 存在 CSS 覆盖问题待补全     |
| okText                | 确认按钮文字                                | Y    |                      |
| okType                | 确认按钮类型                                | N    | 暂无需用到                     |
| showCancel            | 是否显示取消按钮                            | Y    |                      |
| title                 | 确认框的描述                                | Y    |                      |
| onCancel              | 点击取消的回调                              | Y    |                      |
| onConfirm             | 点击确认的回调                              | Y    |                      |

此外，从共用部分参数的 `Tooltip` 中引入以下参数。
| antd 组件参数             | 参数说明                                       | 是否支持 | 备注                   |
| --------------------- | ------------------------------------------ | ---- | -------------------- |
| overlayClassName             | 卡片类名                             | Y    |                 |
| Placement             | 弹出框相对子组件的位置，共12种选项。           | Y    |                 |


## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
2. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
