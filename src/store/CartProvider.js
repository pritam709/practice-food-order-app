import { useReducer } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {

    const defaultCart={
        items:[],
        totalAmount:0
    }

    const cartReducer=(state,action)=>{
        return defaultCart;
    }

   const[cartState,dispatchCartAction]= useReducer(cartReducer,defaultCart);

    const addItemTocart=(item)=>{

        dispatchCartAction({type:"ADD",item:item})

    }
    const removeItemFromCart=(id)=>{

    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemTocart,
        removeItem:removeItemFromCart,
    }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
