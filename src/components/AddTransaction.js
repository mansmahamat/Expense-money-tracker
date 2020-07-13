import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TransactionList = (props) => {

   const [text, setText] = useState('');
   const [amount, setAmount] = useState(0);
   const [category, setCategory] = useState('');
   const [date, setdate] = useState(new Date())

   const { addTransaction } = useContext(GlobalContext);

   const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
         id : Math.floor(Math.random() * 100000000 ) ,
         text : text,
         amount: +amount,
         category,
         date : date.toLocaleDateString()
      }

      addTransaction(newTransaction);
      
   }


    return ( 
        <>
            

<div className="flex justify-center my-8 mx-4 md:mx-0">
   <form onSubmit={onSubmit} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
      <h2 className="text-4xl mb-6 text-teal-400 text-center font-extrabold tracking-tight">
         Nouvelle transaction
      </h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='text'>Libellé</label>
            <input value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Entrez le libéllé" className="appearance-none block w-full bg-white border-teal-400 font-medium border  rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text'  required />
         </div>
         
         <div className="w-full md:w-full px-3 mb-6">
            <label className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='amount'>Montant <span className="lowercase">(- pour négatif)</span> </label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Entrez un montant" className="appearance-none block w-full bg-white border-teal-400 font-medium border  rounded-lg py-3 px-3 leading-tight focus:outline-none" type='number'  required />
         </div>

         <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='amount'>Choisir une catégorie </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} id="icons" name="icons" placeholder="Entrez un montant" className="appearance-none block w-full bg-white border-teal-400 font-medium border  rounded-lg py-3 px-3 leading-tight focus:outline-none"  required>
               <option value="" > Choisir une catégorie </option>
               <option value="sport" > Sport  </option>
               <option value="course" > Course </option>
               <option value="restaurant" > Restaurant </option>
               <option value="assurance" > Assurance </option>
               <option value="nounou" > Nounou </option>
            </select>
         </div>

         <DatePicker 
            required  
            closeOnScroll={true} 
            className=" mx-3  text-center mb-8 appearance-none block w-full bg-white font-medium border border-teal-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" 
            dateFormat="dd/MM/yyyy" 
            selected={date} 
            value={date} 
            onChange={date => setdate(date)}
            >
                <div style={{ textAlign : 'center', color: "#4fd1c5", fontWeight : 'bold' }}>Maitrisez votre budget</div> 
            </DatePicker>
         
         
        
         <div className="w-full md:w-full px-3 mb-6">
            <button className="appearance-none block w-full bg-teal-400 text-white font-extrabold border border-gray-200 rounded-lg py-3 px-3 leading-tight">Ajouter la transaction</button>
         </div>

         
        
        
      </div>
   </form>
</div>
        </>
     );
}
 
export default TransactionList;