import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Iridescence from "./components/Iridiscence";
// import Dock from "./components/Dock";
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
          <div className="w-full max-w-6xl">
            <div className="relative flex flex-col md:flex-row w-full gap-6 mb-16">
              <div className="flex-1 relative md:p-0">
                <Iridescence color={darkTheme ? [0.2, 0.1, 0.2] : [1, 0.9, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />              
                <header className="bg-opacity-20 bg-white rounded-full p-6 mb-6 max-w-3xl flex justify-between items-center">
                  <h1 className="text-lg font-bold">Isma</h1>
                  <nav className="flex gap-6">
                    <a href="#proyectos" className="hover:scale-110 hover:text-black transition-colors">Projects</a>
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

                <PixelCard variant='default' className="bg-gradient-to-br from-purple-700 via-pink-700 to-red-500 bg-opacity-70 shadow-lg min-h-[60vh] w-full rounded-xl">
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

              <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-4">
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
          </div>

          <section id="sobre-mi" className="w-full max-w-6xl mt-20 mb-16">
            <div className={`backdrop-blur-md rounded-xl p-8 shadow-xl transition-all duration-500 transform hover:translate-y-[-5px] ${
              darkTheme 
                ? "bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800/40 hover:shadow-gray-900/30" 
                : "bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 hover:shadow-gray-300/30"
            }`}>
              <div className="flex items-center mb-6">
                <div className={`h-10 w-1 rounded-full mr-4 ${
                  darkTheme 
                    ? "bg-gradient-to-b from-gray-400 to-gray-600" 
                    : "bg-gradient-to-b from-gray-500 to-gray-700"
                }`}></div>
                <h3 className={`text-3xl font-medium ${
                  darkTheme 
                    ? "text-gray-100" 
                    : "text-gray-800"
                }`}>About Me</h3>
              </div>
              <p className={`text-lg leading-relaxed ml-2 pl-4 ${
                darkTheme 
                  ? "border-l border-gray-700 text-gray-300" 
                  : "border-l border-gray-300 text-gray-600"
              }`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iure quas laudantium saepe eius temporibus odit impedit ratione eveniet, possimus perspiciatis consequatur, nulla doloribus sit ipsum. Laudantium officiis laboriosam minima!
              </p>
            </div>
          </section>

          <section id="proyectos" className="w-full max-w-6xl mb-16">
            <div className={`backdrop-blur-md rounded-xl p-8 shadow-xl transition-all duration-500 transform hover:translate-y-[-5px] ${
              darkTheme 
                ? "bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800/40 hover:shadow-gray-900/30" 
                : "bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 hover:shadow-gray-300/30"
            }`}>
              <div className="flex items-center mb-6">
                <div className={`h-10 w-1 rounded-full mr-4 ${
                  darkTheme 
                    ? "bg-gradient-to-b from-gray-400 to-gray-600" 
                    : "bg-gradient-to-b from-gray-500 to-gray-700"
                }`}></div>
                <h3 className={`text-3xl font-medium ${
                  darkTheme 
                    ? "text-gray-100" 
                    : "text-gray-800"
                }`}>Projects</h3>
              </div>
              <p className={`text-lg leading-relaxed ml-2 pl-4 mb-8 ${
                darkTheme 
                  ? "border-l border-gray-700 text-gray-300" 
                  : "border-l border-gray-300 text-gray-600"
              }`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur recusandae repellat amet ab eaque blanditiis consequuntur pariatur ratione!
              </p>
              
              {/* Web Development Projects */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className={`h-6 w-1 rounded-full mr-3 ${
                    darkTheme 
                      ? "bg-gradient-to-b from-blue-500/60 to-blue-700/60" 
                      : "bg-gradient-to-b from-blue-600 to-blue-800"
                  }`}></div>
                  <h4 className={`text-xl font-medium ${darkTheme ? "text-blue-300" : "text-blue-700"}`}>
                    Web Development
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className={`p-6 rounded-lg transition-all ${
                    darkTheme 
                      ? "bg-gray-900 border border-gray-800 hover:border-blue-900" 
                      : "bg-white border border-gray-200 hover:border-blue-200 shadow-sm"
                  }`}>
                    <h5 className={`text-xl font-medium mb-2 ${darkTheme ? "text-gray-100" : "text-gray-800"}`}>
                      E-commerce Platform
                    </h5>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-blue-300 border border-blue-900/40" : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>React</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-blue-300 border border-blue-900/40" : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>Node.js</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-blue-300 border border-blue-900/40" : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>MongoDB</span>
                    </div>
                    <p className={darkTheme ? "text-gray-400 mb-4" : "text-gray-600 mb-4"}>
                      A full-featured e-commerce solution with product management, cart functionality, and secure payment processing.
                    </p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-blue-900/30 text-blue-300 border border-blue-800/30 hover:bg-blue-900/50" 
                          : "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100"
                      }`}>Live Demo</a>
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700" 
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}>Source Code</a>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg transition-all ${
                    darkTheme 
                      ? "bg-gray-900 border border-gray-800 hover:border-blue-900" 
                      : "bg-white border border-gray-200 hover:border-blue-200 shadow-sm"
                  }`}>
                    <h5 className={`text-xl font-medium mb-2 ${darkTheme ? "text-gray-100" : "text-gray-800"}`}>
                      Analytics Dashboard
                    </h5>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-blue-300 border border-blue-900/40" : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>Vue.js</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-blue-300 border border-blue-900/40" : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>D3.js</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-blue-300 border border-blue-900/40" : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>Firebase</span>
                    </div>
                    <p className={darkTheme ? "text-gray-400 mb-4" : "text-gray-600 mb-4"}>
                      Real-time analytics dashboard with interactive charts, filters, and customizable reporting features.
                    </p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-blue-900/30 text-blue-300 border border-blue-800/30 hover:bg-blue-900/50" 
                          : "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100"
                      }`}>Live Demo</a>
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700" 
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}>Source Code</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Development Projects */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className={`h-6 w-1 rounded-full mr-3 ${
                    darkTheme 
                      ? "bg-gradient-to-b from-slate-500/60 to-slate-700/60" 
                      : "bg-gradient-to-b from-slate-600 to-slate-800"
                  }`}></div>
                  <h4 className={`text-xl font-medium ${darkTheme ? "text-slate-300" : "text-slate-700"}`}>
                    Mobile Apps
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className={`p-6 rounded-lg transition-all ${
                    darkTheme 
                      ? "bg-gray-900 border border-gray-800 hover:border-slate-800" 
                      : "bg-white border border-gray-200 hover:border-slate-200 shadow-sm"
                  }`}>
                    <h5 className={`text-xl font-medium mb-2 ${darkTheme ? "text-gray-100" : "text-gray-800"}`}>
                      Fitness Tracker
                    </h5>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-slate-300 border border-slate-800/40" : "bg-slate-50 text-slate-700 border border-slate-100"
                      }`}>React Native</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-slate-300 border border-slate-800/40" : "bg-slate-50 text-slate-700 border border-slate-100"
                      }`}>Redux</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-slate-300 border border-slate-800/40" : "bg-slate-50 text-slate-700 border border-slate-100"
                      }`}>Health API</span>
                    </div>
                    <p className={darkTheme ? "text-gray-400 mb-4" : "text-gray-600 mb-4"}>
                      Mobile app for tracking workouts, nutrition, and wellness metrics with social sharing capabilities.
                    </p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-slate-900/40 text-slate-300 border border-slate-800/30 hover:bg-slate-900/60" 
                          : "bg-slate-50 text-slate-700 border border-slate-100 hover:bg-slate-100"
                      }`}>Case Study</a>
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700" 
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}>App Store</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Design Projects */}
              <div>
                <div className="flex items-center mb-4">
                  <div className={`h-6 w-1 rounded-full mr-3 ${
                    darkTheme 
                      ? "bg-gradient-to-b from-gray-500/60 to-gray-700/60" 
                      : "bg-gradient-to-b from-gray-600 to-gray-800"
                  }`}></div>
                  <h4 className={`text-xl font-medium ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
                    UI/UX Projects
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className={`p-6 rounded-lg transition-all ${
                    darkTheme 
                      ? "bg-gray-900 border border-gray-800 hover:border-gray-700" 
                      : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}>
                    <h5 className={`text-xl font-medium mb-2 ${darkTheme ? "text-gray-100" : "text-gray-800"}`}>
                      Banking App Redesign
                    </h5>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-gray-300 border border-gray-700/40" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>Figma</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-gray-300 border border-gray-700/40" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>Prototyping</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-gray-300 border border-gray-700/40" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>User Research</span>
                    </div>
                    <p className={darkTheme ? "text-gray-400 mb-4" : "text-gray-600 mb-4"}>
                      Complete redesign of a banking application with focus on accessibility and streamlined user journeys.
                    </p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-gray-800/80 text-gray-300 border border-gray-700/30 hover:bg-gray-800" 
                          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                      }`}>View Design</a>
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700" 
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}>Case Study</a>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg transition-all ${
                    darkTheme 
                      ? "bg-gray-900 border border-gray-800 hover:border-gray-700" 
                      : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}>
                    <h5 className={`text-xl font-medium mb-2 ${darkTheme ? "text-gray-100" : "text-gray-800"}`}>
                      Design System
                    </h5>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-gray-300 border border-gray-700/40" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>Storybook</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-gray-300 border border-gray-700/40" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>Styled Components</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkTheme ? "bg-gray-800 text-gray-300 border border-gray-700/40" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>Documentation</span>
                    </div>
                    <p className={darkTheme ? "text-gray-400 mb-4" : "text-gray-600 mb-4"}>
                      Comprehensive design system with component library, usage guidelines, and accessibility documentation.
                    </p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-gray-800/80 text-gray-300 border border-gray-700/30 hover:bg-gray-800" 
                          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                      }`}>View System</a>
                      <a href="#" className={`text-sm px-3 py-1 rounded ${
                        darkTheme 
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700" 
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}>Documentation</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contacto" className="w-full max-w-6xl mb-24">
            <div className={`backdrop-blur-md rounded-xl p-8 shadow-xl transition-all duration-500 transform hover:translate-y-[-5px] ${
              darkTheme 
                ? "bg-gradient-to-br from-stone-900/70 to-stone-800/40 border border-stone-700/30 hover:shadow-stone-700/20" 
                : "bg-gradient-to-br from-stone-100/90 to-stone-50/60 border border-stone-300/40 hover:shadow-stone-400/20"
            }`}>
              <div className="flex items-center mb-6">
                <div className={`h-10 w-1 rounded-full mr-4 ${
                  darkTheme 
                    ? "bg-gradient-to-b from-rose-400/80 to-rose-600/70" 
                    : "bg-gradient-to-b from-rose-500/90 to-rose-700/80"
                }`}></div>
                <h3 className={`text-3xl font-medium bg-clip-text text-transparent ${
                  darkTheme 
                    ? "bg-gradient-to-r from-rose-300 to-rose-500" 
                    : "bg-gradient-to-r from-rose-600 to-rose-800"
                }`}>Contact</h3>
              </div>
              <p className={`text-lg leading-relaxed ml-2 pl-4 mb-6 ${
                darkTheme 
                  ? "border-l border-rose-500/20" 
                  : "border-l border-rose-600/30"
              }`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod esse earum, soluta placeat illum obcaecati officia sunt omnis sint numquam asperiores dolores provident.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <button className={`flex items-center gap-2 backdrop-blur-sm px-6 py-3 rounded-full transition-all ${
                  darkTheme 
                    ? "bg-stone-800/70 border border-stone-600/30 hover:bg-stone-700/80" 
                    : "bg-stone-200/80 border border-stone-300/50 hover:bg-stone-300/60"
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </button>
                <button className={`flex items-center gap-2 backdrop-blur-sm px-6 py-3 rounded-full transition-all ${
                  darkTheme 
                    ? "bg-stone-800/70 border border-stone-600/30 hover:bg-stone-700/80" 
                    : "bg-stone-200/80 border border-stone-300/50 hover:bg-stone-300/60"
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub
                </button>
                <button className={`flex items-center gap-2 backdrop-blur-sm px-6 py-3 rounded-full transition-all ${
                  darkTheme 
                    ? "bg-stone-800/70 border border-stone-600/30 hover:bg-stone-700/80" 
                    : "bg-stone-200/80 border border-stone-300/50 hover:bg-stone-300/60"
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
