import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction.jsx';





const TransactionHistory = (props) => {

  const { transactions } = useContext(GlobalContext);
  

  




    return ( 
        <>
 

        

<div   className="container flex mx-auto w-full h-auto items-center justify-center">

 

   <ul  className="flex flex-col bg-teal-400 p-4 rounded-lg ">
   
        <h3 className="text-center mb-4 text-xl">Historique</h3>
        {transactions.map(transaction => (
            <Transaction  key={transaction.id} transaction={transaction} />
        ))}
       
             
            
    </ul>
    
  </div>
 
        </>
     );
}
 
export default TransactionHistory;