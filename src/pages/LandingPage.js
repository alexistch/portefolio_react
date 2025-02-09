import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ImageAlexis from '../assets/IMG/3.png';
import Cv from '../assets/IMG/CV.pdf';
import ImageCvflash from '../assets/IMG/cvflash.png';
import ImageTS from '../assets/IMG/tchoupa.png';
import Typewriter from 'react-typewriter-effect';
import { useState } from 'react';


const LandingPage = () => {
    const projects = [
        { id: 1, title: 'Cvflash.fr', image: ImageCvflash, link: "https://cvflash.fr"},
        { id: 2, title: 'Tchoupa.shop', image: ImageTS, link: "https://www.vinted.fr/member/34521937" },
        { id: 3, title: 'Projet 3', image: 'https://picsum.photos/300/200?random=3' },
        { id: 4, title: 'Projet 4', image: 'https://picsum.photos/300/200?random=4' },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (projects.length - 2));
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (projects.length - 2)) % (projects.length - 2));
      };

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="h-screen overflow-y-auto bg-gray-900 relative">
            <Navbar scrollToSection={scrollToSection} />
            <section id="accueil" className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-6 px-4 md:flex-row md:gap-40">
                {/* Texte et boutons */}
                <div className="flex-grow max-w-lg flex flex-col items-center text-center space-y-4 md:items-start md:text-left">
                    <div className="space-y-3 hidden md:block">
                    <h1 className="title-font text-4xl font-extrabold text-white">Bonjour,</h1>
                    <h2 className="text-3xl font-extrabold text-white flex items-baseline">
                        Je suis un&nbsp;
                        <span className="text-violet-600">
                        <Typewriter
                            textStyle={{
                            display: 'inline',
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            color: '#8b5cf6',
                            }}
                            startDelay={100}
                            cursorColor="#8b5cf6"
                            multiText={[
                            'Développeur Web',
                            'Technicien réseau',
                            'Ethical Hacker',
                            ]}
                            multiTextDelay={1500}
                            typeSpeed={70}
                            deleteSpeed={50}
                            loop
                        />
                        </span>
                    </h2>
                    </div>
                    <p className="leading-relaxed text-gray-300">
                    Je suis étudiant en troisième année à l'EFREI, où je poursuis un bachelor en cybersécurité et ethical hacking. Passionné par le développement web et le sport, je consacre mon temps libre à approfondir ces centres d'intérêt.
                    </p>
                    <div className="flex flex-col space-y-4 md:flex-row items-center text-center md:space-x-4 md:space-y-0">
                    <button
                        onClick={() => window.open(Cv, '_blank')}
                        className="rounded-full shadow-glowbutton inline-flex text-white font-semibold bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                    >
                        Mon CV
                    </button>
                    <button
                        onClick={() => scrollToSection('projets')}
                        className="rounded-full inline-flex text-gray-700 font-semibold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 text-lg"
                    >
                        Découvrez mes projets
                    </button>
                    </div>
                </div>

                        {/* Image */}
                        <div className="max-w-lg w-full flex justify-center relative top-[-110px] md:top-0 md:w-1/2">
                            <img
                            className="object-cover object-center rounded-full w-40 h-40 md:w-80 md:h-80 shadow-glow hover:shadow-glow-hover transition duration-300"
                            alt="Hero Section"
                            src={ImageAlexis}
                            />
                        </div>


                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-gray-900 to-gray-800 md:block hidden"></div>
            </section>



            <section id="competences" className="py-24 bg-gray-800 relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Décoration de fond complexe*/}
                    <div className="absolute inset-0 opacity-10">
                        {/* Grille de points */}
                        <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-2">
                            {[...Array(400)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="w-1 h-1 bg-white rounded-full opacity-20 transform rotate-45"
                                    style={{
                                        transform: `rotate(${Math.random() * 360}deg) scale(${Math.random()})`,
                                        opacity: Math.random() * 0.3
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Forme décorative */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
                    
                    {/* Éléments décoratifs géométriques */}
                    <div className="absolute top-10 left-10 transform rotate-45 w-20 h-20 border-4 border-white opacity-20"></div>
                    <div className="absolute bottom-10 right-10 transform -rotate-45 w-20 h-20 border-4 border-white opacity-20"></div>
                    
                    {/* Lignes diagonales */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        {[...Array(10)].map((_, i) => (
                            <div 
                                key={i} 
                                className="absolute bg-white opacity-5" 
                                style={{
                                    width: '1px', 
                                    height: '200%', 
                                    transform: `rotate(${i * 18}deg)`, 
                                    left: `${Math.random() * 100}%`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Cercles flottants */}
                    <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-white rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-white rounded-full opacity-10 animate-pulse"></div>

                    {/* Groupes de points */}
                    <div className="absolute top-20 right-20 grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-white rounded-full opacity-30"></div>
                        ))}
                    </div>
                    <div className="absolute bottom-20 left-20 grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-white rounded-full opacity-30"></div>
                        ))}
                    </div>

                    {/* Triangles décoratifs */}
                    <div className="absolute top-10 right-10 w-0 h-0 
                        border-l-10 border-r-10 border-b-20 
                        border-l-transparent border-r-transparent 
                        border-white opacity-20"></div>
                    <div className="absolute bottom-10 left-10 w-0 h-0 
                        border-l-10 border-r-10 border-t-20 
                        border-l-transparent border-r-transparent 
                        border-white opacity-20"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-5xl font-bold text-white text-center mb-16">Mes Compétences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Catégorie Développement */}
                        <div className="bg-gray-700 p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-3xl font-semibold text-violet-500 mb-8">Développement</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-6 h-6" />
                                    <span className="text-gray-300">React</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="w-6 h-6" />
                                    <span className="text-gray-300">Tailwind CSS</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="w-6 h-6" />
                                    <span className="text-gray-300">Node.js</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" alt="Go" className="w-6 h-6" />
                                    <span className="text-gray-300">Go</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML/CSS" className="w-6 h-6" />
                                    <span className="text-gray-300">HTML/CSS</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-6 h-6" />
                                    <span className="text-gray-300">Python</span>
                                </div>
                            </div>
                        </div>

                        {/* Catégorie Cybersécurité */}
                        <div className="bg-gray-700 p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-3xl font-semibold text-violet-500 mb-8">Cybersécurité</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://cdn.prod.website-files.com/659d67e0f409dcb2ab66a43f/661976f404f636a5806bb899_CEH_Badge.png" alt="CEH" className="w-6 h-6" />
                                    <span className="text-gray-300">CEH (En cours)</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" alt="Linux" className="w-6 h-6" />
                                    <span className="text-gray-300">Linux</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg" alt="Windows" className="w-6 h-6" />
                                    <span className="text-gray-300">Windows</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <span className="text-2xl">🐉</span>
                                    <span className="text-gray-300">Kali Linux</span>
                                </div>
                            </div>
                        </div>

                        {/* Catégorie Réseau */}
                        <div className="bg-gray-700 p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-3xl font-semibold text-violet-500 mb-8">Réseau</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <img src="https://www.practicalnetworking.net/wp-content/uploads/2019/10/CCNA-Certification-Logo.jpg" alt="CCNA" className="w-6 h-6" />
                                    <span className="text-gray-300">CCNA (En cours)</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <span className="text-2xl">🦈</span>
                                    <span className="text-gray-300">Wireshark</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <span className="text-2xl">📶</span>
                                    <span className="text-gray-300">Gestion réseaux</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-white text-2xl">•</span>
                                    <span className="text-2xl">🔒</span>
                                    <span className="text-gray-300">Config VPN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-900"></div>
            </section>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-800 md:block hidden"></div>

            
            <section id="projets" className="bg-gray-900 py-32 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-gray-900"></div>

      {/* Décorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in-down">Mes Projets</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {projects.map((project) => (
              <div key={project.id} className="w-1/3 flex-shrink-0 px-2 group">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-all duration-300 group-hover:scale-105">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-all duration-300 group-hover:blur-sm" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-center p-4">{project.description}</p>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 
                       bg-white bg-opacity-20 hover:bg-opacity-40 
                       rounded-full p-2 focus:outline-none 
                       transition-all duration-300 ease-in-out animate-pulse"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 
                       bg-white bg-opacity-20 hover:bg-opacity-40 
                       rounded-full p-2 focus:outline-none 
                       transition-all duration-300 ease-in-out animate-pulse"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
            
            <section id="contact" className="bg-gray-900 py-24 relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-900 to-gray-900"></div>
                
                <div className="container mx-auto px-4">
                    <h2 className="text-6xl font-extrabold text-white mb-16 text-center tracking-tight">
                    Contact
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-violet-500 mb-6">Coordonnées</h3>
                        <p className="text-gray-300 mb-4">alexistch.contact@gmail.com</p>
                        <p className="text-gray-300 mb-4">Basé en France <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" alt="Drapeau français" className="inline-block w-6 h-4 ml-1" /></p>
                        <p className="text-gray-300">Heure locale : {new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' })} 🕰️</p>
                    </div>
                    
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-violet-500 mb-6">Recherche d'alternance</h3>
                        <p className="text-gray-300">Dans le cadre de ma première année de master, je suis à la recherche d'une alternance en Cybersécurité. 🎓</p>
                    </div>
                    
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-violet-500 mb-6">LinkedIn</h3>
                        <div className="flex flex-col items-center">
                        <a 
                            href="https://www.linkedin.com/in/alexis-tchoulev-b46a5a261/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex flex-col items-center space-y-3"
                        >
                            <img 
                            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" 
                            alt="LinkedIn" 
                            className="w-24 h-24 mb-4"
                            />
                            <p className="text-gray-300 font-medium text-lg">Connectons-nous !</p>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                </div>
            </section>






            <Footer scrollToSection={scrollToSection}/>
        </div>
    );
};

export default LandingPage;
