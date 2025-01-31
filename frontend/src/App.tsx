import React from 'react';
import './App.css';

function App() {
  return (
    <main className="portfolio-container">
      <header className="portfolio-header">
        <h1>Mi Portafolio Tecnológico</h1>
        <p>Desarrollador Full Stack</p>
      </header>
      <section className="portfolio-about">
        <h2>Sobre Mí</h2>
        <p>
          ¡Hola! Soy un apasionado por la tecnología, el desarrollo web y
          soluciones de software.
        </p>
      </section>
      <section className="portfolio-projects">
        <h2>Proyectos Destacados</h2>
        <article className="project-item">
          <h3>Proyecto 1</h3>
          <p>
            Aplicación web enfocada en brindar soluciones de comercio electrónico.
          </p>
        </article>
        <article className="project-item">
          <h3>Proyecto 2</h3>
          <p>
            Sistema de gestión para optimizar procesos internos en una empresa.
          </p>
        </article>
      </section>
      <footer className="portfolio-footer">
        <p>© 2023 Mi Portafolio</p>
      </footer>
    </main>
  );
}

export default App;
