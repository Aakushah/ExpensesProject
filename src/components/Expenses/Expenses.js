import React from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';

import Card from '../UI/Card';

const Expenses = (props) => {
    const expense=props.expense;
    return(
        <Card className='expenses'>
            <ExpensesItem date={expense[0].date} title={expense[0].title} amount={expense[0].amount}/>
            <ExpensesItem date={expense[1].date} title={expense[1].title} amount={expense[1].amount}/>
            <ExpensesItem date={expense[2].date} title={expense[2].title} amount={expense[2].amount}/>
            <ExpensesItem date={expense[3].date} title={expense[3].title} amount={expense[3].amount}/>
        </Card>
    );
}
export default Expenses;