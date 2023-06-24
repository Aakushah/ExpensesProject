import React from "react";

import ExpensesForm from "./ExpensesForm";


import './NewExpense.css'
const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) =>{

        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }

        props.onaddExpenseHandler(expenseData);

       
        console.log(expenseData);
    };


    return (

            <div className="new-expense">
            
            <ExpensesForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpensesForm>
                
            </div>


        );

}

export default NewExpense;