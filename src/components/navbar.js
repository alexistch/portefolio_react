import React, { useState } from 'react';
import Cv from '../assets/IMG/CV.pdf';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = ({ scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-900 bg-opacity-75 backdrop-blur-md z-50 md:sticky top-0">
            <div className="container mx-auto flex flex-wrap pt-8 pb-8 px-[12%] items-center justify-between">
                <a
                    onClick={() => scrollToSection('accueil')}
                    className="font-extrabold text-3xl flex items-center text-white mb-4 md:mb-0 cursor-default transform transition duration-300 hover:scale-110"
                >
                    Alexis
                    <span className="font-extrabold ml-3 text-3xl text-violet-500 glow-text">Tchoulev</span>
                </a>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? (
                            <XIcon className="h-8 w-8" />
                        ) : (
                            <MenuIcon className="h-8 w-8" />
                        )}
                    </button>
                </div>

                <nav
                    className={`text-white font-semibold text-xl md:ml-auto flex flex-wrap items-center justify-center space-x-10 cursor-default ${
                        isOpen ? 'flex flex-col items-center w-full mt-2' : ''
                    } ${isOpen ? '' : 'hidden md:flex'}`}
                >
                    {isOpen && (
                        <ul className="flex flex-col items-center space-y-4 w-full">
                            <li>
                                <a
                                    onClick={() => {
                                        window.open(Cv, '_blank');
                                        setIsOpen(false);
                                    }}
                                    className="relative text-white hover:text-violet-500 transition duration-300 ease-in-out group cursor-pointer"
                                >
                                    CV
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        scrollToSection('competences');
                                        setIsOpen(false);
                                    }}
                                    className="relative text-white hover:text-violet-500 transition duration-300 ease-in-out group cursor-pointer"
                                >
                                    Compétences
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        scrollToSection('projets');
                                        setIsOpen(false);
                                    }}
                                    className="relative text-white hover:text-violet-500 transition duration-300 ease-in-out group cursor-pointer"
                                >
                                    Projets
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        scrollToSection('contact');
                                        setIsOpen(false);
                                    }}
                                    className="inline-flex items-center bg-violet-600 border-0 py-1 px-3 focus:outline-none hover:bg-violet-700 rounded font-semibold text-white text-xl mt-4 md:mt-0"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    )}
                    {!isOpen && (
                        <>
                            <a onClick={() => window.open(Cv, '_blank')} className="relative mr-5 text-white hover:text-violet-500 transition duration-300 ease-in-out group cursor-pointer">
                                CV
                            </a>
                            <a onClick={() => scrollToSection('competences')} className="relative mr-5 text-white hover:text-violet-500 transition duration-300 ease-in-out group cursor-pointer">
                                Compétences
                            </a>
                            <a onClick={() => scrollToSection('projets')} className="relative mr-5 text-white hover:text-violet-500 transition duration-300 ease-in-out group cursor-pointer">
                                Projets
                            </a>
                            <button onClick={() => scrollToSection('contact')} className="inline-flex items-center bg-violet-600 border-0 py-1 px-3 focus:outline-none hover:bg-violet-700 rounded font-semibold text-white text-xl mt-4 md:mt-0">
                                Contact
                            </button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
