import { useRef } from "react";
import classes from "./Form.module.css"
const Form =(props)=>{
    const inputRef= useRef();
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const eneteredNo= inputRef.current.value;
        const updatedNo= +eneteredNo;

        console.log(updatedNo);

        props.onAddToCart(updatedNo);


    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={classes.formInput}>
            <label>Amount</label>
            <input ref={inputRef} defaultValue={1} type="number"></input>
            </div>
            <button type="submit" className={classes.btn}>+ Add</button>
        </form>
    )

}
export default Form;