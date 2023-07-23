import Cart from "./cart/Cart"
import Header from "./components/Header";
import Meals from "./components/Meals";
import Summary from "./components/Summary";
import React,{ useState }  from "react"; 

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showcCartHandler=()=>{
    return setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    return setCartIsShown(false)
  }


  return (
    <>
      {cartIsShown &&  <Cart  onClick ={hideCartHandler} />   }
      <Header showCart={showcCartHandler}/>
      <Summary />
      <Meals/>
      
    </>
  );
}

export default App;
