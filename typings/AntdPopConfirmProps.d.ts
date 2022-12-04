/**
 * This file was generated from AntdPopConfirm.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, DynamicValue } from "mendix";

export type PopPlacementEnum = "top" | "topLeft" | "topRight" | "left" | "leftTop" | "leftBottom" | "right" | "rightTop" | "rightBottom" | "bottom" | "bottomLeft" | "bottomRight";

export interface AntdPopConfirmContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    popTitle: DynamicValue<string>;
    popDisabled: boolean;
    popPlacement: PopPlacementEnum;
    popClass: string;
    popContain: ReactNode;
    popOKText: string;
    popOnConfirmEvent?: ActionValue;
    popShowCancel: boolean;
    popCancelText: string;
    popOnCancelEvent?: ActionValue;
}

export interface AntdPopConfirmPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    popTitle: string;
    popDisabled: boolean;
    popPlacement: PopPlacementEnum;
    popClass: string;
    popContain: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    popOKText: string;
    popOnConfirmEvent: {} | null;
    popShowCancel: boolean;
    popCancelText: string;
    popOnCancelEvent: {} | null;
}
