import HeaderCartButton from "./HeaderCartButton"
import classes from "./Header.module.css"
import meals from "../assets/meals.jpg"
const Header=(props)=>{
  return (
    <div>
     <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.showCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt='A table full of delicious food!' />
      </div>
  </div>
  )
}
export default Header;