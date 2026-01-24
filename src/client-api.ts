import type { ICInstanceData, ICItemData } from "./types";

export interface InfiniteCraftClientAPI {
  getInstances(): ICInstanceData[];
  getItems(): ICItemData[];
  getZoom(): number;
  getCanvasPos(): { x: number; y: number };

  hideItem(item: ICItemData): void;

  clearInstances(): void;
  createInstance(instance: {
    animate?: boolean;
    discovery?: boolean;
    emoji?: string;
    id?: number;
    itemId: number;
    text: string;
    topLayer?: boolean;
    save?: boolean;
    x: number;
    y: number;
  }): ICInstanceData;
  duplicateInstances(instances: ICInstanceData[], offset?: number): void;
  loadInstances(
    instances: {
      discovery?: boolean;
      emoji: string;
      id: number;
      itemId: number;
      text: string;
      x: number;
      y: number;
    }[],
  ): void;
  removeInstances(instances: ICInstanceData[]): void;
  updateInstances(instances: ICInstanceData[]): void;

  panCanvas(dx: number, dy: number): void;
  setCamera(pos: { x: number; y: number }): void;
  setZoom(zoom: number): void;

  screenToWorld(x: number, y: number): { x: number; y: number };
  worldToScreen(x: number, y: number): { x: number; y: number };

  resetSave(id: number): void;
  switchSave(id: number): void;

  toggleDarkMode(): void;
  toggleSound(): void;

  craft(a: string, b: string): Promise<string>;
}
