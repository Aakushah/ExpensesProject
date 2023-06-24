import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyData=[
  {
    id:'e1',
    title:'SCHOOL FEE',
    amount:250,
    date:new Date(2021,5,12)
  },  
];
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
