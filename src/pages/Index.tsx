
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import MissionTypes from '@/components/home/MissionTypes';
import MissionsList from '@/components/missions/MissionsList';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Missions Near You</h2>
            <p className="mt-2 text-muted-foreground">
              Discover missions in your area that match your skills and interests
            </p>
            <Button variant="outline" className="mt-4 gap-2">
              <MapPin className="h-4 w-4" />
              <span>Update Location</span>
            </Button>
          </div>
          
          <MissionsList />
        </div>
        
        <FeaturesSection />
        <MissionTypes />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
