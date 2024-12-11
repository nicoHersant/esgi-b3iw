export interface IProduct {
    name : string;
    price : number;
    isInStock : boolean;
    category : ECategory;
    info?: string;
  }
  
  export enum ECategory {
    service = "Service",
    product = "Produit",
  }