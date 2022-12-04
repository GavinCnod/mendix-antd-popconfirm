import { Component, ReactNode, createElement } from "react";
import { Popconfirm } from "antd";

import { AntdPopConfirmContainerProps } from "../typings/AntdPopConfirmProps";

import "./ui/AntdPopConfirm.css";

export class AntdPopConfirm extends Component<AntdPopConfirmContainerProps> {
    private readonly onConfirmClickHandler = this.onClickConfirm.bind(this);
    private readonly onCancelClickHandler = this.onClickCancel.bind(this);

    render(): ReactNode {
        return (
            <Popconfirm
                placement={this.props.popPlacement}
                title={String(this.props.popTitle.value)}
                // icon={this.props.popIcon}
                okText={this.props.popOKText}
                cancelText={this.props.popCancelText}
                disabled={this.props.popDisabled}
                showCancel={this.props.popShowCancel}
                overlayClassName={this.props.popClass}
                onConfirm={this.onConfirmClickHandler}
                onCancel={this.onCancelClickHandler}
            >
                {this.props.popContain}
            </Popconfirm>
        );
    }

    private onClickConfirm(): void {
        if (this.props.popOnConfirmEvent && this.props.popOnConfirmEvent.canExecute) {
            this.props.popOnConfirmEvent.execute();
        }
    }
    private onClickCancel(): void {
        if (this.props.popOnCancelEvent && this.props.popOnCancelEvent.canExecute) {
            this.props.popOnCancelEvent.execute();
        }
    }
}
