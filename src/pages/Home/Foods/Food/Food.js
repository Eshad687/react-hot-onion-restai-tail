import React from 'react';
import { useHistory } from 'react-router';

const Food = ({ food }) => {
    const { name, img, price, description, id } = food;
    const history = useHistory();
    const handleFood = () => {
        history.push(`/${id}`);
    }
    return (
        <div onClick={handleFood} className=" rounded-md space-y-2 py-4 cursor-pointer">
            <img className="px-20" src={img} alt="" />
            <h3 className="text-xl font-medium">{name}</h3>
            <p>{description.slice(0, 40)}</p>
            <h4 className="text-lg font-medium">${price}</h4>
        </div>
    );
};

export default Food;