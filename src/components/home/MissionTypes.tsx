
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Trash2, 
  Paintbrush, 
  Truck, 
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const missionTypes = [
  {
    title: 'Cleanup Missions',
    description: 'Help clean parks, beaches, and public spaces in your neighborhood',
    icon: Trash2,
    color: 'bg-mission-cleanup',
    textColor: 'text-mission-cleanup',
    examples: ['Park cleanup', 'Beach litter collection', 'Graffiti removal']
  },
  {
    title: 'Creative Missions',
    description: 'Share your creative skills for community projects and initiatives',
    icon: Paintbrush,
    color: 'bg-mission-creative',
    textColor: 'text-mission-creative',
    examples: ['Logo design', 'Mural painting', 'Photography for local events']
  },
  {
    title: 'Delivery Missions',
    description: 'Deliver essential items to those who need them in your community',
    icon: Truck,
    color: 'bg-mission-delivery',
    textColor: 'text-mission-delivery',
    examples: ['Food delivery to seniors', 'Donation pickups', 'Grocery runs for neighbors']
  },
  {
    title: 'Help Missions',
    description: 'Assist others with tasks that require an extra pair of hands',
    icon: HeartPulse,
    color: 'bg-mission-help',
    textColor: 'text-mission-help',
    examples: ['Tech support for seniors', 'Community garden help', 'Moving assistance']
  }
];

const MissionTypes = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Mission Types</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the different types of micro-missions you can join or create
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missionTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`h-2 ${type.color}`} />
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className={`${type.color} bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                    <type.icon className={`h-6 w-6 ${type.textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{type.title}</h3>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-sm flex items-center space-x-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${type.color}`} />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/map" className="flex items-center">
              <span>Find Missions Now</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MissionTypes;
