import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* Header con navegación superior */}
      <header className="portfolio-header">
        <nav className="portfolio-nav">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre Mí</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#educacion">Educación</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#certificaciones">Certificaciones</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="header-content">
          <h1>Ismael García</h1>
          <p>Full Stack Software Developer &amp; Especialista en IA y Big Data</p>
        </div>
      </header>

      {/* Contenido principal con secciones */}
      <main>
        {/* Sección de Inicio */}
        <section id="inicio" className="portfolio-section home">
          <h2>Bienvenido a mi Portfolio</h2>
          <p>
            Soy un desarrollador full stack apasionado por la tecnología, comprometido en aplicar mi entusiasmo y habilidades para crear soluciones innovadoras y accesibles.
          </p>
        </section>

        {/* Sección Sobre Mí */}
        <section id="sobre-mi" className="portfolio-section about">
          <h2>Sobre Mí</h2>
          <p>
            Con experiencia en proyectos para INCIBE y NEORIS, me especializo en el diseño e implementación de interfaces de usuario siguiendo estándares UX/UI, así como en el desarrollo back-end escalable y seguro. Trabajo con React, TypeScript, Django, Node.js y diversas herramientas de ciberseguridad.
          </p>
        </section>

        {/* Sección Experiencia */}
        <section id="experiencia" className="portfolio-section experience">
          <h2>Experiencia</h2>
          <article className="experience-item">
            <h3>Full Stack Software Developer - NEORIS (04/2024 - Actualidad)</h3>
            <ul>
              <li>
                Desarrollo de soluciones avanzadas utilizando Python, TensorFlow, PyTorch, Spark y Hadoop, aplicando técnicas de machine learning y deep learning.
              </li>
            </ul>
          </article>
          <article className="experience-item">
            <h3>Desarrollador Backstage para INCIBE</h3>
            <ul>
              <li>
                Diseño e implementación de interfaces de usuario con React y TypeScript, siguiendo los estándares de UX/UI y colaborando estrechamente con el equipo de diseño.
              </li>
              <li>
                Desarrollo back-end escalable con Django y Node.js, integrando bases de datos SQL (PostgreSQL) y NoSQL (MongoDB), y gestionando buckets S3 en AWS.
              </li>
              <li>
                Implementación de APIs RESTful y conexión con herramientas de ciberseguridad como Grafana, Loki, Datadog, Dynatrace y Prometheus, asegurando un monitoreo eficiente.
              </li>
              <li>
                Trabajo en equipos ágiles usando Kanban (Jira, GitHub Projects) y herramientas CI/CD (GitHub Actions, SonarQube, OWASP ZAP y Jest) para garantizar la calidad y seguridad del software.
              </li>
            </ul>
          </article>
        </section>

        {/* Sección Educación */}
        <section id="educacion" className="portfolio-section education">
          <h2>Educación</h2>
          <article className="education-item">
            <h3>Máster en IA &amp; Big Data</h3>
            <p>Universidad Internacional de la Rioja (2024-2025)</p>
          </article>
          <article className="education-item">
            <h3>Desarrollo de Aplicaciones Multiplataforma</h3>
            <p>Universidad Europea de Madrid - FP Superior (2022-2024)</p>
          </article>
        </section>

        {/* Sección Habilidades */}
        <section id="skills" className="portfolio-section skills">
          <h2>Habilidades</h2>
          <ul>
            <li>Python - Avanzado</li>
            <li>Node.js - Avanzado</li>
            <li>TypeScript - Avanzado</li>
            <li>React - Avanzado</li>
            <li>Backstage - Avanzado</li>
            <li>SQL / NoSQL - Avanzado</li>
            <li>Django - Medio</li>
            <li>APIs RESTful - Avanzado</li>
          </ul>
          <h3>Soft Skills</h3>
          <ul>
            <li>Adaptabilidad y aprendizaje continuo</li>
            <li>Gestión efectiva bajo presión</li>
            <li>Resiliencia y capacidad para resolver problemas</li>
          </ul>
        </section>

        {/* Sección Certificaciones */}
        <section id="certificaciones" className="portfolio-section certifications">
          <h2>Certificaciones</h2>
          <ul>
            <li>Node - Avanzado</li>
            <li>TypeScript - Avanzado</li>
            <li>React - Avanzado</li>
            <li>Backstage - Avanzado</li>
            <li>SQL / NoSQL - Avanzado</li>
            <li>APIs RESTful - Avanzado</li>
          </ul>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="portfolio-section contact">
          <h2>Contacto</h2>
          <p><strong>Email:</strong> ismael.garcia.08052003@gmail.com</p>
          <p><strong>Teléfono:</strong> +34 634571500</p>
          <p><strong>Ubicación:</strong> Madrid, España</p>
          <div className="social-links">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Ismael García</p>
      </footer>
    </div>
  );
}

export default App;
