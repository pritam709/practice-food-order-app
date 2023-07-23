import CartContext from "./CartContext";

const CartProvider = (props) => {
    const cartContext={
        items:[],
        totalAmount:0
    }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
