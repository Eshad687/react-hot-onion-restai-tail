import React from 'react';
import img1 from '../../../images/Image/adult-blur-blurred-background-687824.png';
import img2 from '../../../images/Image/chef-cook-food-33614.png';
import img3 from '../../../images/Image/architecture-building-city-2047397.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <div className="mx-32 mt-20 space-y-4">
            <h1 className="text-3xl">Why You Choose us</h1>
            <p className="w-2/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit asperiores dolor sint odit velit veniam ea eaque odio fugit voluptates?</p>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <img src={img1} alt="" />
                    <div className="px-4 space-y-4 ">
                        <h3 className="text-xl font-medium mt-2 "><FontAwesomeIcon className="bg-red-600 text-white px-1 py-1 rounded-full" icon={faBus} /> Fast Delivary </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptatum unde exercitationem, dolorum voluptas.</p>

                        <p className="cursor-pointer text-blue-400">see more <FontAwesomeIcon className="text-green-400" icon={faArrowCircleRight} /></p>
                    </div>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <div className="px-4 space-y-4 ">
                        <h3 className="text-xl font-medium mt-2 "><FontAwesomeIcon className="bg-red-600 text-white px-1 py-1  rounded-full" icon={faBell} /> A Good Auto Responder </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptatum unde exercitationem, dolorum voluptas.</p>

                        <p className="cursor-pointer text-blue-400">see more <FontAwesomeIcon className="text-green-400" icon={faArrowCircleRight} /></p>
                    </div>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <div className="px-4 space-y-4 ">
                        <h3 className="text-xl font-medium mt-2 "><FontAwesomeIcon className="bg-red-600 text-white px-1 py-1  rounded-full" icon={faTruck} /> Home Delivary </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptatum unde exercitationem, dolorum voluptas.</p>

                        <p className="cursor-pointer text-blue-400">see more <FontAwesomeIcon className="text-green-400" icon={faArrowCircleRight} /></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;