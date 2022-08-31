import { LitElement } from "lit";
import { Item } from "./item";
export declare const tagName = "detail-view";
export declare class DetailView extends LitElement {
    static styles: import("lit").CSSResult;
    item: Item;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: DetailView;
    }
}
