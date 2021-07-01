import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const TransactionList = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setdate] = useState(new Date());

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
      category,
      date: date.toLocaleDateString(),
    };

    addTransaction(newTransaction);

    setAmount('');
    setdate('');
    setCategory('');
    setText('');
  };

  return (
    <>
      <div className="flex justify-center my-8 mx-4 md:mx-0">
        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-4xl mb-6 text-teal-400 text-center font-extrabold tracking-tight">
            New transaction
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="divInput">
              <label className="input" htmlFor="text">
                Name
              </label>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="text"
                placeholder="Entrez le libellé"
                className="appearance-none block w-full bg-white border-teal-400 font-medium border  rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                required
              />
            </div>

            <div className="divInput">
              <label className="input" htmlFor="amount">
                Amount <span className="lowercase">(- for negative)</span>{' '}
              </label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                id="amount"
                placeholder="Entrez un montant"
                className="appearance-none block w-full bg-white border-teal-400 font-medium border  rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="number"
                required
              />
            </div>

            <div className="divInput">
              <label className="input" htmlFor="amount">
                Choose a category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="icons"
                name="icons"
                placeholder="Enter an amount"
                className="appearance-none block w-full bg-white border-teal-400 font-medium border  rounded-lg py-3 px-3 leading-tight focus:outline-none"
                required
              >
                <option value=""> Choose a categorie </option>
                <option value="sport"> Sport </option>
                <option value="course"> Shopping </option>
                <option value="restaurant"> Restaurant </option>
                <option value="assurance"> Insurance </option>
                <option value="nounou"> Nanny </option>
                <option value="salaire"> Salary </option>
                <option value="loyer"> Rent </option>
                <option value="petrol"> Petrol </option>
                <option value="mobile"> Mobile </option>
                <option value="electricity"> Electricity </option>
              </select>
            </div>

            <DatePicker
              required
              withPortal
              className=" mx-3  text-center mb-8 appearance-none block w-full bg-white font-medium border border-teal-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
              dateFormat="dd/MM/yyyy"
              selected={date}
              value={date}
              onChange={(date) => setdate(date)}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#4fd1c5',
                  fontWeight: 'bold',
                }}
              >
                Control your budget
              </div>
            </DatePicker>

            <div className="divInput">
              <button className="appearance-none block w-full bg-teal-400 text-white font-extrabold border border-gray-200 rounded-lg py-3 px-3 leading-tight">
                Add a transaction
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransactionList;
