import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { Item } from "./item";

export const tagName = "list-view";

@customElement(tagName)
export class ListView extends LitElement {
    static styles = css`
    main {
      display: flex;
      flex-direction: column;
      --header-height: 80px;
    }
    header {
      display: flex;
      align-items: center;

      border-bottom: 1px solid #ccc;
      height: var(--header-height);
      box-sizing: border-box;
      padding: 0 1rem;
      font-size: 0.8rem;
    }
    ul {
      position: absolute;
      top: var(--header-height);
      left: 0;
      right: 0;
      bottom: 0;

      overflow-y: auto;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 0.5rem 1rem;
    }
    li[selected] span {
      text-decoration: underline;
    }
    span {
      padding-right: 1rem;
    }
    li:first-child {
      padding-top: 1rem;
    }
    li:last-child {
      padding-bottom: 1rem;
    }
  `;

    @property() name?: string;
    @property({ type: Object }) selected?: Item;
    @property({ type: Array }) items: Item[] = [];

    render() {
        return html`<main>
      <header>
        <slot name="back"></slot>
        <h1>${this.name ?? "List View"}</h1>
      </header>
      <ul>
        ${repeat(this.items, (item) => item.id, this.buildItem.bind(this))}
      </ul>
    </main> `;
    }

    private buildItem(item: Item, index: number) {
        return html`<li id=${index} ?selected=${this.selected?.id === item.id}>
      <span> ${index}: ${item.name} </span>
      <button @click=${() => this.onSelectList(index)}>Items</button>
      <button @click=${() => this.onSelectDetails(index)}>Details</button>
    </li>`;
    }

    private onSelectList(index: number) {
        const item = this.items[index];
        const event = new CustomEvent("select-list", {
            detail: { item, index },
        });
        this.dispatchEvent(event);
    }

    private onSelectDetails(index: number) {
        const item = this.items[index];
        const event = new CustomEvent("select-details", {
            detail: { item, index },
        });
        this.dispatchEvent(event);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ListView;
    }
}
