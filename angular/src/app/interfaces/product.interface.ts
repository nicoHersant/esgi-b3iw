export interface IProduct {
    name : string;
    price : number;
    isInStock : boolean;
    category : ECategory;
  }
  
  export enum ECategory {
    service = "Service",
    product = "Produit",
  }