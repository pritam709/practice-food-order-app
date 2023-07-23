import classes from "./Form.module.css"
const Form =()=>{
    return (
        <form>
            <div className={classes.formInput}>
            <label>Amount</label>
            <input defaultValue={1} type="number"></input>
            </div>
            <button className={classes.btn}>+ Add</button>
        </form>
    )

}
export default Form;