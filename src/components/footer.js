import React from 'react';
import { useNavigate } from 'react-router-dom';


const Footer = ({ scrollToSection }) => {

    return (
        <footer class="bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-center">
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-semibold text-white sm:mb-0">
                        <li>
                            <a onClick={() => scrollToSection('competences')} class="hover:underline me-4 md:me-6">Compétences</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('projets')} class="hover:underline me-4 md:me-6">Projets</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('contact')} class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-white sm:text-center">© 2024 <a href="/" class="hover:underline">Alexis Tchoulev™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );  
};

export default Footer;