import React,{useState} from "react";
import './ExpensesForm.css'
const ExpensesForm = (props) => {

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    const titleChangeHandler = (e) =>{

        setEnteredTitle(e.target.value);

    };
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);
    };
    const DateChangeHandler = (e) =>{
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {

        e.preventDefault();

        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);


        console.log(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

    }
        
        


    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"  value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="Numbers" min={0.01} steps={0.01} value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={DateChangeHandler}></input>
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>

        );

}

export default ExpensesForm;