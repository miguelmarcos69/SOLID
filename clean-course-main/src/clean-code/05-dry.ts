type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      console.log("key", key);
      console.log("vale", this[key]);
      switch (typeof this[key]) {
        case "string":
          if (this[key].length === 0) throw Error(`The product has no ${key}`);
        case "number":
          if (this[key] === 0) throw Error(`The product has no ${key}`);
        default:
          throw Error(
            `Product Name: ${this.name} - Price: $${this.price} - Size: ${this.size}`
          );
      }
    }
    return true;
  }
  toString() {
    console.log(this.name);
    // NO DRY - DON'T REPEAT YOURSELF
    /* if (this.name.length === 0) throw Error("The product has no name");
    if (this.price === 0) throw Error("The product has no price");
    if (this.size.length === 0) throw Error("The product has no size"); */
    
    if(!this.isProductReady()) return;
    return `Product Name: ${this.name} - Price: $${this.price} - Size: ${this.size}`;
  }
}
(() => {
  const bluePants = new Product("Blue Pants", 10, "M");
  /* const sinNombre = new Product(""); */

  console.log(bluePants.toString());
  /* console.log(sinNombre.toString()); */
})();
