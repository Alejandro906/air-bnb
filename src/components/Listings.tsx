import React from 'react';
import { Heart, Star } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Coo de Buelna, España',
    host: 'Anfitrión: Rhea',
    dates: '6-11 nov',
    price: '88 € noche',
    rating: 4.94,
    image: 'https://source.unsplash.com/random/300x200?farm',
  },
  {
    id: 2,
    title: 'Pontacq, Francia',
    host: 'Gestionado por una empresa',
    dates: '3-8 nov',
    price: '236 € noche',
    rating: 5.0,
    image: 'https://source.unsplash.com/random/300x200?countryside',
  },
  {
    id: 3,
    title: 'Peruyes, España',
    host: 'Anfitrión: Sheila',
    dates: '3-8 nov',
    price: '95 € noche',
    rating: 5.0,
    image: 'https://source.unsplash.com/random/300x200?mountain',
  },
  {
    id: 4,
    title: 'Pau, Francia',
    host: 'Anfitrión: Claudia',
    dates: '6-11 nov',
    price: '218 € noche',
    rating: 4.97,
    image: 'https://source.unsplash.com/random/300x200?chateau',
  },
];

const Listings = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {listings.map((listing) => (
        <div key={listing.id} className="relative">
          <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover rounded-xl" />
          <button className="absolute top-3 right-3 p-2 bg-white rounded-full">
            <Heart className="w-5 h-5" />
          </button>
          <div className="mt-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{listing.title}</h3>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>{listing.rating}</span>
              </div>
            </div>
            <p className="text-gray-500">{listing.host}</p>
            <p className="text-gray-500">{listing.dates}</p>
            <p className="font-semibold mt-1">{listing.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;