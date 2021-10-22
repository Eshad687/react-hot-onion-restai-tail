import React from 'react';
import logo from '../../../images/logo2.png'

const Footer = () => {
    return (
        <div className="flex justify-between bg-gray-800 px-20 pt-16 pb-24 mt-20">
            <img className="h-10" src={logo} alt="" />
            <div className="flex text-white list-none">
                <div className="cursor-pointer">
                    <li><small>About online food</small></li>
                    <li><small>Read our blog</small></li>
                    <li><small>Sign up to deliver</small></li>
                    <li><small>Add your resataurant</small></li>
                </div>
                <div className="mx-12 cursor-pointer">
                    <li><small>Get Help</small></li>
                    <li><small>Read FAQs</small></li>
                    <li><small>View all cities</small></li>
                    <li><small>Restaurant near me</small></li>
                </div>
            </div>
        </div>
    );
};

export default Footer;