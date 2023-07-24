import MealItem from "./MealItem";
import classes from "./Meals.module.css";
const Meals = () => {
  const MealsArray = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green salad",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <div className={classes.meals}>
      <ul>
        {MealsArray.map((item) => (
          <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};
export default Meals;
