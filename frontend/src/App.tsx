import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Iridescence from "./components/Iridiscence";
import Dock from "./components/Dock";
import CircularStatSlider from "./components/CircularStats";
import RotatingText from "./components/RotatinText";
import PixelCard from "./components/PixelCard";
import CardFlip from "./components/CardFlip";
import "./App.css";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const stats = [
    { value: '+450', description: 'Liters of coffee' },
    { value: '1 year', description: 'Professional experience' },
    { value: '453K', description: 'Total lines of code written' },
    { value: '5', description: 'Successful freelance SaaS projects' },
    { value: '♾', description: 'Will to improve every day' }
  ];

  return (
    <>
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <div className={
          darkTheme
            ? "min-h-screen text-white flex flex-col items-center"
            : "min-h-screen text-black flex flex-col items-center"
        }>
          <div className="relative flex flex-col md:flex-row w-full max-w-6xl gap-6">
            <div className="flex-1 relative p-6">
            <Iridescence color={darkTheme ? [0.2, 0.1, 0.2] : [1, 0.9, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />              
              <header className="bg-opacity-20 bg-white rounded-full p-6 mb-6 max-w-3xl flex justify-between items-center">
                <h1 className="text-lg font-bold">Isma</h1>
                <nav className="flex gap-6">
                  <a href="#inicio" className="hover:scale-110 hover:text-black transition-colors">Projects</a>
                  <a href="#sobre-mi" className="hover:scale-110 hover:text-black transition-colors">About</a>
                  <a href="#contacto" className="hover:scale-110 hover:text-black transition-colors">Contact</a>
                </nav>
                <button
                  className="hover:scale-110 transition-colors"
                  onClick={() => setDarkTheme(!darkTheme)}
                >
                  {darkTheme ? "Claro" : "Oscuro"}
                </button>
              </header>

              <PixelCard variant='default' className="bg-gradient-to-br from-purple-700 via-pink-700 to-red-500 bg-opacity-70 absolute top-0 left-0 shadow-lg min-h-[60vh] w-full">
              <div className="absolute top-40 left-40 min-h-[60vh] w-50">
                <h2 className="text-4xl font-medium">Isma</h2>
                <RotatingText
                  texts={['React', 'Bits', 'Is', 'Cool!']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
              </PixelCard>
            </div>

            <div className="w-full md:w-1/3 flex flex-col items-center gap-4 mt-6">
             <CircularStatSlider stats={stats} />

              <CardFlip/>
            </div>
          </div>

          <style>
            {`
              @keyframes swirl {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
          <section id="sobre-mi" className="w-full max-w-6xl mt-20 mb-16">
            <div className={`backdrop-blur-md rounded-xl p-8 shadow-xl transition-all duration-500 transform hover:translate-y-[-5px] ${
              darkTheme 
                ? "bg-gradient-to-br from-purple-900/30 to-purple-600/10 border border-purple-500/20 hover:shadow-purple-500/20" 
                : "bg-gradient-to-br from-purple-200/80 to-purple-100/50 border border-purple-300/30 hover:shadow-purple-300/30"
            }`}>
              <div className="flex items-center mb-6">
                <div className={`h-10 w-1 rounded-full mr-4 ${
                  darkTheme 
                    ? "bg-gradient-to-b from-purple-400 to-fuchsia-600" 
                    : "bg-gradient-to-b from-purple-500 to-fuchsia-700"
                }`}></div>
                <h3 className={`text-3xl font-medium bg-clip-text text-transparent ${
                  darkTheme 
                    ? "bg-gradient-to-r from-purple-400 to-fuchsia-500" 
                    : "bg-gradient-to-r from-purple-600 to-fuchsia-700"
                }`}>About Me</h3>
              </div>
              <p className={`text-lg leading-relaxed ml-2 pl-4 ${
                darkTheme 
                  ? "border-l border-purple-500/30" 
                  : "border-l border-purple-400/50"
              }`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iure quas laudantium saepe eius temporibus odit impedit ratione eveniet, possimus perspiciatis consequatur, nulla doloribus sit ipsum. Laudantium officiis laboriosam minima!
              </p>
            </div>
          </section>

          <section id="proyectos" className="w-full max-w-6xl mb-16">
            <div className={`backdrop-blur-md rounded-xl p-8 shadow-xl transition-all duration-500 transform hover:translate-y-[-5px] ${
              darkTheme 
                ? "bg-gradient-to-br from-cyan-900/30 to-blue-600/10 border border-cyan-500/20 hover:shadow-cyan-500/20" 
                : "bg-gradient-to-br from-cyan-200/80 to-blue-100/50 border border-cyan-300/30 hover:shadow-cyan-300/30"
            }`}>
              <div className="flex items-center mb-6">
                <div className={`h-10 w-1 rounded-full mr-4 ${
                  darkTheme 
                    ? "bg-gradient-to-b from-cyan-400 to-blue-600" 
                    : "bg-gradient-to-b from-cyan-500 to-blue-700"
                }`}></div>
                <h3 className={`text-3xl font-medium bg-clip-text text-transparent ${
                  darkTheme 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500" 
                    : "bg-gradient-to-r from-cyan-600 to-blue-700"
                }`}>Projects</h3>
              </div>
              <p className={`text-lg leading-relaxed ml-2 pl-4 ${
                darkTheme 
                  ? "border-l border-cyan-500/30" 
                  : "border-l border-cyan-400/50"
              }`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur recusandae repellat amet ab eaque blanditiis consequuntur pariatur ratione! Consequuntur quia placeat nisi vitae ratione dignissimos illo rem blanditiis esse.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className={`backdrop-blur-sm p-4 rounded-lg transition-all ${
                  darkTheme 
                    ? "bg-white/5 border border-white/10 hover:border-white/30" 
                    : "bg-black/5 border border-black/10 hover:border-black/20"
                }`}>
                  <h4 className="text-xl font-medium mb-2">Project 1</h4>
                  <p className={darkTheme ? "opacity-80" : "opacity-70"}>Project description goes here</p>
                </div>
                <div className={`backdrop-blur-sm p-4 rounded-lg transition-all ${
                  darkTheme 
                    ? "bg-white/5 border border-white/10 hover:border-white/30" 
                    : "bg-black/5 border border-black/10 hover:border-black/20"
                }`}>
                  <h4 className="text-xl font-medium mb-2">Project 2</h4>
                  <p className={darkTheme ? "opacity-80" : "opacity-70"}>Project description goes here</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contacto" className="w-full max-w-6xl mb-24">
            <div className={`backdrop-blur-md rounded-xl p-8 shadow-xl transition-all duration-500 transform hover:translate-y-[-5px] ${
              darkTheme 
                ? "bg-gradient-to-br from-emerald-900/30 to-teal-600/10 border border-emerald-500/20 hover:shadow-emerald-500/20" 
                : "bg-gradient-to-br from-emerald-200/80 to-teal-100/50 border border-emerald-300/30 hover:shadow-emerald-300/30"
            }`}>
              <div className="flex items-center mb-6">
                <div className={`h-10 w-1 rounded-full mr-4 ${
                  darkTheme 
                    ? "bg-gradient-to-b from-emerald-400 to-teal-600" 
                    : "bg-gradient-to-b from-emerald-500 to-teal-700"
                }`}></div>
                <h3 className={`text-3xl font-medium bg-clip-text text-transparent ${
                  darkTheme 
                    ? "bg-gradient-to-r from-emerald-400 to-teal-500" 
                    : "bg-gradient-to-r from-emerald-600 to-teal-700"
                }`}>Contact</h3>
              </div>
              <p className={`text-lg leading-relaxed ml-2 pl-4 mb-6 ${
                darkTheme 
                  ? "border-l border-emerald-500/30" 
                  : "border-l border-emerald-400/50"
              }`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod esse earum, soluta placeat illum obcaecati officia sunt omnis sint numquam asperiores dolores provident.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <button className={`flex items-center gap-2 backdrop-blur-sm px-6 py-3 rounded-full transition-all ${
                  darkTheme 
                    ? "bg-white/10 border border-white/20 hover:bg-white/20" 
                    : "bg-black/10 border border-black/10 hover:bg-black/15"
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </button>
                <button className={`flex items-center gap-2 backdrop-blur-sm px-6 py-3 rounded-full transition-all ${
                  darkTheme 
                    ? "bg-white/10 border border-white/20 hover:bg-white/20" 
                    : "bg-black/10 border border-black/10 hover:bg-black/15"
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub
                </button>
                <button className={`flex items-center gap-2 backdrop-blur-sm px-6 py-3 rounded-full transition-all ${
                  darkTheme 
                    ? "bg-white/10 border border-white/20 hover:bg-white/20" 
                    : "bg-black/10 border border-black/10 hover:bg-black/15"
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                  Email
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default App;
