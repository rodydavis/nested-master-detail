import { LitElement } from "lit";
import { Item } from "./item";
export declare const tagName = "list-view";
export declare class ListView extends LitElement {
    static styles: import("lit").CSSResult;
    name?: string;
    selected?: Item;
    items: Item[];
    render(): import("lit-html").TemplateResult<1>;
    private buildItem;
    private onSelectList;
    private onSelectDetails;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ListView;
    }
}
