import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="flex items-center justify-between bg-white border rounded-full shadow-sm">
        <div className="flex-1 px-6 py-3">
          <div className="font-semibold">Destino</div>
          <input type="text" placeholder="Buscar destinos" className="w-full outline-none" />
        </div>
        <div className="flex-1 px-6 py-3 border-l">
          <div className="font-semibold">Llegada</div>
          <input type="text" placeholder="Introduce la..." className="w-full outline-none" />
        </div>
        <div className="flex-1 px-6 py-3 border-l">
          <div className="font-semibold">Salida</div>
          <input type="text" placeholder="Introduce la..." className="w-full outline-none" />
        </div>
        <div className="flex-1 px-6 py-3 border-l">
          <div className="font-semibold">Viajeros</div>
          <input type="text" placeholder="Añade viajeros" className="w-full outline-none" />
        </div>
        <button className="bg-[#FF385C] text-white p-4 rounded-full mx-2">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;