
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap, Award, TrendingUp } from 'lucide-react';

interface TokenDisplayProps {
  tokens: number;
  level: number;
  tokensToNextLevel: number;
  rank: string;
}

const TokenDisplay: React.FC<TokenDisplayProps> = ({
  tokens,
  level,
  tokensToNextLevel,
  rank
}) => {
  const progressPercentage = Math.floor((tokens / (tokens + tokensToNextLevel)) * 100);
  
  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Zap className="h-5 w-5 mr-2 text-yellow-500" />
          Your Tokens
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-4xl font-bold">{tokens}</span>
          <span className="text-muted-foreground">tokens</span>
        </div>
        
        <div className="flex items-center justify-between text-sm mb-1">
          <span>Level {level}</span>
          <span>Level {level + 1}</span>
        </div>
        
        <Progress value={progressPercentage} className="h-2 mb-3" />
        
        <p className="text-sm text-muted-foreground mb-4">
          {tokensToNextLevel} more tokens until next level
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted rounded-md p-3 flex flex-col items-center justify-center">
            <Award className="h-5 w-5 mb-1 text-primary" />
            <span className="text-sm font-medium">{rank}</span>
            <span className="text-xs text-muted-foreground">Current Rank</span>
          </div>
          <div className="bg-muted rounded-md p-3 flex flex-col items-center justify-center">
            <TrendingUp className="h-5 w-5 mb-1 text-primary" />
            <span className="text-sm font-medium">12</span>
            <span className="text-xs text-muted-foreground">Missions Completed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenDisplay;
