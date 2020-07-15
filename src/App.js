import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import IncomeExpenses from './components/IncomeExpenses.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import TransactionHistory from './components/TransactionHistory.jsx';



import { GlobalProvider } from './context/GlobalState';




function App(props) {

 

  return (
    <>
   
    <GlobalProvider>
      <Header />
      <Balance /> 
      <IncomeExpenses />
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>

       
    </>
  );
}

export default App;
