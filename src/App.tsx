import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import Listings from './components/Listings';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <SearchBar />
        <Categories />
        <Listings />
      </main>
    </div>
  );
}

export default App;