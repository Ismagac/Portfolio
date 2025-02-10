import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Iridescence from "./components/Iridiscence";
import Dock from "./components/Dock";
import "./App.css";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <div className="min-h-screen bg-black text-white flex flex-col items-center">
          {/* Sección Principal con fondo iridiscente */}
          <div className="relative flex flex-col md:flex-row w-full max-w-6xl gap-6">
            <div className="flex-1 relative p-6">              
              {/* Menú Superior dentro de la sección */}
              <header className="bg-opacity-30 bg-blue-300 rounded-full p-6 mb-6 max-w-3xl">
                <h1 className="text-lg font-bold">Ismael</h1>
                <nav className="flex gap-6">
                  <a href="#inicio" className="hover:underline">Projects</a>
                  <a href="#sobre-mi" className="hover:underline">About</a>
                  <a href="#proyectos" className="hover:underline">Blog</a>
                  <a href="#contacto" className="hover:underline">Contact</a>
                </nav>
              </header>

              {/* Contenido Principal más grande */}
              <section
                id="inicio"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl p-12 relative shadow-lg min-h-[60vh]"
              >
                <h2 className="text-4xl font-bold">Equal parts creative developer & designer</h2>
                <div className="absolute bottom-4 left-4 bg-black p-3 rounded-full cursor-pointer">⬇</div>
              </section>
            </div>

            {/* Sección Derecha encajada a modo de puzzle */}
            <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
              <div className="w-40 h-40 flex flex-col items-center justify-center text-center border-2 border-white rounded-full">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Major projects delivered successfully</p>
              </div>

              <div className="bg-purple-600 text-white p-4 rounded-3xl shadow-lg flex flex-col items-start w-full">
                <div className="bg-black p-3 rounded-full mb-2">🔀</div>
                <p>Building a responsive design system with Tailwind CSS.</p>
              </div>
            </div>
          </div>

          {/* Secciones adicionales enlazadas */}
          <section id="sobre-mi" className="mt-12 p-6 max-w-6xl">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p>...</p>
          </section>

          <section id="proyectos" className="mt-12 p-6 max-w-6xl">
            <h3 className="text-2xl font-bold mb-4">Projects</h3>
            <p>...</p>
          </section>

          <section id="contacto" className="mt-12 p-6 max-w-6xl mb-24">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p>...</p>
          </section>
        </div>
      )}
    </>
  );
};

export default App;
