
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import UserProfile from '@/components/profile/UserProfile';
import MissionHistory from '@/components/profile/MissionHistory';

// Mock data for user profile
const USER_DATA = {
  name: 'Jamie Smith',
  avatarUrl: '',
  bio: 'Community enthusiast with a passion for environmental initiatives. I love connecting with neighbors and making our city a better place!',
  location: 'Brooklyn, NY',
  completedMissions: 12,
  tokens: 275,
  level: 3,
  skills: ['Environmental', 'Teaching', 'Design', 'Photography', 'Programming', 'Gardening'],
  joinDate: 'March 2025'
};

// Mock data for completed missions
const COMPLETED_MISSIONS = [
  {
    id: '1',
    title: 'Park Cleanup',
    description: 'Helped clean up Central Park for Earth Day',
    location: 'Central Park',
    category: 'cleanup',
    dateCompleted: '2025-03-10T14:00:00Z',
    duration: '2 hours',
    tokens: 45
  },
  {
    id: '2',
    title: 'Logo Design Workshop',
    description: 'Led a creative session for a community center logo',
    location: 'Downtown Community Center',
    category: 'creative',
    dateCompleted: '2025-03-05T18:30:00Z',
    duration: '1 hour',
    tokens: 35
  },
  {
    id: '3',
    title: 'Senior Tech Support',
    description: 'Helped seniors learn to use their smartphones',
    location: 'Sunset Park Library',
    category: 'help',
    dateCompleted: '2025-02-28T11:00:00Z',
    duration: '1.5 hours',
    tokens: 30
  }
];

// Mock data for upcoming missions
const UPCOMING_MISSIONS = [
  {
    id: '4',
    title: 'Beach Cleanup',
    description: 'Join us to clean up Rockaway Beach',
    location: 'Rockaway Beach',
    category: 'cleanup',
    dateCompleted: '2025-04-22T09:00:00Z',
    duration: '3 hours',
    tokens: 70
  },
  {
    id: '5',
    title: 'Community Garden Help',
    description: 'Plant spring vegetables at the neighborhood garden',
    location: 'Greene Hill Community Garden',
    category: 'help',
    dateCompleted: '2025-04-25T16:00:00Z',
    duration: '2 hours',
    tokens: 50
  }
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <UserProfile {...USER_DATA} />
          <MissionHistory 
            completedMissions={COMPLETED_MISSIONS}
            upcomingMissions={UPCOMING_MISSIONS}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
