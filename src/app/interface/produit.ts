export interface IProduit {
    name: string;
    price: number;
    enStock: boolean;
    category: EproductCategory;
}

export enum EproductCategory {
    service = "service", 
    produit = "produit"
}
