import { useState, useEffect } from "react";
import { Trophy, Award, Users, Presentation, Star, Target } from "lucide-react";

const AchievementsSection = () => {
  const [counters, setCounters] = useState({
    hackathons: 0,
    events: 0,
    workshops: 0,
    participants: 0
  });

  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      description: "Selected for the national-level hackathon among thousands of participants. Developed innovative solutions for real-world problems.",
      icon: Trophy,
      category: "Competition",
      year: "2024",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "24-hour AI Hackathon Participant",
      description: "Participated in intensive hackathon focusing on AI/ML solutions. Built and deployed working prototypes within tight deadlines.",
      icon: Target,
      category: "Hackathon",
      year: "2024",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Project Expo + Poster Presenter",
      description: "Presented research and projects to industry experts and academic peers. Competed among 40+ teams showcasing innovative solutions.",
      icon: Presentation,
      category: "Academic",
      year: "2024",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "VIT Industry Conclave 2024 Attendee",
      description: "Attended prestigious industry conclave, networking with professionals and learning about latest industry trends and technologies.",
      icon: Star,
      category: "Professional Development",
      year: "2024",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const stats = [
    { label: "Hackathons", value: 3, suffix: "+" },
    { label: "Events Managed", value: 10, suffix: "+" },
    { label: "Workshops", value: 5, suffix: "+" },
    { label: "Event Participants", value: 300, suffix: "+" }
  ];

  // Counter animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        hackathons: 3,
        events: 10,
        workshops: 5,
        participants: 300
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="achievements" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Awards & <span className="text-muted-foreground">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones that reflect my commitment to excellence, 
            innovation, and continuous learning in technology and leadership.
          </p>
        </div>

        

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className={`group card-gradient rounded-2xl p-6 lg:p-8 hover:scale-[1.02] transition-all duration-500 fade-in-up stagger-${index + 1}`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={28} className="text-foreground" />
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-muted/20 text-muted-foreground rounded-full border border-border">
                          {achievement.category}
                        </span>
                        <span className="text-sm text-muted-foreground font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Badge */}
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Achievement Unlocked
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16">
          <div className="card-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Achievement Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="relative flex items-center space-x-6">
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-foreground rounded-full relative z-10" />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;