
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, Calendar, MapPin, Pencil, Zap } from 'lucide-react';

interface UserProfileProps {
  name: string;
  avatarUrl?: string;
  bio: string;
  location: string;
  completedMissions: number;
  tokens: number;
  level: number;
  skills: string[];
  joinDate: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatarUrl,
  bio,
  location,
  completedMissions,
  tokens,
  level,
  skills,
  joinDate
}) => {
  return (
    <Card className="mb-6">
      <CardHeader className="relative pb-0">
        <div className="absolute right-4 top-4">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Edit Profile</span>
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
            <AvatarFallback className="text-lg">{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl">{name}</CardTitle>
            <div className="flex items-center justify-center sm:justify-start mt-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="mb-4">{bio}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted rounded-md p-3 flex flex-col items-center justify-center">
            <Award className="h-5 w-5 mb-1 text-primary" />
            <span className="text-2xl font-bold">{completedMissions}</span>
            <span className="text-xs text-muted-foreground">Missions Completed</span>
          </div>
          <div className="bg-muted rounded-md p-3 flex flex-col items-center justify-center">
            <Zap className="h-5 w-5 mb-1 text-yellow-500" />
            <span className="text-2xl font-bold">{tokens}</span>
            <span className="text-xs text-muted-foreground">Tokens Earned</span>
          </div>
          <div className="bg-muted rounded-md p-3 flex flex-col items-center justify-center">
            <Calendar className="h-5 w-5 mb-1 text-primary" />
            <span className="text-sm font-medium">Joined</span>
            <span className="text-xs text-muted-foreground">{joinDate}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">Level {level}</span>
            <span className="text-sm text-muted-foreground">100 more tokens to Level {level + 1}</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
