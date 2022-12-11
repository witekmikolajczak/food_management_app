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
    type: string;
    units:{
      description:string
    }[]
    description: string;
  }
}
export {};
