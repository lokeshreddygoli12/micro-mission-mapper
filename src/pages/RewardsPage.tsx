
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TokenDisplay from '@/components/rewards/TokenDisplay';
import LeaderboardCard from '@/components/rewards/LeaderboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Calendar, 
  Award
} from 'lucide-react';

// Mock data for leaderboard
const MOCK_LEADERBOARD = [
  { id: '1', name: 'Sarah Johnson', avatarUrl: '', tokens: 420, rank: 1 },
  { id: '2', name: 'Miguel Rodriguez', avatarUrl: '', tokens: 385, rank: 2 },
  { id: '3', name: 'Emily Chen', avatarUrl: '', tokens: 350, rank: 3 },
  { id: '4', name: 'David Kim', avatarUrl: '', tokens: 310, rank: 4 },
  { id: '5', name: 'Alex Taylor', avatarUrl: '', tokens: 290, rank: 5 },
];

const RewardsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold mb-6">Rewards & Tokens</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TokenDisplay 
                tokens={275} 
                level={3} 
                tokensToNextLevel={75} 
                rank="Mission Master"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      Monthly Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-48 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BarChart className="h-10 w-10 mx-auto mb-2 opacity-50" />
                      <p>Activity chart would appear here</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="h-20 rounded-md bg-muted flex items-center justify-center"
                          title={`Achievement ${i + 1}`}
                        >
                          <Award className={`h-8 w-8 ${i < 3 ? 'text-primary' : 'text-muted-foreground/30'}`} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <LeaderboardCard 
                users={MOCK_LEADERBOARD} 
                timeFrame="This Month"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RewardsPage;
