import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()
    const handleLogoClick = () => {
        history.push('/home');
    }
    const { user, logOut } = useAuth();
    return (
        <div className="fixed w-full bg-white ">
            <nav >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img onClick={handleLogoClick}
                                    className="h-10 cursor-pointer"
                                    src={logo}
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block ml-80 pl-28">
                                <div className="ml-96 flex items-baseline space-x-4">
                                    <NavLink to="/cart" className=" hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium "
                                    >
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </NavLink>

                                    {user?.email && <span>{user.displayName}</span>}
                                    {
                                        user.email ? <button onClick={logOut} className="bg-red-500 text-white rounded-full hover:bg-red-400 focus:outline-none w-28 h-10 flex items-center justify-center">Log out</button> : <>
                                            <NavLink to="/login" className=" hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Login
                                            </NavLink>

                                            <NavLink to="/signup">
                                                <button className="bg-red-500 text-white rounded-full hover:bg-red-400 focus:outline-none w-28 h-10 flex items-center justify-center">
                                                    Sign Up
                                                </button>
                                            </NavLink>

                                        </>}






                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink to="/cart" className="block hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium "
                                >
                                    <FontAwesomeIcon className="" icon={faShoppingCart} />
                                </NavLink>
                                {user?.email && <span>{user.displayName}</span>}
                                {
                                    user.email ? <button className="bg-red-500 text-white rounded-full hover:bg-red-400 focus:outline-none w-28 h-10 flex items-center justify-center">Log out</button> : <>
                                        <NavLink to="/login" className="block hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Login
                                        </NavLink>

                                        <NavLink to="/signup">
                                            <button className="bg-red-500 text-white rounded-full hover:bg-red-400 focus:outline-none w-28 h-10 flex items-center justify-center">
                                                Sign Up
                                            </button>
                                        </NavLink>
                                    </>}


                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </div>
    );
};

export default Header;