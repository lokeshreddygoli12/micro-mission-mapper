
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, Zap } from 'lucide-react';

interface LeaderboardUser {
  id: string;
  name: string;
  avatarUrl?: string;
  tokens: number;
  rank: number;
}

interface LeaderboardCardProps {
  users: LeaderboardUser[];
  timeFrame: string;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ users, timeFrame }) => {
  // Function to get medal emoji based on rank
  const getMedalEmoji = (rank: number) => {
    switch (rank) {
      case 1:
        return <Award className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Award className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-7 text-center font-medium">
                  {getMedalEmoji(user.rank) || <span>{user.rank}</span>}
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span>{user.tokens}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
