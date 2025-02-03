import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      {/* Header */}
      <header className="w-full max-w-3xl text-center border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold">Ismael García</h1>
        <p className="text-gray-400">Full Stack Developer | AI & Big Data Enthusiast</p>
      </header>

      {/* Secciones */}
      <main className="w-full max-w-3xl mt-8 space-y-12">
        {/* Sobre Mí */}
        <section>
          <h2 className="text-xl font-semibold">Sobre Mí</h2>
          <p className="text-gray-300 mt-2">
            Apasionado por la tecnología, desarrollo interfaces intuitivas y soluciones escalables con React, TypeScript y Python.
          </p>
        </section>

        {/* Experiencia */}
        <section>
          <h2 className="text-xl font-semibold">Experiencia</h2>
          <div className="mt-2 space-y-4">
            <div>
              <h3 className="font-medium">Full Stack Developer - NEORIS</h3>
              <p className="text-gray-400 text-sm">Abr 2024 - Actualidad</p>
              <p className="text-gray-300 mt-1">Desarrollo de soluciones IA con Python y TensorFlow.</p>
            </div>
            <div>
              <h3 className="font-medium">Desarrollador Backstage - INCIBE</h3>
              <p className="text-gray-400 text-sm">Diseño UI/UX y desarrollo back-end con Django y Node.js.</p>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section>
          <h2 className="text-xl font-semibold">Habilidades</h2>
          <ul className="text-gray-300 mt-2 grid grid-cols-2 gap-2">
            <li>Python</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Django</li>
            <li>APIs RESTful</li>
          </ul>
        </section>

        {/* Contacto */}
        <section>
          <h2 className="text-xl font-semibold">Contacto</h2>
          <p className="text-gray-300 mt-2">📧 ismael.garcia.08052003@gmail.com</p>
          <p className="text-gray-300">📍 Madrid, España</p>
          <div className="mt-4 flex space-x-4">
            <a href="https://github.com/tu-usuario" className="text-blue-400">Github</a>
            <a href="https://linkedin.com/in/tu-usuario" className="text-blue-400">LinkedIn</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ismael García
      </footer>
    </div>
  );
}

export default App;
