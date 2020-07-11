import React, { useState } from 'react';

const TransactionList = (props) => {

   const [text, setText] = useState('');
   const [amount, setAmount] = useState('');


    return ( 
        <>
            

<div className="flex justify-center my-8 mx-4 md:mx-0">
   <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
      <h2 className="text-4xl mb-6 text-teal-400 text-center font-extrabold tracking-tight">
         Nouvelle transaction
      </h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='text'>Libellé</label>
            <input id="text" placeholder="Entrez le libéllé" className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text'  required />
         </div>
         
         <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='amount'>Montant <span className="lowercase">(- pour négatif)</span> </label>
            <input id="amount" placeholder="Entrez un montant" className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='number'  required />
         </div>

         <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='amount'>Choisir une catégorie </label>
            <select id="icons" name="icons" placeholder="Entrez un montant" className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"  required>
               <option value="" > Choisir une catégorie </option>
               <option value="restaurant" > 🍽 </option>
               <option value="shopping" > Shopping </option>
            </select>
         </div>
         
         
        
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