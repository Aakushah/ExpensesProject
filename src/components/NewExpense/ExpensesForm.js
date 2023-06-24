import React from "react";
import './ExpensesForm.css'
const ExpensesForm = () => {
    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="Numbers" min={0.01} steps={0.01}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"></input>
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>

        );

}

export default ExpensesForm;