import { Code, Database, Cloud, Award } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 95 },
    { name: "SQL", level: 85 },
    { name: "AWS (S3, EC2)", level: 80 },
    { name: "Excel", level: 85 },
    { name: "GitHub", level: 90 }
  ];

  const certifications = [
    {
      title: "NPTEL: Introduction to Machine Learning",
      issuer: "NPTEL",
      icon: Award
    },
    {
      title: "Python Programming",
      issuer: "Vityarthi",
      icon: Code
    },
    {
      title: "Java Development",
      issuer: "Vityarthi",
      icon: Code
    },
    {
      title: "Machine Learning",
      issuer: "Vityarthi",
      icon: Database
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                About <span className="text-muted-foreground">Me</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science student passionate about Artificial Intelligence, 
                full-stack development, and scalable SaaS systems. I've built and deployed 
                production-ready ML and automation tools, participated in national-level 
                hackathons, and enjoy mentoring peers and leading events in the tech community.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-foreground to-muted-foreground h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Visual */}
          <div className="space-y-8">
            {/* Workspace visual element */}
            <div className="relative">
              <div className="card-gradient rounded-2xl p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Cloud className="text-muted-foreground" size={24} />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                
                <div className="grid gap-4">
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <div
                        key={cert.title}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors duration-300"
                      >
                        <div className="p-2 rounded-lg bg-muted/20">
                          <Icon size={20} className="text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium text-foreground">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Events Managed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">97%</div>
                <div className="text-sm text-muted-foreground">ML Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
