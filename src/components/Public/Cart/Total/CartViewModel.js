import { makeAutoObservable } from "mobx";
import { CartItemModel } from "../../../../models/CartItemModel";
import { incrementQuantity, decrementQuantity, removeItem, clearCart } from '../../../../redux/cartSlice';


class CartViewModel {
  cart = [];
  user = null;
  dispatch;

  constructor(user, cart, dispatch) {
    makeAutoObservable(this);
    this.user = user;
    this.dispatch = dispatch;
    this.cart = cart.map(item => new CartItemModel(
      item.id,
      item.image,
      item.title,
      item.price,
      item.quantity,
      item.color,
      item.size,
      item.colorHex, 
      item.variantId
    ));
  }

  incrementQuantity(variantId) {
    const item = this.cart.find(item => item.variantId === variantId);
    if (item) {
      item.quantity += 1;
      this.dispatch(incrementQuantity(variantId));
    }
  }

  decrementQuantity(variantId) {
    const item = this.cart.find(item => item.variantId === variantId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.dispatch(decrementQuantity(variantId));
    }
  }

  removeItem(variantId) {
    this.cart = this.cart.filter(item => item.variantId !== variantId);
    this.dispatch(removeItem(variantId));
  }

  clearCart() {
    this.cart = [];
    this.dispatch(clearCart());
  }

  get totalQuantity() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get totalPriceWithTax() {
    const tax = 20;
    return ((this.totalPrice * tax) / 100) + this.totalPrice;
  }


//   handleCheckout = async () => {
//     if (!this.user) {
//         this.navigate('/login');
//     } else {
//         try {
//             const decodedToken = jwtDecode(this.user.token);
//             const userId = decodedToken.user_id;

//             const promises = this.cart.map(item => {
//                 return createAchat(this.user.token, item, userId);
//             });

//             await Promise.all(promises);
//             console.log('Achats créés avec succès');
//             this.clearCart(); 
//             this.navigate('/confirmation', { state: { cart: this.cart, totalPrice: this.totalPriceWithTax } });
//         } catch (error) {
//             console.error("Erreur lors de la création des achats", error);
//         }
//     }
// };
}



export default CartViewModel;
