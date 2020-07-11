import React from 'react';

const IncomeExpenses = (props) => {
    return ( 
        <>
       
<div className=" flex flex-wrap items-center justify-center">
    
    <div className="flex-shrink-0 m-6 text-center relative overflow-hidden w-56 h-40 bg-green-400 rounded-lg shadow-lg">
      
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
        
      </div>
      <div className="relative  text-white px-6 pb-6 mt-6">
        <h2 className="block text-2xl font-extrabold  mb-2">Recettes</h2>
        <div className="flex  justify-between">

          <span  className="block text-xl bg-white rounded-full text-orange-500  font-bold px-3 py-2 leading-none flex items-center">+ 70.00 €</span>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 m-6 relative text-center overflow-hidden w-56 h-40 bg-red-400 rounded-lg max-w-xs shadow-lg">
     
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
       
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <h2 className="block  text-2xl font-extrabold mb-2">Dépenses</h2>
        <div className="flex justify-between">
          <span  className="block bg-white rounded-full text-teal-500 text-xl font-bold px-3 py-2 leading-none flex items-center">- 30.00 €</span>
        </div>
      </div>
    </div>
    
    
  </div>
        </>
     );
}
 
export default IncomeExpenses;