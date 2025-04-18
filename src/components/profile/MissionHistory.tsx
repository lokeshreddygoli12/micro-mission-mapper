
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Zap } from 'lucide-react';

interface HistoryMission {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  dateCompleted: string;
  duration: string;
  tokens: number;
}

interface MissionHistoryProps {
  completedMissions: HistoryMission[];
  upcomingMissions: HistoryMission[];
}

const MissionHistory: React.FC<MissionHistoryProps> = ({
  completedMissions,
  upcomingMissions
}) => {
  // Format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Display mission card
  const renderMission = (mission: HistoryMission, isCompleted: boolean) => (
    <Card key={mission.id} className="mb-3">
      <CardContent className="p-4">
        <div className="flex justify-between mb-2">
          <h3 className="font-medium">{mission.title}</h3>
          <Badge variant={isCompleted ? "outline" : "secondary"}>
            {isCompleted ? "Completed" : "Upcoming"}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">{mission.description}</p>
        
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formatDate(mission.dateCompleted)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{mission.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{mission.location}</span>
          </div>
          {isCompleted && (
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-yellow-500" />
              <span>{mission.tokens} tokens earned</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Missions</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingMissions.length > 0 ? (
              upcomingMissions.map((mission) => renderMission(mission, false))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>You don't have any upcoming missions</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed">
            {completedMissions.length > 0 ? (
              completedMissions.map((mission) => renderMission(mission, true))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>You haven't completed any missions yet</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MissionHistory;
