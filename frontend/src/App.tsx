import React from "react";
import { Card, CardContent } from "./components/CardComp";
import StarBorder from "./components/ButtonStar";
import { Menu, Search, User } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Menú Superior */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 cursor-pointer" />
          <h1 className="text-xl font-bold">Mi Proyecto</h1>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta Grande */}
        <Card className="col-span-1 md:col-span-3 bg-blue-500 text-white p-6 rounded-2xl shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-bold">Bienvenido a la Plataforma</h2>
            <p className="mt-2">Aquí puedes encontrar toda la información relevante.</p>
            <StarBorder  as="button" className="custom-class" color="cyan" speed="5s">
              More Info
            </StarBorder>
          </CardContent>
        </Card>

        {/* Tarjetas Secundarias */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="p-4 shadow-md rounded-2xl bg-white">
            <CardContent>
              <h3 className="text-lg font-semibold">Tarjeta {item}</h3>
              <p className="text-gray-600 mt-2">Descripción breve del contenido.</p>
              <StarBorder  as="button" className="custom-class" color="cyan" speed="5s">
                More About
              </StarBorder>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
