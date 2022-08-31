import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Item } from "./item";

export const tagName = "detail-view";

@customElement(tagName)
export class DetailView extends LitElement {
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
    section {
      padding: 0 1rem;
    }
  `;

    @property({ type: Object }) item!: Item;

    render() {
        const { id, name } = this.item;
        return html` <main>
      <header>
        <slot name="back"></slot>
        <h1>${name}</h1>
      </header>
      <section><p>Index: ${id}</p></section>
    </main>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [tagName]: DetailView;
    }
}
