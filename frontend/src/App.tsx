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
        <div className="min-h-screen text-white flex flex-col items-center">
          {/* Sección Principal con fondo iridiscente */}
          <div className="relative flex flex-col md:flex-row w-full max-w-6xl gap-6">
            <div className="flex-1 relative p-6">
              <Iridescence color={[0.3, 0.2, 0.2]} mouseReact={false} amplitude={0.1} speed={1.0} />
              
              {/* Menú Superior dentro de la sección */}
              <header className="bg-opacity-20 bg-white rounded-full p-6 mb-6 max-w-3xl flex justify-between items-center">
                <h1 className="text-lg font-bold">Isma</h1>
                <nav className="flex gap-6">
                  <a href="#inicio" className="hover:scale-110 hover:text-black transition-colors">Projects</a>
                  <a href="#sobre-mi" className="hover:scale-110 hover:text-black transition-colors">About</a>
                  <a href="#contacto" className="hover:scale-110 hover:text-black transition-colors">Contact</a>
                </nav>
              </header>

              {/* Contenido Principal más grande */}
              <PixelCard variant='default' className="bg-black bg-opacity-70 absolute top-0 left-0 shadow-lg min-h-[60vh] w-full">
              <div className="absolute top-40 left-40 min-h-[60vh] w-50">
                <h2 className="text-4xl font-bold">Hello, I'm Isma!</h2>
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

            {/* Sección Derecha encajada a modo de puzzle */}
            <div className="w-full md:w-1/3 flex flex-col items-center gap-4 mt-6">
             <CircularStatSlider stats={stats} />

              <CardFlip/>
            </div>
          </div>

          {/* Secciones adicionales enlazadas */}
          <style>{``}</style>
          <section
            id="sobre-mi"
            className="relative overflow-hidden mt-12 p-6 max-w-6xl hover:scale-105 transition-transform duration-500"
          >
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p>Welcome to a more formal introduction of my background and experiences.</p>
          </section>

          <section
            id="proyectos"
            className="relative overflow-hidden mt-12 p-6 max-w-6xl hover:scale-105 transition-transform duration-500"
          >
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
            <p>Discover a curated selection of work that reflects my professional growth.</p>
          </section>

          <section
            id="contacto"
            className="relative overflow-hidden mt-12 p-6 max-w-6xl mb-24 hover:scale-105 transition-transform duration-500"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p>Feel free to reach out regarding potential collaborations or inquiries.</p>
          </section>
        </div>
      )}
    </>
  );
};

export default App;
