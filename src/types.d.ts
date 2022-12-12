global {

  interface AuthInterface {
    id: string;
    name: string;
    placeholder: string;
    page?: number;
    value: string;
  }

  interface LinkInterface {
    path: string;
    name?: string;
    icon: JSX.Element;
  }
  interface ProductInterface {
    productType: string;
    productUnit: string;
    productName: string;
    productCount: string;
  }
  interface RecentlyViewedRecipt {
    id: string;
    name: string;
    viewed: string;
    link: string;
  }

  interface UnitInterface {
    type: string;
    units:{
      description:string
    }[]
    description: string;
  }
}
export {};
