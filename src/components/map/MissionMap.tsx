
import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Compass, ChevronsUp, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data for missions
const MOCK_MISSIONS = [
  {
    id: '1',
    title: 'Park Cleanup',
    description: 'Help clean up Central Park for 1 hour',
    location: { lat: 40.785091, lng: -73.968285 },
    category: 'cleanup',
    participants: 3,
    maxParticipants: 10,
    duration: '1 hour',
    tokens: 25,
    skills: ['environmental', 'teamwork'],
    dateTime: '2025-04-18T15:00:00Z'
  },
  {
    id: '2',
    title: 'Community Garden Help',
    description: 'Assist with planting new vegetables',
    location: { lat: 40.775091, lng: -73.978285 },
    category: 'help',
    participants: 2,
    maxParticipants: 5,
    duration: '2 hours',
    tokens: 50,
    skills: ['gardening', 'environmental'],
    dateTime: '2025-04-19T10:00:00Z'
  },
  {
    id: '3',
    title: 'Logo Brainstorming',
    description: 'Join a creative session for a community center logo',
    location: { lat: 40.795091, lng: -73.958285 },
    category: 'creative',
    participants: 1,
    maxParticipants: 6,
    duration: '45 minutes',
    tokens: 35,
    skills: ['design', 'creativity'],
    dateTime: '2025-04-20T18:30:00Z'
  },
  {
    id: '4',
    title: 'Food Delivery',
    description: 'Deliver meals to elderly neighbors',
    location: { lat: 40.765091, lng: -73.988285 },
    category: 'delivery',
    participants: 4,
    maxParticipants: 8,
    duration: '1.5 hours',
    tokens: 45,
    skills: ['driving', 'communication'],
    dateTime: '2025-04-21T12:00:00Z'
  }
];

// Color mapping for mission categories
const categoryColors = {
  cleanup: 'mission-cleanup',
  help: 'mission-help',
  creative: 'mission-creative',
  delivery: 'mission-delivery',
  other: 'mission-other'
};

// Mock implementation of a Map component
// In a real application, this would use Mapbox or Google Maps
const MissionMap = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [isMissionDetailOpen, setIsMissionDetailOpen] = useState(false);
  const mapRef = useRef(null);
  const { toast } = useToast();

  // In a real implementation, this would initialize the map
  useEffect(() => {
    // Mock implementation - in reality, this would be Mapbox initialization
    console.log("Map would initialize here with Mapbox");
    
    // For demo purposes, let's select the first mission after a delay
    const timer = setTimeout(() => {
      setSelectedMission(MOCK_MISSIONS[0]);
      setIsMissionDetailOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleMissionSelect = (mission) => {
    setSelectedMission(mission);
    setIsMissionDetailOpen(true);
  };

  const handleJoinMission = () => {
    toast({
      title: "Joined Mission!",
      description: `You've successfully joined the "${selectedMission.title}" mission.`,
    });
    setIsMissionDetailOpen(false);
  };

  const formatDateTime = (dateTimeString) => {
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
    <div className="relative w-full h-[calc(100vh-10rem)] overflow-hidden bg-muted rounded-lg">
      {/* Mock map UI */}
      <div className="w-full h-full bg-gradient-to-br from-muted to-background flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">This would be a real Mapbox map in production</p>
          <p>The missions would appear as pins on this map</p>
        </div>
      </div>
      
      {/* Markers - in production these would be placed on the map */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {MOCK_MISSIONS.map((mission) => (
          <div 
            key={mission.id}
            className={`mission-marker absolute bg-${categoryColors[mission.category]} animate-pulse-slow`}
            style={{ 
              // Random positioning for the demo
              left: `${30 + Math.random() * 40}%`, 
              top: `${30 + Math.random() * 40}%`,
              pointerEvents: 'auto'
            }}
            onClick={() => handleMissionSelect(mission)}
          >
            <span className="sr-only">{mission.title}</span>
          </div>
        ))}
      </div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <Button variant="secondary" size="icon" className="rounded-full shadow-md">
          <Compass className="h-5 w-5" />
        </Button>
        <Button variant="secondary" size="icon" className="rounded-full shadow-md">
          <ChevronsUp className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Mission list panel */}
      <div className="absolute left-4 top-4 w-64 max-h-[calc(100%-2rem)] overflow-y-auto bg-background/80 backdrop-blur-md rounded-lg shadow-lg p-4">
        <h3 className="font-semibold mb-3">Nearby Missions</h3>
        <div className="space-y-2">
          {MOCK_MISSIONS.map((mission) => (
            <div 
              key={mission.id}
              className={`p-2 rounded-md cursor-pointer transition-colors hover:bg-muted ${
                selectedMission?.id === mission.id ? 'bg-muted' : ''
              }`}
              onClick={() => handleMissionSelect(mission)}
            >
              <div className="flex items-center space-x-2">
                <div 
                  className={`w-3 h-3 rounded-full bg-${categoryColors[mission.category]}`}
                />
                <span className="font-medium text-sm truncate">{mission.title}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-muted-foreground">{mission.duration}</span>
                <div className="flex items-center space-x-1">
                  <Zap className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs">{mission.tokens}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mission detail panel */}
      {isMissionDetailOpen && selectedMission && (
        <Card className="absolute right-4 bottom-4 w-80 shadow-lg">
          <div className="bg-primary p-3 text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">{selectedMission.title}</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0 text-primary-foreground hover:text-primary-foreground/80"
                onClick={() => setIsMissionDetailOpen(false)}
              >
                <span className="sr-only">Close</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
          <CardContent className="pt-3">
            <p className="text-sm mb-3">{selectedMission.description}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="text-xs">
                <p className="text-muted-foreground">When</p>
                <p className="font-medium">{formatDateTime(selectedMission.dateTime)}</p>
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{selectedMission.duration}</p>
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground">Participants</p>
                <p className="font-medium">{selectedMission.participants}/{selectedMission.maxParticipants}</p>
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground">Tokens</p>
                <p className="font-medium flex items-center">
                  <Zap className="h-3 w-3 text-yellow-500 mr-1" />
                  {selectedMission.tokens}
                </p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-1">Skills</p>
              <div className="flex flex-wrap gap-1">
                {selectedMission.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button 
              className="w-full"
              onClick={handleJoinMission}
            >
              Join Mission
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MissionMap;
