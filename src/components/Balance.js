import React from 'react';


const Balance = () => {

    const date = new Date();

    return ( 
        <>
            <div className=" mt-10 flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
                <div className="flex justify-center items-center">
                    <span className="px-2 font-bold text-2xl py-1 bg-teal-400 text-sm text-green-100 rounded">Solde</span>
                </div>

                <div className="mt-4 text-center">
                    <h1 className="text-3xl  text-gray-700 font-medium"> 200 €</h1>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/r4drktq/jean-wimmerlin-tm-Qn-4bm-UHs-unsplash.jpg"
                        className="w-8 h-8 object-cover rounded-full" alt="avatar" />
                        <p className="text-gray-700 text-sm mx-3" href="#">Mans</p>
                    </div>
                        <span className="font-light text-sm text-gray-600">{date.toLocaleString()}</span>
                </div>
            </div>
        </>
     );
}
 
export default Balance;