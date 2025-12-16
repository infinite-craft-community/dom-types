import type { ICInstanceData, ICItemData } from "./common";
import type { IC_DOM } from "./dom";

interface _ComputedWatcher<T = unknown> {
  getter(): T;
  newDepIds: Set<unknown>;
}

interface IC_VUE_Sidebar_ComputedWatcher<
  T = unknown,
> extends _ComputedWatcher<T> {}

export namespace IC_VUE {
  export interface CraftApiResponse {
    discovery?: boolean;
    emoji?: string;
    text: string;
  }

  export interface Camera {
    x: number;
    y: number;
    zoom: number;
  }

  export interface Save {
    camera?: Camera;
    created: number;
    id: number;
    name: string;
    updated: number;
    version: string;
  }

  export interface Container {
    addAPI(): void;
    changeSaveName(id: number, name: string): void;
    checkIfMobile(): void;
    clearInstances(): void;
    craft(
      a: ICInstanceData,
      b: ICInstanceData,
    ): Promise<{
      instance: ICItemData;
      isNew: boolean;
    }>;
    craftApi(a: string, b: string): Promise<CraftApiResponse | null>;
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
    switchSave(id: number): Promise<void>;
    toggleDarkMode(): void;
    toggleSound(): void;
    updateCamera(camera: Camera): void;
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
    saves: [Save, Save, Save];
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
      saves: [Save, Save, Save];
      showMenu: boolean;
      sidebarWidth: number;
    };

    $el: IC_DOM.ContainerDivElement;
    $refs: {
      particles: IC_DOM.ParticlesCanvasElement;
    };
  }

  export interface Sidebar_Sort {
    asc: boolean;
    name: string;
  }

  export interface Sidebar {
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
    sortBy: Sidebar_Sort;
    sorts: Sidebar_Sort[];

    _computedWatchers: {
      briefText: IC_VUE_Sidebar_ComputedWatcher<boolean>;
      filteredElements: IC_VUE_Sidebar_ComputedWatcher<ICItemData[]>;
      filteredElementsCut: IC_VUE_Sidebar_ComputedWatcher<ICItemData[]>;
      mobileItemRows: IC_VUE_Sidebar_ComputedWatcher<ICItemData[][]>;
      searchResults: IC_VUE_Sidebar_ComputedWatcher<ICItemData[]>;
      sortedElements: IC_VUE_Sidebar_ComputedWatcher<ICItemData[]>;
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
      sortBy: Sidebar_Sort;
      sorts: Sidebar_Sort[];
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
}
