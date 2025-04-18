
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Map, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-24">
          <div className="text-center md:max-w-3xl md:mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              <span className="block mb-1">Find Micro-Missions</span>
              <span className="block text-primary">Near You</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join quick, local, collaborative tasks that make an impact in your community.
              Discover missions, earn tokens, and connect with others nearby.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/map">
                  <Map className="h-5 w-5" />
                  <span>Explore Map</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/">
                  <Search className="h-5 w-5" />
                  <span>Find Missions</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-1/3 right-0 -translate-y-1/2 translate-x-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute bottom-1/3 left-0 translate-y-1/2 -translate-x-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
    </div>
  );
};

export default HeroSection;
