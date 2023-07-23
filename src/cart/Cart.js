import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
const Cart=(props)=>{

  return  <Modal onClick={props.onClick}><div className={classes.cart}>
  Sushi
  <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
  </div>
  <div  className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClick}>close</button>
      <button  className={classes.button}>order</button>
  </div>

  </div></Modal>

}
export default Cart