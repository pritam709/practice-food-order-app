import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
const Cart=()=>{

  return  <Modal><div className={classes.cart}>
  Sushi
  <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
  </div>
  <div  className={classes.actions}>
      <button className={classes['button--alt']}>close</button>
      <button  className={classes.button}>order</button>
  </div>

  </div></Modal>

}
export default Cart