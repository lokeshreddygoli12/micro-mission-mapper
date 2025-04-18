
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MissionMap from '@/components/map/MissionMap';

const MapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold mb-6">Mission Map</h1>
          <MissionMap />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MapPage;
