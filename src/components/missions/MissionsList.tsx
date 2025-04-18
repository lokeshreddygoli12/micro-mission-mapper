
import React, { useState } from 'react';
import MissionCard, { MissionProps } from './MissionCard';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';

// Mock data for missions
const MOCK_MISSIONS: MissionProps[] = [
  {
    id: '1',
    title: 'Park Cleanup',
    description: 'Help clean up Central Park for 1 hour',
    location: 'Central Park, New York',
    category: 'cleanup',
    participants: 3,
    maxParticipants: 10,
    duration: '1 hour',
    distance: '0.5 miles',
    tokens: 25,
    skills: ['environmental', 'teamwork'],
    dateTime: '2025-04-18T15:00:00Z'
  },
  {
    id: '2',
    title: 'Community Garden Help',
    description: 'Assist with planting new vegetables',
    location: 'Community Garden, Brooklyn',
    category: 'help',
    participants: 2,
    maxParticipants: 5,
    duration: '2 hours',
    distance: '1.2 miles',
    tokens: 50,
    skills: ['gardening', 'environmental'],
    dateTime: '2025-04-19T10:00:00Z'
  },
  {
    id: '3',
    title: 'Logo Brainstorming',
    description: 'Join a creative session for a community center logo',
    location: 'Creators Hub, Manhattan',
    category: 'creative',
    participants: 1,
    maxParticipants: 6,
    duration: '45 minutes',
    distance: '0.8 miles',
    tokens: 35,
    skills: ['design', 'creativity'],
    dateTime: '2025-04-20T18:30:00Z'
  },
  {
    id: '4',
    title: 'Food Delivery',
    description: 'Deliver meals to elderly neighbors',
    location: 'Senior Center, Queens',
    category: 'delivery',
    participants: 4,
    maxParticipants: 8,
    duration: '1.5 hours',
    distance: '2.0 miles',
    tokens: 45,
    skills: ['driving', 'communication'],
    dateTime: '2025-04-21T12:00:00Z'
  },
  {
    id: '5',
    title: 'Tech Support for Seniors',
    description: 'Help seniors learn to use their smartphones',
    location: 'Library, Bronx',
    category: 'help',
    participants: 2,
    maxParticipants: 6,
    duration: '2 hours',
    distance: '1.5 miles',
    tokens: 40,
    skills: ['tech', 'patience', 'teaching'],
    dateTime: '2025-04-22T14:00:00Z'
  },
  {
    id: '6',
    title: 'Beach Cleanup',
    description: 'Help clean up the local beach',
    location: 'Rockaway Beach, Queens',
    category: 'cleanup',
    participants: 5,
    maxParticipants: 15,
    duration: '3 hours',
    distance: '3.2 miles',
    tokens: 70,
    skills: ['environmental', 'teamwork'],
    dateTime: '2025-04-23T09:00:00Z'
  }
];

const MissionsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter missions based on search query and category
  const filteredMissions = MOCK_MISSIONS.filter(mission => {
    const matchesSearch = mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mission.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mission.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || mission.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      <div className="mb-6 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search missions..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-1"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
        
        {isFilterOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="cleanup">Cleanup</SelectItem>
                  <SelectItem value="help">Help</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Distance" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Distance</SelectLabel>
                  <SelectItem value="1">Within 1 mile</SelectItem>
                  <SelectItem value="5">Within 5 miles</SelectItem>
                  <SelectItem value="10">Within 10 miles</SelectItem>
                  <SelectItem value="any">Any distance</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Duration</SelectLabel>
                  <SelectItem value="1">Under 1 hour</SelectItem>
                  <SelectItem value="2">1-2 hours</SelectItem>
                  <SelectItem value="3">2-3 hours</SelectItem>
                  <SelectItem value="any">Any duration</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
      
      {filteredMissions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMissions.map((mission) => (
            <MissionCard key={mission.id} {...mission} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No missions match your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default MissionsList;
