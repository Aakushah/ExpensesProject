import React from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';

import Card from '../UI/Card';

const Expenses = (props) => {

    return(
        <Card className='expenses'>

            {
                props.expense.map( expense =>
                (

                    <ExpensesItem date={expense.date} title={expense.title} amount={expense.amount}/>

                )
                )
            }
        </Card>
    );
}
export default Expenses;