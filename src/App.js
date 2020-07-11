import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionHistory />
      <AddTransaction />
    </>
  );
}

export default App;
