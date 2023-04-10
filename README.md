![GitHub all releases](https://img.shields.io/github/downloads/GavinCnod/mendix-antd-popconfirm/total?style=social)

Readme here: [Readme in English](https://github.com/GavinCnod/mendix-antd-popconfirm/blob/main/README.md) | [Readme in Chinese (中文）](https://github.com/GavinCnod/mendix-antd-popconfirm/blob/main/README_CN.md)

## Introduction
A Mendix widget provide simple and compact confirmation dialog of an action, which based on Ant Design Component [Popconfirm](https://ant.design/components/popconfirm). The difference with the confirm modal dialog is that it's more lightweight than the static popped full-screen confirm modal.

## Features
1. The Title, OK/Confirm button text and Cancel button text can be modified. 
2. The Title can render based on Mendix textTemplate pluggable widget feature.
3. There are 12 placement options available.。
4. Customizing of dialog CSS style with the `Class Name` parameter.
5. To futher simplify the UX, only Confirm button but without Cancel button also available.
6. Acting as a container to contain multi Mendix Widgets (need `OnClick` event).

## Installation and Usage

### Add this widget to the Mendix Project
1. Download the mpk file from [here](https://github.com/GavinCnod/mendix-antd-popconfirm/releases).
2. Copy the mpk file to your Mendix Project directory `{YourMendixProjectFolder}/widgets/`.
3. Open your Mendix Project with Mendix Studio Pro and click on the menu `Menu > App > Synchronize App Directory`.

### Set properties

1. Add widget `Antd PopConfirm` to a Page.
2. Add sub-widget in the `PopConfirm` container，can be `Button`, `Antd Button`, `Badge`, `Text`, `Label` and etc. The Title can use some dynamic text in Mendix (need to put PopConfirm in a Data container).
   
   <img width="378" alt="popconfirm-help-1" src="https://user-images.githubusercontent.com/24690236/205483695-954023f8-287d-4f29-869c-3042ebacf155.png">

3. Config the parameters, including: `Title`, `Placement`, `Confirm Text`, `Confirm Event`, `Cancel Text` , `Cancel Event`.
   
   <img width="434" alt="popconfirm-help-3" src="https://user-images.githubusercontent.com/24690236/205483726-68b1e4e0-261b-45ad-accb-4d08c7d66950.png">

4. Run the project locally and check.
   
## Demo Project

1. You can access the online demo from [here](https://demo-antdwidgets100.apps.ap-2a.mendixcloud.com/) to show the features of this widget.
2. You can also download the demo project to run it on your own PC.

## Datail of properties
### General Section
* Title：Pop dialog title.
* Disabled：Disabled or not, default as `No`.
* Placement：Dialog placement.
* Class Name：CSS style.
### Confirm Setting Section
* Confirm Text：OK/Confirm button text.
* On Confirm Event：OK/Confirm button event.
### Cancel Setting Section
* Show Cancel：Show Cancel button or not, default as `Yes`.
* Cancel Text：Cancel button text.
* On Cancel Event：Cancel button event.

## Comparing the `antd` `PopConfirm` 

Here is a list of all the properties of `Popconfirm` in `antd`, with a description of whether this widget supports the property and why it does not. To see the meaning of the original property in antd, please [move here](https://ant.design/components/popconfirm)。

| antd properties             | Description                                       | Supported | Comments                 |
| --------------------- | ------------------------------------------ | ---- | -------------------- |
| cancelText            | Cancel button text                                | Y    |                      |
| disabled              | Whether show popconfirm dialog or not       | Y    |                     |
| icon                  | Customize icon of confirmation                   | N    | WIP     |
| okText                | OK/Confirm button text                                | Y    |                      |
| okType                | OK/Confirm button type                                | N    | No need in Mx Widget                     |
| showCancel            | Show cancel button                            | Y    |                      |
| title                 | Title of pop dialog                                | Y    |                      |
| onCancel              | Cancel button event                              | Y    |                      |
| onConfirm             | OK/Confirm button event                              | Y    |                      |

Besides, some properties from `Tooltip` are also available.
| antd properites             | Description                                       | Supported | Comments                   |
| --------------------- | ------------------------------------------ | ---- | -------------------- |
| overlayClassName             | CSS style                             | Y    |                 |
| Placement             | Dialog placement with 12 options           | Y    |                 |


## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
2. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
