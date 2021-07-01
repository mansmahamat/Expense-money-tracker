import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <div className=" flex xs:flex-wrap my-6 items-center justify-center ">
        <div className="divHalf_InEx bg-green-400 ">
          <div className="divIncomeExpense">
            <h2 className="h2IncomeExpense">Incomes</h2>

            <span className="spanValueInEx text-orange-500"> {income} €</span>
          </div>
        </div>

        <div className="divHalf_InEx bg-red-400">
          <div className="divIncomeExpense">
            <h2 className="h2IncomeExpense">Expenses</h2>

            <span className="spanValueInEx text-teal-500"> {expense} €</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
