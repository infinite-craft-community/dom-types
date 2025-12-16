import type { InfiniteCraftClientAPI } from "./client-api";
import type {
  ICElementIdMap,
  ICElementSelectorAllMap,
  ICElementSelectorMap,
} from "./types/dom";

declare global {
  interface Element {
    matches<K extends keyof ICElementSelectorAllMap>(
      selectors: K
    ): this is ICElementSelectorAllMap[K];
  }

  interface ParentNode {
    querySelector<K extends keyof ICElementSelectorAllMap>(
      selectors: K
    ): ICElementSelectorAllMap[K] | null;
    querySelector<K extends keyof HTMLElementTagNameMap>(
      selectors: K
    ): HTMLElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;

    querySelectorAll<K extends keyof ICElementSelectorAllMap>(
      selectors: K
    ): NodeListOf<ICElementSelectorAllMap[K]>;
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(
      selectors: K
    ): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(
      selectors: string
    ): NodeListOf<E>;
  }

  interface Document {
    getElementById<K extends keyof ICElementIdMap>(
      elementId: K
    ): ICElementIdMap[K];
    getElementById(elementId: string): HTMLElement | null;

    querySelector<K extends keyof ICElementIdMap>(
      selectors: `#${K}`
    ): ICElementIdMap[K];
    querySelector<K extends keyof ICElementSelectorAllMap>(
      selectors: K
    ): ICElementSelectorAllMap[K] | null;
    querySelector<K extends keyof ICElementSelectorMap>(
      selectors: K
    ): ICElementSelectorMap[K];
    querySelector<K extends keyof HTMLElementTagNameMap>(
      selectors: K
    ): HTMLElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
  }

  interface Window {
    readonly IC: InfiniteCraftClientAPI;
  }

  const IC: InfiniteCraftClientAPI;
}
