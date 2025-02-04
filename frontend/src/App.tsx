import React from "react";
import "./App.css"; // Asegúrate de tener tus estilos aquí

function App() {
  return (
    <div className="app">
      {/* Encabezado fijo con menú horizontal */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img
              src="/images/spike.jpg" 
              alt="Foto de perfil"
              className="profile-photo"
            />
            <h1>Ismael García</h1>
          </div>
          <nav className="nav">
            <a href="#inicio" className="nav-link">
              Inicio
            </a>
            <a href="#sobre-mi" className="nav-link">
              Sobre Mí
            </a>
            <a href="#proyectos" className="nav-link">
              Proyectos
            </a>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </nav>
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

        {/* Sección Proyectos (o Experiencia) */}
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
        <p>© {new Date().getFullYear()} Ismael García. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
