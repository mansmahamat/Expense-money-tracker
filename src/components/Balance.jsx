import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MyDoc from './MyDoc';
import { PDFDownloadLink } from '@react-pdf/renderer';





const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const dateCreation = transactions.map(transaction => transaction.date);
   

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const date = new Date();

    const text =  transactions.map(transaction => transaction);
    
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
            <div  className=" mt-10 flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
                <div className="flex justify-center items-center">
                    <span className="px-2 font-bold text-2xl py-1 bg-teal-400  text-green-100 rounded">Balance</span>
                </div>

                <div className="mt-4 text-center">
                    <h1 className="text-3xl  text-gray-700 font-medium"> {total} €</h1>
                </div>

                <div className="flex justify-between items-center mt-4 mb-6">
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/r4drktq/jean-wimmerlin-tm-Qn-4bm-UHs-unsplash.jpg"
                        className="w-8 h-8 object-cover rounded-full" alt="avatar" />
                        <p className="text-gray-700 text-sm mx-3" href="#">Mans</p>
                    </div>
                        <span className="font-light text-sm text-gray-600">{date.toLocaleString()}</span>
                </div>
                 <div>

               
                 <PDFDownloadLink className=" flex items-center bg-teal-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" key={transactions.id} document={<MyDoc transaction={text} total={total} expense={expense} income={income} dateCreation={dateCreation} />} fileName="budget.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading' : 'Download your budget in pdf')}
    </PDFDownloadLink>
  
              
                   
  
                
                 </div>
            </div> 
        </>
     );
}
 
export default Balance;