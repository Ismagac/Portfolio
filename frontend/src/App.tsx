// App.tsx
import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen"; 
import Iridescence from './components/Iridiscence';
import Dock from './components/Dock';
import "./App.css";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <div className="app">
          <Iridescence color={[0.4, 0.4, 0.4]} mouseReact={false} amplitude={0.1} speed={1.0} />
          {/* Encabezado fijo con menú horizontal */}
          <header className="header">
            <div className="container">
              <h1>isma</h1>
            </div>

            <div className="container">
              <Dock
                collapsible={false}
                position="top"
                responsive="bottom"
                items={[
                  { icon: 'home', target: '#inicio' },
                  { icon: 'about me', target: '#sobre-mi' },
                  { icon: 'projects', target: '#proyectos' },
                  { icon: 'contact me', target: '#contacto' },
                ]}
              />
            </div>
          </header>

          {/* Contenido Principal */}
          <main className="main">
            {/* Sección de Inicio */}
            <section id="inicio" className="section hero">
              <h2>Bienvenido a mi Portfolio</h2>
              <p>Descubre mi trabajo y experiencia.</p>
            </section>

            {/* Sección Sobre Mí */}
            <section id="sobre-mi" className="section about">
              <h2>Sobre Mí</h2>
              <div className="about-content">
                <img
                  src="/ruta/a/tu-foto.jpg"
                  alt="Ismael García"
                  className="about-photo"
                />
                <p>
                  Soy un apasionado de la tecnología y desarrollo soluciones escalables
                  con React, TypeScript, Python y más. Mi enfoque está en crear
                  experiencias intuitivas y de alto rendimiento.
                </p>
              </div>
            </section>

            {/* Sección Proyectos */}
            <section id="proyectos" className="section projects">
              <h2>Proyectos</h2>
              <p>Aquí podrás ver algunos de mis proyectos destacados.</p>
            </section>

            {/* Sección Contacto */}
            <section id="contacto" className="section contact">
              <h2>Contacto</h2>
              <p>Email: ismael.garcia@example.com</p>
              <p>Ciudad, País</p>
              <div className="contact-links">
                <a href="https://github.com/tu-usuario" className="nav-link">
                  Github
                </a>
                <a href="https://linkedin.com/in/tu-usuario" className="nav-link">
                  LinkedIn
                </a>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="footer">
            <p>
              © {new Date().getFullYear()} Ismael García. Todos los derechos reservados.
            </p>
          </footer>
        </div>
      )}
    </>
  );
};

export default App;
