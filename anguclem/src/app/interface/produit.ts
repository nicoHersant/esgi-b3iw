export interface IProduit {
  name : string;
  price : number;
  isInStock : boolean;
  categorie : ECategorie;
}

export enum ECategorie {
  Service = "Service",
  Produit = "Produit",
}
