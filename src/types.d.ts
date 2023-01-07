global {
  interface AuthInterface {
    id: string;
    name: string;
    placeholder: string;
    page?: number;
    value: string;
    labelText:string
    inputType:string
  }

  interface SubLinkInterface {
    id: string;
    path: string;
    name: string;
    icon: JSX.Element;
  }
  interface LinkInterface {
    mainText: string;
    mainIcon?: JSX.Element;
    subLinks?: SubLinkInterface[];
    link?: SubLinkInterface;
  }

  interface CurrentProductInterface {
    createdAt: string;
    createdBy: {
      __type: string;
      className: string;
    };
    productCount: number;
    productName: string;
    productType: string;
    productUnit: string;
    updatedAt: string;
  }

  interface ProductInterface {
    positionNumber?: string;
    id?: string;
    productType?: string;
    productUnit: string;
    productName: string;
    productCount: string;
    delete?: JSX.Element;
  }

  interface ReciptInterface {
    positionNumber?: string;
    id?: string;
    reciptUrl: string
    reciptIngredients: string[];
    delete?: JSX.Element;
  }

  interface RecentlyViewedRecipt {
    id: string;
    name: string;
    viewed: string;
    link: string;
  }

  interface UnitInterface {
    type: string;
    units: {
      description: string;
    }[];
    description: string;
  }
}
export {};
