
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Users, Zap, Globe, Shield } from 'lucide-react';

const features = [
  {
    title: 'Hyper-Local',
    description: 'Find missions within walking distance of your current location',
    icon: MapPin,
    color: 'text-mission-cleanup',
    bgColor: 'bg-mission-cleanup/10'
  },
  {
    title: 'Time-Bound',
    description: 'Quick tasks that fit into your schedule, typically under 2 hours',
    icon: Clock,
    color: 'text-mission-help',
    bgColor: 'bg-mission-help/10'
  },
  {
    title: 'Collaborative',
    description: 'Join others in completing tasks and build community connections',
    icon: Users,
    color: 'text-mission-creative',
    bgColor: 'bg-mission-creative/10'
  },
  {
    title: 'Token Rewards',
    description: 'Earn tokens for completed missions to track your contributions',
    icon: Zap,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100/50'
  },
  {
    title: 'Real-Time Map',
    description: 'See missions appearing near you with live updates',
    icon: Globe,
    color: 'text-mission-delivery',
    bgColor: 'bg-mission-delivery/10'
  },
  {
    title: 'Skill Matching',
    description: 'Get recommended missions that match your unique skills',
    icon: Shield,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Micro-Mission Nexus connects people with quick, local tasks that benefit the community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
