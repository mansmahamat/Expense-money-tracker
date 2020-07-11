import React from 'react';


const TransactionHistory = (props) => {
    return ( 
        <>
           
<div className="container flex mx-auto w-full  items-center justify-center">
 
   <ul className="flex flex-col bg-teal-400 p-4 rounded-lg ">
        <h3 className="text-center mb-4 text-xl">Historique</h3>
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col rounded-md w-10 h-10 bg-green-500 justify-center items-center mr-4">
                <i className="fas fa-utensils"></i>
            </div>
            <div className="flex-1 pl-1 mr-16">
              <div className="font-medium">Burger King</div>
              <div className="text-gray-600 text-sm"> +20 € </div>
            </div>
                <button className="text-gray-600 text-xs">
                    <i className="fas fa-times text-red-600 font-bold text-lg"></i>
                </button>
          </div>
        </li>
             <li className="border-gray-400 flex flex-row mb-2">
          <div className="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col rounded-md w-10 h-10 bg-red-500 justify-center items-center mr-4">
                <i className="fas fa-dumbbell"></i>
            </div>
            <div className="flex-1 pl-1 mr-16">
              <div className="font-medium">Basic Fit</div>
              <div className="text-gray-600 text-sm">-35 €</div>
            </div>
            <div className="text-gray-600 text-xs">
                <button className="text-gray-600 text-xs">
                    <i className="fas fa-times text-red-600 font-bold text-lg"></i>
                </button>
            </div>
          </div>
        </li>
            
    </ul>
    
  </div>
        </>
     );
}
 
export default TransactionHistory;