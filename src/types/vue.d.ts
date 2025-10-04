import type { ICInstanceData, ICItemData } from "./common";
import type { IC_DOM } from "./dom";

interface IC_Container_VUE_CraftApiResponse {
  discovery?: boolean;
  emoji?: string;
  text: string;
}

interface IC_Container_VUE_Camera {
  discovery?: boolean;
  emoji?: string;
  text: string;
}

interface IC_Container_VUE_Save {
  camera: IC_Container_VUE_Camera;
  created: number;
  id: number;
  name: string;
  updated: number;
  version: string;
}

export interface IC_Container_VUE {
  addAPI(): void;
  changeSaveName(id: number, name: string): void;
  checkIfMobile(): void;
  clearInstances(): void;
  craft(
    a: ICInstanceData,
    b: ICInstanceData
  ): Promise<{
    instance: ICItemData;
    isNew: boolean;
  }>;
  craftApi(
    a: string,
    b: string
  ): Promise<IC_Container_VUE_CraftApiResponse | null>;
  downloadSave(id: number, name: string): void;
  getSettings(): void;
  goToAppStore(): void;
  hideItem(item: ICItemData, hidden: boolean): void;
  panCanvas(x: number, y: number): void;
  removeInstances(instances: ICInstanceData[]): void;
  resetSave(id: number): void;
  resizeSidebar(width: number): void;
  saveSettings(): void;
  setLoading(): void;
  setLoadingMessage(message: string): void;
  setSelectedInstance(instance: ICInstanceData): void;
  switchSave(id: number): void;
  toggleDarkMode(): void;
  toggleSound(): void;
  updateCamera(camera: IC_Container_VUE_Camera): void;
  updateInstances(instances: ICInstanceData[]): void;
  uploadHelper(id: number, data: ArrayBuffer): void;
  uploadSave(id: number, data: ArrayBuffer): void;
  zoomCanvas(zoom: number): void;

  currSave: number;
  hasCrafted: boolean;
  isActive: boolean;
  isAndroid: boolean;
  isDarkMode: boolean;
  isDeleting: boolean;
  isIOS: boolean;
  isLoading: boolean;
  isMobile: boolean;
  isMuted: boolean;
  items: ICItemData[];
  loadingMessage: string;
  saves: [IC_Container_VUE_Save, IC_Container_VUE_Save, IC_Container_VUE_Save];
  showMenu: boolean;
  sidebarWidth: number;

  _data: {
    currSave: number;
    hasCrafted: boolean;
    isActive: boolean;
    isAndroid: boolean;
    isDarkMode: boolean;
    isDeleting: boolean;
    isIOS: boolean;
    isLoading: boolean;
    isMobile: boolean;
    isMuted: boolean;
    items: ICItemData[];
    loadingMessage: string;
    saves: [
      IC_Container_VUE_Save,
      IC_Container_VUE_Save,
      IC_Container_VUE_Save
    ];
    showMenu: boolean;
    sidebarWidth: number;
  };

  $el: IC_DOM.ContainerDivElement;
  $refs: {
    particles: IC_DOM.ParticlesCanvasElement;
  };
}

interface _ComputedWatcher<T = unknown> {
  getter(): T;
  newDepIds: Set<unknown>;
}

interface IC_Sidebar_VUE_Sort {
  asc: boolean;
  name: string;
}

interface IC_Sidebar_VUE_ComputedWatcher<T = unknown>
  extends _ComputedWatcher<T> {}

export interface IC_Sidebar_VUE {
  changeSort(sort: { asc: boolean; name: string }): void;
  changeSortDirection: unknown;
  checkControlsBlur: unknown;
  debouncedResize: unknown;
  handleResize: unknown;
  hideDropdown: unknown;
  hideItem: unknown;
  onKeyDown: unknown;
  setupSpacerListener: unknown;
  startResize: unknown;
  stopResize: unknown;
  toggleHidden: unknown;
  toggleSortDropdown: unknown;

  briefText: boolean;
  filteredElements: ICItemData[];
  filteredElementsCut: ICItemData[];
  hasCrafted: boolean;
  isLoading: boolean;
  isMobile: boolean;
  mobileItemRows: ICItemData[][];
  searchResults: ICItemData[];
  sortedElements: ICItemData[];

  isDeleting: boolean;
  isResizing: boolean;
  items: ICItemData[];
  limit: number;
  resizeTimeout: unknown | null;
  searchQuery: string;
  showControlFade: boolean;
  showDiscoveredOnly: boolean;
  showHidden: boolean;
  showSortDropdown: boolean;
  sidebarWidth: number;
  sortBy: IC_Sidebar_VUE_Sort;
  sorts: IC_Sidebar_VUE_Sort[];

  _computedWatchers: {
    briefText: IC_Sidebar_VUE_ComputedWatcher<boolean>;
    filteredElements: IC_Sidebar_VUE_ComputedWatcher<ICItemData[]>;
    filteredElementsCut: IC_Sidebar_VUE_ComputedWatcher<ICItemData[]>;
    mobileItemRows: IC_Sidebar_VUE_ComputedWatcher<ICItemData[][]>;
    searchResults: IC_Sidebar_VUE_ComputedWatcher<ICItemData[]>;
    sortedElements: IC_Sidebar_VUE_ComputedWatcher<ICItemData[]>;
  };
  _data: {
    isDeleting: boolean;
    isResizing: boolean;
    limit: number;
    resizeTimeout: unknown | null;
    searchQuery: string;
    showControlFade: boolean;
    showDiscoveredOnly: boolean;
    showHidden: boolean;
    showSortDropdown: boolean;
    sidebarWidth: number;
    sortBy: IC_Sidebar_VUE_Sort;
    sorts: IC_Sidebar_VUE_Sort[];
  };

  $el: IC_DOM.SidebarDivElement;
  $refs: {
    resizeHandle: IC_DOM.ResizeHandleDivElement;
    search: IC_DOM.SidebarInputInputElement;
    sidebar: IC_DOM.SidebarDivElement;
    sidebarInner: IC_DOM.SidebarInnerDivElement;
    spacer: IC_DOM.SidebarItemsBottomSpacerDivElement;
  };
}
