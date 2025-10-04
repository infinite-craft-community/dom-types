import type { IC_Container_VUE, IC_Sidebar_VUE } from "./vue";

export namespace IC_DOM {
  interface BodyElement extends HTMLBodyElement {
    readonly parentElement: HTMLHtmlElement;
    readonly parentNode: HTMLHtmlElement;
  }

  interface NuxtDivElement extends HTMLDivElement {
    readonly parentElement: BodyElement;
    readonly parentNode: BodyElement;
  }

  interface LayoutDivElement extends HTMLDivElement {
    readonly parentElement: NuxtDivElement;
    readonly parentNode: NuxtDivElement;
  }

  interface Container_WrapperDivElement extends HTMLDivElement {
    readonly parentElement: LayoutDivElement;
    readonly parentNode: LayoutDivElement;
  }

  interface ContainerDivElement extends HTMLDivElement {
    readonly __vue__: IC_Container_VUE;
    readonly parentElement: Container_WrapperDivElement;
    readonly parentNode: Container_WrapperDivElement;
  }

  namespace Container {
    interface SidebarDivElement extends HTMLBodyElement {
      readonly __vue__: IC_Sidebar_VUE;
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    namespace Sidebar {
      interface ResizeHandleDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      interface SidebarOverlayDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      interface SidebarInnerDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      interface ItemsDivElement extends HTMLDivElement {
        readonly parentElement: SidebarInnerDivElement;
        readonly parentNode: SidebarInnerDivElement;
      }

      interface ItemsInnerDivElement extends HTMLDivElement {
        readonly parentElement: SidebarItemsDivElement;
        readonly parentNode: SidebarItemsDivElement;
      }

      interface BottomSpacerDivElement extends HTMLDivElement {
        readonly parentElement: SidebarItemsDivElement;
        readonly parentNode: SidebarItemsDivElement;
      }

      interface SidebarControlsDivElement extends HTMLDivElement {
        readonly parentElement: SidebarDivElement;
        readonly parentNode: SidebarDivElement;
      }

      interface SidebarSearchDivElement extends HTMLDivElement {
        readonly parentElement: SidebarControlsDivElement;
        readonly parentNode: SidebarControlsDivElement;
      }

      interface SidebarInputInputElement extends HTMLInputElement {
        readonly parentElement: SidebarSearchDivElement;
        readonly parentNode: SidebarSearchDivElement;
      }

      interface SidebarSortingDivElement extends HTMLDivElement {
        readonly parentElement: SidebarControlsDivElement;
        readonly parentNode: SidebarControlsDivElement;
      }

      interface SidebarDiscoveriesDivElement extends HTMLDivElement {
        readonly parentElement: SidebarSortingDivElement;
        readonly parentNode: SidebarSortingDivElement;
      }

      interface SortWrapperDivElement extends HTMLDivElement {}

      interface SortDirectionDivElement extends HTMLDivElement {
        readonly parentElement: SortWrapperDivElement;
        readonly parentNode: SortWrapperDivElement;
      }
    }

    interface SideControls_WrapperDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    interface SideControlsDivElement extends HTMLDivElement {
      readonly parentElement: SideControls_WrapperDivElement;
      readonly parentNode: SideControls_WrapperDivElement;
    }

    interface ParticlesCanvasElement extends HTMLCanvasElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    interface SelectBoxDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    interface InstancesTopDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }

    interface InstancesDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;

      childNodes: NodeListOf<InstanceDivElement>;
    }

    interface MenuDivElement extends HTMLDivElement {
      readonly parentElement: ContainerDivElement;
      readonly parentNode: ContainerDivElement;
    }
  }

  interface SidebarDivElement extends Container.SidebarDivElement {}
  interface SideControlsDivElement extends Container.SideControlsDivElement {}
  interface ParticlesCanvasElement extends Container.ParticlesCanvasElement {}
  interface SelectBoxDivElement extends Container.SelectBoxDivElement {}
  interface InstancesTopDivElement extends Container.InstancesTopDivElement {}
  interface InstancesDivElement extends Container.InstancesDivElement {}
  interface MenuDivElement extends Container.MenuDivElement {}

  export import Sidebar = Container.Sidebar;
  interface ResizeHandleDivElement extends Sidebar.ResizeHandleDivElement {}
  interface SidebarOverlayDivElement extends Sidebar.SidebarOverlayDivElement {}
  interface SidebarInnerDivElement extends Sidebar.SidebarInnerDivElement {}
  interface SidebarItemsDivElement extends Sidebar.ItemsDivElement {}
  interface SidebarItemsInnerDivElement extends Sidebar.ItemsInnerDivElement {}
  interface SidebarItemsBottomSpacerDivElement
    extends Sidebar.BottomSpacerDivElement {}
  interface SidebarControlsDivElement
    extends Sidebar.SidebarControlsDivElement {}
  interface SidebarSearchDivElement extends Sidebar.SidebarSearchDivElement {}
  interface SidebarInputInputElement extends Sidebar.SidebarInputInputElement {}
  interface SidebarSortingDivElement extends Sidebar.SidebarSortingDivElement {}
  interface SidebarDiscoveriesDivElement
    extends Sidebar.SidebarDiscoveriesDivElement {}
  interface SortWrapperDivElement extends Sidebar.SortWrapperDivElement {}
  interface SortDirectionDivElement extends Sidebar.SortDirectionDivElement {}

  interface ItemWrapperDivElement extends HTMLDivElement {
    children: HTMLCollection & [ItemDivElement];
    childNodes: NodeListOf<ChildNode> & [Comment, Text, ItemDivElement];
  }

  interface ItemDivElement extends HTMLDivElement {
    readonly parentNode: ItemWrapperDivElement;
    readonly parentElement: ItemWrapperDivElement;

    children: HTMLCollection & [ItemEmojiSpanElement];
    childNodes: NodeListOf<ChildNode> & [ItemEmojiSpanElement, Text, Comment];
  }

  interface ItemEmojiSpanElement extends HTMLSpanElement {
    readonly parentNode: ItemDivElement;
    readonly parentElement: ItemDivElement;
  }

  interface InstanceDivElement extends HTMLDivElement {
    children: HTMLCollection &
      [InstanceEmojiSpanElement, InstanceTextSpanElement];
    childNodes: NodeListOf<ChildNode> &
      [InstanceEmojiSpanElement, InstanceTextSpanElement];
  }

  interface InstanceEmojiSpanElement extends HTMLSpanElement {
    readonly parentNode: InstanceDivElement;
    readonly parentElement: InstanceDivElement;
  }

  interface InstanceTextSpanElement extends HTMLSpanElement {
    readonly parentNode: InstanceDivElement;
    readonly parentElement: InstanceDivElement;
  }
}

export interface ICElementIdMap {
  __nuxt: IC_DOM.NuxtDivElement;
  __layout: IC_DOM.LayoutDivElement;
  instances: IC_DOM.InstancesDivElement;
  "instances-top": IC_DOM.InstancesTopDivElement;
  sidebar: IC_DOM.SidebarDivElement;
  particles: IC_DOM.ParticlesCanvasElement;
  "select-box": IC_DOM.InstancesTopDivElement;
}

export interface ICElementSelectorMap {
  ".infinite-craft-body": IC_DOM.BodyElement;
  ".infinite-craft": IC_DOM.ContainerDivElement;
  ".container": IC_DOM.ContainerDivElement;
  ".items": IC_DOM.SidebarItemsDivElement;
  ".items-inner": IC_DOM.SidebarItemsInnerDivElement;
  ".side-controls": IC_DOM.SideControlsDivElement;
  ".sidebar-inner": IC_DOM.SidebarInnerDivElement;
  ".sidebar-controls": IC_DOM.SidebarControlsDivElement;
  ".sidebar-overlay": IC_DOM.SidebarOverlayDivElement;
  ".sidebar-input": IC_DOM.SidebarInputInputElement;
  ".sidebar-search": IC_DOM.SidebarSearchDivElement;
  ".resize-handle": IC_DOM.ResizeHandleDivElement;
  ".bottom-spacer": IC_DOM.SidebarItemsBottomSpacerDivElement;
  ".menu": IC_DOM.MenuDivElement;
  ".sort-wrapper": IC_DOM.SortWrapperDivElement;
  ".sort-direction": IC_DOM.SortDirectionDivElement;
  ".sidebar-discoveries": IC_DOM.SidebarDiscoveriesDivElement;
}

export interface ICElementSelectorAllMap {
  ".item-emoji": IC_DOM.ItemEmojiSpanElement;
  ".item": IC_DOM.ItemDivElement;
  ".item-wrapper": IC_DOM.ItemWrapperDivElement;

  ".instance-emoji": IC_DOM.InstanceEmojiSpanElement;
  ".instance-text": IC_DOM.InstanceTextSpanElement;
  ".instance": IC_DOM.InstanceDivElement;
}
