import type { IC_VUE } from "./vue";

export namespace IC_DOM {
  export interface BodyElement extends HTMLBodyElement {
    readonly parentElement: HTMLHtmlElement;
    readonly parentNode: HTMLHtmlElement;
  }

  export interface NuxtDivElement extends HTMLDivElement {
    readonly parentElement: BodyElement;
    readonly parentNode: BodyElement;
  }

  export interface LayoutDivElement extends HTMLDivElement {
    readonly parentElement: NuxtDivElement;
    readonly parentNode: NuxtDivElement;
  }

  export interface Container_WrapperDivElement extends HTMLDivElement {
    readonly parentElement: LayoutDivElement;
    readonly parentNode: LayoutDivElement;
  }

  export interface ContainerDivElement extends HTMLDivElement {
    readonly __vue__: IC_VUE.Container;
    readonly parentElement: Container_WrapperDivElement;
    readonly parentNode: Container_WrapperDivElement;
  }

  export namespace Container {
    export interface SidebarDivElement extends HTMLBodyElement {
      readonly __vue__: IC_VUE.Sidebar;
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    export namespace Sidebar {
      export interface ResizeHandleDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      export interface SidebarOverlayDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      export interface SidebarInnerDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      export interface ItemsDivElement extends HTMLDivElement {
        readonly parentElement: SidebarInnerDivElement;
        readonly parentNode: SidebarInnerDivElement;
      }

      export interface ItemsInnerDivElement extends HTMLDivElement {
        readonly parentElement: SidebarItemsDivElement;
        readonly parentNode: SidebarItemsDivElement;
      }

      export interface BottomSpacerDivElement extends HTMLDivElement {
        readonly parentElement: SidebarItemsDivElement;
        readonly parentNode: SidebarItemsDivElement;
      }

      export interface SidebarControlsDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      export interface SidebarSearchDivElement extends HTMLDivElement {
        readonly parentElement: SidebarControlsDivElement;
        readonly parentNode: SidebarControlsDivElement;
      }

      export interface SidebarInputInputElement extends HTMLInputElement {
        readonly parentElement: SidebarSearchDivElement;
        readonly parentNode: SidebarSearchDivElement;
      }

      export interface SidebarSortingDivElement extends HTMLDivElement {
        readonly parentElement: SidebarControlsDivElement;
        readonly parentNode: SidebarControlsDivElement;
      }

      export interface SidebarDiscoveriesDivElement extends HTMLDivElement {
        readonly parentElement: SidebarSortingDivElement;
        readonly parentNode: SidebarSortingDivElement;
      }

      export interface SortWrapperDivElement extends HTMLDivElement {}

      export interface SortDirectionDivElement extends HTMLDivElement {
        readonly parentElement: SortWrapperDivElement;
        readonly parentNode: SortWrapperDivElement;
      }
    }

    export interface SideControls_WrapperDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    export interface SideControlsDivElement extends HTMLDivElement {
      readonly parentElement: SideControls_WrapperDivElement;
      readonly parentNode: SideControls_WrapperDivElement;
    }

    export interface ParticlesCanvasElement extends HTMLCanvasElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    export interface SelectBoxDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    export interface InstancesTopDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    export interface InstancesDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;

      childNodes: NodeListOf<InstanceDivElement>;
    }

    export interface MenuDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }
  }

  export interface SidebarDivElement extends Container.SidebarDivElement {}
  export interface SideControlsDivElement
    extends Container.SideControlsDivElement {}
  export interface ParticlesCanvasElement
    extends Container.ParticlesCanvasElement {}
  export interface SelectBoxDivElement extends Container.SelectBoxDivElement {}
  export interface InstancesTopDivElement
    extends Container.InstancesTopDivElement {}
  export interface InstancesDivElement extends Container.InstancesDivElement {}
  export interface MenuDivElement extends Container.MenuDivElement {}

  export interface ResizeHandleDivElement
    extends Container.Sidebar.ResizeHandleDivElement {}
  export interface SidebarOverlayDivElement
    extends Container.Sidebar.SidebarOverlayDivElement {}
  export interface SidebarInnerDivElement
    extends Container.Sidebar.SidebarInnerDivElement {}
  export interface SidebarItemsDivElement
    extends Container.Sidebar.ItemsDivElement {}
  export interface SidebarItemsInnerDivElement
    extends Container.Sidebar.ItemsInnerDivElement {}
  export interface SidebarItemsBottomSpacerDivElement
    extends Container.Sidebar.BottomSpacerDivElement {}
  export interface SidebarControlsDivElement
    extends Container.Sidebar.SidebarControlsDivElement {}
  export interface SidebarSearchDivElement
    extends Container.Sidebar.SidebarSearchDivElement {}
  export interface SidebarInputInputElement
    extends Container.Sidebar.SidebarInputInputElement {}
  export interface SidebarSortingDivElement
    extends Container.Sidebar.SidebarSortingDivElement {}
  export interface SidebarDiscoveriesDivElement
    extends Container.Sidebar.SidebarDiscoveriesDivElement {}
  export interface SortWrapperDivElement
    extends Container.Sidebar.SortWrapperDivElement {}
  export interface SortDirectionDivElement
    extends Container.Sidebar.SortDirectionDivElement {}

  export interface ItemWrapperDivElement extends HTMLDivElement {
    children: HTMLCollection & [ItemDivElement];
    childNodes: NodeListOf<ChildNode> & [Comment, Text, ItemDivElement];
  }

  export interface ItemDivElement extends HTMLDivElement {
    readonly parentNode: ItemWrapperDivElement;
    readonly parentElement: ItemWrapperDivElement;

    children: HTMLCollection & [ItemEmojiSpanElement];
    childNodes: NodeListOf<ChildNode> & [ItemEmojiSpanElement, Text, Comment];
  }

  export interface ItemEmojiSpanElement extends HTMLSpanElement {
    readonly parentNode: ItemDivElement;
    readonly parentElement: ItemDivElement;
  }

  export interface InstanceDivElement extends HTMLDivElement {
    children: HTMLCollection &
      [InstanceEmojiSpanElement, InstanceTextSpanElement];
    childNodes: NodeListOf<ChildNode> &
      [InstanceEmojiSpanElement, InstanceTextSpanElement];
  }

  export interface InstanceEmojiSpanElement extends HTMLSpanElement {
    readonly parentNode: InstanceDivElement;
    readonly parentElement: InstanceDivElement;
  }

  export interface InstanceTextSpanElement extends HTMLSpanElement {
    readonly parentNode: InstanceDivElement;
    readonly parentElement: InstanceDivElement;
  }
}

export interface ICElementIdMap {
  readonly __nuxt: IC_DOM.NuxtDivElement;
  readonly __layout: IC_DOM.LayoutDivElement;
  readonly instances: IC_DOM.InstancesDivElement;
  readonly "instances-top": IC_DOM.InstancesTopDivElement;
  readonly sidebar: IC_DOM.SidebarDivElement;
  readonly particles: IC_DOM.ParticlesCanvasElement;
  readonly "select-box": IC_DOM.InstancesTopDivElement;
}

export interface ICElementSelectorMap {
  readonly ".infinite-craft-body": IC_DOM.BodyElement;
  readonly ".infinite-craft": IC_DOM.ContainerDivElement;
  readonly ".container": IC_DOM.ContainerDivElement;
  readonly ".items": IC_DOM.SidebarItemsDivElement;
  readonly ".items-inner": IC_DOM.SidebarItemsInnerDivElement;
  readonly ".side-controls": IC_DOM.SideControlsDivElement;
  readonly ".sidebar-inner": IC_DOM.SidebarInnerDivElement;
  readonly ".sidebar-controls": IC_DOM.SidebarControlsDivElement;
  readonly ".sidebar-overlay": IC_DOM.SidebarOverlayDivElement;
  readonly ".sidebar-input": IC_DOM.SidebarInputInputElement;
  readonly ".sidebar-search": IC_DOM.SidebarSearchDivElement;
  readonly ".resize-handle": IC_DOM.ResizeHandleDivElement;
  readonly ".bottom-spacer": IC_DOM.SidebarItemsBottomSpacerDivElement;
  readonly ".menu": IC_DOM.MenuDivElement;
  readonly ".sort-wrapper": IC_DOM.SortWrapperDivElement;
  readonly ".sort-direction": IC_DOM.SortDirectionDivElement;
  readonly ".sidebar-discoveries": IC_DOM.SidebarDiscoveriesDivElement;
}

export interface ICElementSelectorAllMap {
  readonly ".item-emoji": IC_DOM.ItemEmojiSpanElement;
  readonly ".item": IC_DOM.ItemDivElement;
  readonly ".item-wrapper": IC_DOM.ItemWrapperDivElement;

  readonly ".instance-emoji": IC_DOM.InstanceEmojiSpanElement;
  readonly ".instance-text": IC_DOM.InstanceTextSpanElement;
  readonly ".instance": IC_DOM.InstanceDivElement;
}
