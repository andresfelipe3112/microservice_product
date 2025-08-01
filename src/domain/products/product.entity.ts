export class Product {
  constructor(
    public id: string,
    public name: string,
    public brand: string,
    public offer: string,
    public description: string,
    public about: string,
    public quantity: number,
    public rating: number,
    public discount: number,
    public salePrice: number,
    public offerPrice: number,
    public gender: string,
    public categories: string[],
    public colors: string[],
    public popularity: number,
    public date: number,
    public created: Date,
    public isStock: boolean,
    public isNew: number,
    public image: string,
  ) {}
}
