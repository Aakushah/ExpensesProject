import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const  App= () => {
  let expense =[
    {
      id:'e1',
      title:'SCHOOL FEE',
      amount:250,
      date:new Date(2021,5,12)
    },
    {
      id:'e2',
      title:'BOOKS',
      amount:50,
      date:new Date(2021,5,18)
    },
    {
      id:'e3',
      title:'ELECTRICITY',
      amount:80,
      date:new Date(2021,5,19)
    },
    {
      id:'e1',
      title:'HOUSE RENT',
      amount:150,
      date:new Date(2021,5,30)
    },
  ];
 return (
    <>
      <NewExpense></NewExpense>
      <Expenses expense={expense}/>
    </>
  );
}
export default App;
