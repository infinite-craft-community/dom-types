import type { IC_DOM } from "./dom";

export interface ICInstanceData {
  baseHeight: number;
  baseWidth: number;
  bounds: {
    bottom: number;
    top: number;

    left: number;
    right: number;

    height: number;
    width: number;
  };
  disabled?: boolean;
  discovery: boolean;
  dragOffset: {
    x: number;
    y: number;
  };
  element: IC_DOM.InstanceDivElement;
  emoji?: string;
  id: number;
  itemId: number;
  text: string;
  x: number;
  y: number;
}

export interface ICItemData {
  discovery?: boolean;
  emoji?: string;
  hide?: boolean;
  id: number;
  recipes?: [number, number][];
  saveId?: number;
  text: string;
}
