import React from 'react';
import Cv from '../assets/IMG/Cv.pdf';

const Navbar = ({ scrollToSection }) => {
    

    return (
        <header className="sticky top-0 bg-gray-900 bg-opacity-75 backdrop-blur-md z-50">
            <div className="container mx-auto flex flex-wrap pt-8 pb-8 px-[12%] flex-col md:flex-row items-center">
                <a onClick={() => scrollToSection('accueil')}
                    className="font-extrabold text-3xl flex items-center text-white mb-4 md:mb-0 cursor-default transform transition duration-300 hover:scale-110"
                >
                    Alexis
                    <span className="font-extrabold ml-3 text-3xl text-violet-500 glow-text">Tchoulev</span>
                </a>

                <nav className="text-white font-semibold text-xl md:ml-auto flex flex-wrap items-center justify-center space-x-10 cursor-default">
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
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
