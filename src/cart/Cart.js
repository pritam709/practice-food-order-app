import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import { useContext } from "react"
import CartContext from "../store/CartContext"
const Cart=(props)=>{

    const MealsArray = [
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
          amount:1
        },
        {
          id: "m2",
          name: "Schnitzel",
          description: "A german specialty!",
          price: 16.5,
          amount:1
        }]

  const ctx=  useContext(CartContext);

  return  <Modal onClick={props.onClick}><div className={classes.cart}>
 <div>
    <ul className={classes.list}>
    {MealsArray.map(item=><li>
    <div className={classes['list-items']}>
    <div className={classes.item}>
        <p>{item.name}</p>
        <span className={classes.price}>{item.price}</span> <span className={classes.amount}>x{item.amount}</span>
    </div>
    <div className={classes.controls}>
        <button>
        +
        </button>
        <button>-</button>
    </div>
    </div>
    
        
    </li>)}

    </ul>
 </div>
  <div className={classes.total}>
      <span>Total Amount</span>
      <span>{ctx.totalAmount}</span>
  </div>
  <div  className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClick}>close</button>
      <button  className={classes.button}>order</button>
  </div>

  </div></Modal>

}
export default Cart