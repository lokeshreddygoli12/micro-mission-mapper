
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, MapPin, Zap } from 'lucide-react';

export interface MissionProps {
  id: string;
  title: string;
  description: string;
  location: string;
  category: 'cleanup' | 'help' | 'creative' | 'delivery' | 'other';
  participants: number;
  maxParticipants: number;
  duration: string;
  distance: string;
  tokens: number;
  skills: string[];
  dateTime: string;
}

// Map categories to colors
const categoryColors = {
  cleanup: 'bg-mission-cleanup',
  help: 'bg-mission-help',
  creative: 'bg-mission-creative',
  delivery: 'bg-mission-delivery',
  other: 'bg-mission-other'
};

const MissionCard: React.FC<MissionProps> = ({
  title,
  description,
  location,
  category,
  participants,
  maxParticipants,
  duration,
  distance,
  tokens,
  skills,
  dateTime
}) => {
  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-md">
      <div className={`h-2 ${categoryColors[category]}`} />
      <CardContent className="p-4 flex-grow">
        <div className="mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-y-2 text-sm mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{distance}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{participants}/{maxParticipants}</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-2 text-yellow-500" />
            <span>{tokens} tokens</span>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-1">When</p>
          <p className="text-sm">{formatDateTime(dateTime)}</p>
        </div>
        
        <div className="mt-2">
          <p className="text-xs text-muted-foreground mb-1">Location</p>
          <p className="text-sm">{location}</p>
        </div>
        
        <div className="mt-2">
          <p className="text-xs text-muted-foreground mb-1">Required Skills</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default MissionCard;
