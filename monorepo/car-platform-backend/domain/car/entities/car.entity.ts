export class Car {
  constructor(
    public readonly id: string,
    public name: string,
    public brand: string,
    public model: string,
    public basePrice: number,
  ) {}

  changePrice(price: number) {
    if (price <= 0) throw new Error("Invalid price");
    this.basePrice = price;
  }
}
