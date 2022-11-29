global {
  interface LinkInterface {
    path: string;
    name?: string;
    icon: JSX.Element;
  }
  interface ProductInterface {
    id: string;
    name: string;
    src: string;
    unit: string;
    count: string;
  }
  interface RecentlyViewedRecipt {
    id: string;
    name: string;
    viewed: string;
    link: string;
  }

  interface UnitInterface {
    unit: string;
  }
  interface ProductUnitsInterface {
    type: string;
    text: string;
    units: UnitInterface[];
  }
}
export {};
