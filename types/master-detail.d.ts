import { LitElement } from "lit";
import { Item } from "./item";
import "./list-view.js";
import "./detail-view.js";
export declare const tagName = "master-detail";
export declare class MasterDetail extends LitElement {
    static styles: import("lit").CSSResult;
    item?: Item;
    items?: Item[];
    selected?: Item;
    showList: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private buildBody;
    private onSelectDetails;
    private onSelectList;
    private onBack;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MasterDetail;
    }
}
