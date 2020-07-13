import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext);




    return ( 
        <li  className="border-gray-400 flex flex-row mb-2">
            <div className="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className={`flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4 ${props.transaction.amount < 0 ? 'bg-red-500' : 'bg-green-500' } `} >
                  <i className={` fas ${props.transaction.text === "sport" ? 'fa-dumbbell' : props.transaction.category === "course" ? 'fa-shopping-cart' : props.transaction.category === "restaurant" ? 'fa-utensils' : props.transaction.category === "assurance" ? 'fa-file-contract' : props.transaction.category === "nounou" ? 'fa-child' : '' } `}></i>
              </div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">{props.transaction.text}</div>
                  <div className="text-gray-600 text-sm">{props.transaction.amount} €</div>
                </div>
              <div className="text-gray-600 text-xs">
                <p> {props.transaction.date} </p>
                  <button className="text-gray-600 text-xs" onClick={() => deleteTransaction(props.transaction.id)} >
                      <i className="fas fa-times text-red-600 font-bold text-lg"></i>
                  </button>
              </div>
            </div>
          </li>
     );
}
 
export default Transaction;