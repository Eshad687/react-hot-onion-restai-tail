import React from 'react';
import './Foods.css'


import { TabGroup } from '@statikly/funk';
import useFoods from '../../../../hooks/useFoods';
import Food from '../Food/Food';
import { useState } from 'react';

const Foods = () => {

    const { foods } = useFoods();

    const [meals, setMeals] = useState([])
    const [pageLoad, setPageLoad] = useState(true)




    const handlefood = (cat) => {
        const fds = foods.filter(fd => fd.category === cat)
        setMeals(fds)
    }
    // window.onload = () => handlefood("breakfast");

    if (foods.length && pageLoad) {
        handlefood("breakfast")
        setPageLoad(false)
    }





    return (

        <div>
            <div className="mt-10 flex flex-col justify-center items-center text-center">
                <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                    <div>


                        <TabGroup.Tab
                            index={0}
                            className="h-12 ml-8 transition-colors duration-150"
                            activeClassName="text-red-600 border-b-2 border-red-600"
                            inactiveClassName="text-black"
                        >
                            <span onClick={() => handlefood("breakfast")} className="font-medium">Breakfast</span>
                        </TabGroup.Tab>
                        <TabGroup.Tab
                            index={1}
                            className="h-12 ml-8 transition-colors duration-150"
                            activeClassName="text-red-600 border-b-2 border-red-600"
                            inactiveClassName="text-black"
                        >
                            <span onClick={() => handlefood("lunch")} className="font-medium">Lunch</span>
                        </TabGroup.Tab>
                        <TabGroup.Tab
                            index={2}
                            className="h-12 ml-8 transition-colors duration-150"
                            activeClassName="text-red-600 border-b-2 border-red-600"
                            inactiveClassName="text-black"
                        >
                            <span onClick={() => handlefood("dinner")} className="font-medium">Dinner</span>
                        </TabGroup.Tab>
                    </div>
                    {/* <div className="grid grid-cols-3 gap-4 mx-20 my-12 ">
                        {
                            xx?.map(food => <Food
                                key={food.id}
                                food={food}
                            ></Food>)
                        }
                    </div> */}
                    <div className="pb-96">
                        <div className="pb-72">

                            <TabGroup.TabPanel
                                index={0}
                                className="p-12 h-48"
                                activeClassName="opacity-100 duration-500 translate-x-0"
                                inactiveClassName="absolute opacity-0 -translate-x-2"
                            >
                                <div className="grid grid-cols-3 gap-4 mx-20 my-12 ">
                                    {
                                        meals?.map(food => <Food
                                            key={food.id}
                                            food={food}
                                        ></Food>)
                                    }
                                </div>
                            </TabGroup.TabPanel>
                            <TabGroup.TabPanel
                                index={1}
                                className="p-12  h-48"
                                activeClassName="opacity-100 duration-500 translate-x-0"
                                inactiveClassName="absolute opacity-0 -translate-x-2"
                            >
                                <div className="grid grid-cols-3 gap-4 mx-20 my-12 ">
                                    {
                                        meals?.map(food => <Food
                                            key={food.id}
                                            food={food}
                                        ></Food>)
                                    }
                                </div>
                            </TabGroup.TabPanel>
                            <TabGroup.TabPanel
                                index={2}
                                className="p-12 h-48"
                                activeClassName="opacity-100 duration-500 translate-x-0"
                                inactiveClassName="absolute opacity-0 -translate-x-2"
                            >
                                <div className="grid grid-cols-3 gap-4 mx-20 my-12 ">
                                    {
                                        meals?.map(food => <Food
                                            key={food.id}
                                            food={food}
                                        ></Food>)
                                    }
                                </div>
                            </TabGroup.TabPanel>
                        </div>
                    </div>
                </TabGroup>

            </div>

            <div className="text-center">
                <button className="bg-red-400 px-10 py-2 rounded text-white">Checkout Your Food</button>
            </div>

        </div>


    );
};

export default Foods;