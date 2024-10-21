import React from 'react';
import { Home, Castle, Mountain, Tent, Warehouse, Grape, Snowflake } from 'lucide-react';

const categories = [
  { name: 'Granjas', icon: Warehouse },
  { name: 'Iconos', icon: Castle },
  { name: 'Con vistas', icon: Mountain },
  { name: 'Lagos', icon: Tent },
  { name: 'En el Ártico', icon: Snowflake },
  { name: 'Viñedos', icon: Grape },
  { name: 'Casas rurales', icon: Home },
];

const Categories = () => {
  return (
    <div className="flex justify-between items-center mt-8 pb-4 overflow-x-auto">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center mx-4 cursor-pointer">
          <category.icon className="w-6 h-6 mb-1" />
          <span className="text-xs">{category.name}</span>
        </div>
      ))}
      <button className="ml-4 px-4 py-2 border rounded-full text-sm font-semibold">Filtros</button>
    </div>
  );
};

export default Categories;