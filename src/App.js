import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyData=[    ];

const  App= () => {
  const[expenses,setExpense]= useState(dummyData);
  
  const addExpenseHandler = (expense) => {

    const updatedExpenses=[expense,...expenses];
    setExpense(updatedExpenses);

  };


 return (
    <>
      <NewExpense onaddExpenseHandler={addExpenseHandler}></NewExpense>
      <Expenses expense={expenses}/>
    </>
  );
}
export default App;
