export interface IProduct {
    name: string;
    price: number;
    inStock: boolean;
    category: ECategory;
}

export enum ECategory {
    Service = 'Service',
    Product = 'Product'
}
