import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

export function backButton(cb: () => void) {
    return html` <button
    slot="back"
    style=${styleMap({
        background: "none",
        color: "inherit",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        marginRight: "1rem",
        cursor: "pointer",
    })}
    @click=${() => cb()}
  >
    <
  </button>`;
}
