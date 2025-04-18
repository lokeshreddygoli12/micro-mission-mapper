
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Micro-Mission Nexus</h1>
        
        {/* Featured Missions Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Mission Cards */}
            {[
              {
                title: "Park Cleanup",
                location: "Central Park",
                time: "1 hour",
                participants: 3,
              },
              {
                title: "Logo Brainstorm",
                location: "Community Center",
                time: "30 minutes",
                participants: 2,
              },
              {
                title: "Food Delivery",
                location: "Downtown",
                time: "45 minutes",
                participants: 1,
              },
            ].map((mission, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{mission.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{mission.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{mission.participants} participants needed</span>
                    </div>
                    <Button className="w-full mt-4">Join Mission</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="p-8">
            <CardHeader>
              <CardTitle>Create Your Own Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Have a mission in mind? Share it with the community!</p>
              <Button variant="default" size="lg">
                Start a Mission
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
