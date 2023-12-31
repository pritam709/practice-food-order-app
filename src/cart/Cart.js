import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClick={props.onClick}>
      <div className={classes.cart}>
        <div>
          <ul className={classes.list}>
            {ctx.items.map((item) => (
              <li key={item.id}>
                <div className={classes["list-items"]}>
                  <div className={classes.item}>
                    <p>{item.name}</p>
                    <span className={classes.price}>{item.price}</span>{" "}
                    <span className={classes.amount}>x{item.amount}</span>
                  </div>
                  <div className={classes.controls}>
                    <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
                    <button onClick={cartItemRemoveHandler.bind(null, item.id)}>-</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{ctx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClick}>
            close
          </button>
          <button className={classes.button}>order</button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
