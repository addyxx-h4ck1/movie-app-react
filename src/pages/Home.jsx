import React from 'react';
import Hero from '../componets/Hero';
import Search from '../componets/Search';
import Movies from '../componets/Movies';

function Home() {
  return (
    <main className="min-h-[100vh] w-full bg-[#030014] text-white pb-[4rem]">
      <Hero />
      <Search />
      <Movies />
    </main>
  );
}

export default Home;
