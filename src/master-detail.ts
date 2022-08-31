import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Item } from "./item";

import "./list-view.js";
import "./detail-view.js";
import { backButton } from "./back-button";

export const tagName = "master-detail";

@customElement(tagName)
export class MasterDetail extends LitElement {
    static styles = css`
    main {
      display: flex;
      height: 100%;
      width: 100%;
      container-type: inline-size;
    }
    list-view {
      flex: 1;
      max-width: 300px;
      min-width: 300px;
      overflow-y: auto;
      overflow-x: hidden;
      border-right: 1px solid #ccc;
    }
    .details {
      flex: 1;
    }
    .empty {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .details button {
      display: none;
    }
    @container (inline-size < 600px) {
      main list-view {
        max-width: 100%;
      }
      main[selected] list-view {
        display: none;
      }
      main[selected] .details button {
        display: block;
      }
      .empty {
        display: none;
      }
    }
  `;

    @property({ type: Object }) item?: Item;
    @property({ type: Array }) items?: Item[];
    @state() selected?: Item;
    @state() showList = false;

    render() {
        return html`
      <main ?selected=${this.selected !== undefined}>
        <list-view
          .name=${this.item?.name}
          .items=${this.items ?? Array.from(itemGenerator(100))}
          .selected=${this.selected}
          @select-details=${this.onSelectDetails}
          @select-list=${this.onSelectList}
        >
          <slot slot="back" name="back"></slot>
        </list-view>
        ${this.buildBody()}
      </main>
    `;
    }

    private buildBody() {
        if (this.selected) {
            if (this.showList) {
                return html`<master-detail
          class="details"
          .item=${this.selected}
          .items=${Array.from(itemGenerator(50))}
        >
          ${backButton(() => this.onBack())}
        </master-detail>`;
            } else {
                return html`<detail-view
          class="details"
          .item=${this.selected}
          @back=${this.onBack}
        >
          ${backButton(() => this.onBack())}
        </detail-view>`;
            }
        }
        return html`
      <div class="details empty"><p>Select an item from the list</p></div>
    `;
    }

    private onSelectDetails(event: CustomEvent) {
        const { detail } = event;
        console.log("onSelectDetails", detail);
        this.showList = false;
        this.selected = detail.item;
    }

    private onSelectList(event: CustomEvent) {
        const { detail } = event;
        console.log("onSelectList", detail);
        this.showList = true;
        this.selected = detail.item;
    }

    private onBack() {
        this.selected = undefined;
    }
}

function* itemGenerator(total: number): Generator<Item> {
    for (let i = 0; i < total; i++) {
        yield { id: i, name: `Item ${i}` };
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MasterDetail;
    }
}
