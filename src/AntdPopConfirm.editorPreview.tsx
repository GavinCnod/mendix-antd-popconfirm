import { Component, ReactNode, createElement } from "react";
import { Popconfirm } from "antd";
import { AntdPopConfirmPreviewProps } from "../typings/AntdPopConfirmProps";

export class preview extends Component<AntdPopConfirmPreviewProps> {
    render(): ReactNode {
        return (
            <Popconfirm
                open = {true}
                title={this.props.popTitle}
                okText={this.props.popOKText}
                cancelText={this.props.popCancelText}>
                    {this.props.popContain}
            </Popconfirm>
        )
    }
}

export function getPreviewCss(): string {
    return require("./ui/AntdPopConfirm.css");
}
