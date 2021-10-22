import React from 'react';
import './Banner.css'



const Banner = () => {
    return (
        <div className="banner bg-center bg-no-repeat h-96 pt-52 pb-96 text-center  ">
            <h1 className="text-5xl font-semibold">Best Food Waiting For Your Belly</h1>
            <div className="px-96 mt-4">
                <div className="bg-white flex items-center rounded-full shadow-xl">
                    <input className="rounded-l-full w-full  px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                    <div>
                        <button className="bg-red-500 text-white rounded-full hover:bg-red-400 focus:outline-none w-24 h-12 flex items-center justify-center">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>





    );
};

export default Banner;