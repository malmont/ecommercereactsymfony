export class CartItemModel {
  constructor(id, image, title, price, quantity, color, size,colorHex, variantId) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.color = color;
    this.size = size;
    this.colorHex = colorHex;
    this.variantId = variantId;
  }
}
