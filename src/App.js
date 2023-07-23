import Cart from "./cart/Cart"
import Header from "./components/Header";
import Meals from "./components/Meals";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
       <Cart />   
      <Header />
      <Summary />
      <Meals/>
      
    </div>
  );
}

export default App;
