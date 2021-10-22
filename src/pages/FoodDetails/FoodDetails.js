import React, { useState } from 'react';
import { useParams } from 'react-router';

import useFoods from '../../hooks/useFoods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const FoodDetails = () => {
    const { foodId } = useParams();
    const { foods } = useFoods();
    const [quantity, setQuantity] = useState(1);

    const food = foods?.find(fd => fd.id === foodId);

    const quantityPlusHandler = () => {

        setQuantity(quantity + 1)
    }
    const quantityMinusHandler = () => {

        quantity > 0 && setQuantity(quantity - 1)
    }



    return (
        <div className="mx-32 pt-20 flex justify-evenly ">
            <div className="space-y-4 mt-10 w-2/4">
                <h1 className="text-3xl font-bold"> {food?.name}</h1>
                <p>{food?.description}</p>
                <div className="flex space-x-8">


                    <h3 className=" text-xl font-medium text-red-600 mt-2">Price: ${food?.price}</h3>
                    <span class="inline-flex">
                        <button onClick={quantityMinusHandler} class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l-full text-xl">
                            -
                        </button>
                        <input class="bg-gray-100  text-gray-800 font-bold py-2 text-center w-1/6" value={quantity} type="text" />
                        <button onClick={quantityPlusHandler} class="bg-gray-200 hover:bg-gray-300 text-red-600 font-bold py-2 px-4 rounded-r-full text-xl">
                            +
                        </button>
                    </span>
                </div>
                <button className="bg-red-500 text-white rounded-full hover:bg-red-500 focus:outline-none  h-10 flex items-center justify-center space-x-2 px-4"> <FontAwesomeIcon icon={faCartPlus} />  <span>Add to cart</span>
                </button>
            </div>
            <img className="h-96" src={food?.img} alt="" />

        </div>
    );
};

export default FoodDetails;