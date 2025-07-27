import { Calendar, MapPin, Users, TrendingUp, Zap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Event Coordinator",
      company: "North East Club",
      period: "Mar 2024 – Present",
      location: "VIT Bhopal",
      type: "Leadership Role",
      responsibilities: [
        "Managed logistics for 10+ college events with 300+ participants",
        "Coordinated with multiple teams and vendors for seamless execution",
        "Implemented efficient event management systems and workflows",
        "Led cross-functional teams to deliver successful cultural events"
      ],
      technologies: ["Event Management", "Team Leadership", "Project Planning"],
      icon: Users,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Research Participant",
      company: "AI Club",
      period: "Jan–Jul 2024",
      location: "VIT Bhopal",
      type: "Research & Development",
      responsibilities: [
        "Facilitated 5+ AI/ML workshops, improving model accuracy for peers",
        "Conducted research on machine learning algorithms and implementations",
        "Mentored fellow students in AI/ML concepts and practical applications",
        "Contributed to club's technical content and learning resources"
      ],
      technologies: ["Machine Learning", "Python", "Research", "Mentoring"],
      icon: Zap,
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      title: "Lead Performer",
      company: "Dance Club",
      period: "Dec 2023 – May 2024",
      location: "VIT Bhopal",
      type: "Creative Leadership",
      responsibilities: [
        "Choreographed and trained 15+ members; boosted participation 35%",
        "Organized and led performances at various college events",
        "Developed training programs to improve team coordination",
        "Fostered a collaborative and inclusive club environment"
      ],
      technologies: ["Leadership", "Performance Arts", "Team Building"],
      icon: TrendingUp,
      color: "from-pink-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Work <span className="text-muted-foreground">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and experiences that have shaped my professional journey 
            and contributed to my growth in technology and team management.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className={`group fade-in-up stagger-${index + 1}`}
              >
                <div className="card-gradient rounded-2xl p-6 lg:p-8 hover:scale-[1.01] transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-6 items-start">
                    {/* Icon & Company */}
                    <div className="lg:col-span-3 space-y-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                        <Icon size={28} className="text-foreground" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-muted/20 text-muted-foreground rounded-full border border-border">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="lg:col-span-6 space-y-4">
                      <h4 className="text-lg font-medium text-foreground">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="lg:col-span-3 space-y-4">
                      <h4 className="text-lg font-medium text-foreground">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-muted/20 text-muted-foreground rounded-full border border-border hover:border-foreground transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-gradient rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, collaborations, 
              and innovative projects. Let's connect and create something amazing!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;