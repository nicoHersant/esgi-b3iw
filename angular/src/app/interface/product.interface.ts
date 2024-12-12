export interface IProduct {
    name : string;
    price : number;
    description : string;
    isInStock : boolean;
    category : ECategory;
  }

  export enum ECategory {
    service = "Service",
    product = "Produit",
  }
