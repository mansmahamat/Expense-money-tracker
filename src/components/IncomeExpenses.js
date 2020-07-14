import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = (props) => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);


  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
      amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) 
    ).toFixed(2);


    return ( 
        <>
       
<div className=" flex xs:flex-wrap  items-center justify-center ">
    
    <div className=" m-3 text-center  w-1/2  h-40 bg-green-400 rounded-lg shadow-lg">
      
      <div className="relative pt-10 px-10  items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
        
      </div>
      <div className="relative  text-white px-6 pb-6 mt-6">
        <h2 className="block text-2xl font-extrabold  mb-2">Recettes</h2>
        <div className="flex  justify-between">

          <span  className="block text-base bg-white rounded-full text-orange-500  font-bold px-3 py-2 leading-none  items-center"> {income} €</span>
        </div>
      </div>
    </div>


    <div className=" m-3  text-center  w-1/2  h-40 bg-red-400 rounded-lg shadow-lg">
     
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
       
      </div>
      <div className="relative  text-white px-6 pb-6 mt-6">
        <h2 className="block  text-2xl font-extrabold mb-2">Dépenses</h2>
        <div className="flex justify-between">
          <span  className="block bg-white rounded-full text-teal-500 text-base font-bold px-3 py-2 leading-none  items-center"> {expense} €</span>
        </div>
      </div>
    </div>
    
    
  </div>
        </>
     );
}
 
export default IncomeExpenses;