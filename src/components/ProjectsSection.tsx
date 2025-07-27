import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import spamCheckerImage from "@/assets/spam-checker.png";
import fleetManagementImage from "@/assets/fleet-management.webp";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Predictive Spam Analytics Platform",
      description: "ML spam detection with UCI dataset, Flask app deployed on Heroku. Achieved 97%+ accuracy with Naive Bayes, SVM, RF.",
      techStack: ["Python", "Flask", "Scikit-learn", "Heroku"],
      category: "ML Projects",
      image: spamCheckerImage,
      demoLink: "/SpamDetection.mp4",
      githubLink: "https://github.com/Palak0230/sms-spam-classifier",
      featured: true
    },
    {
      title: "Fleet Management System",
      description: "GUI app using Tkinter and MySQL for tracking 120+ trucks and 40+ employees. Secure login, CRUD system, and admin dashboards.",
      techStack: ["Python", "Tkinter", "MySQL"],
      category: "Backend",
      image: fleetManagementImage,
      demoLink: "/DemoFleetManagement.mp4",
      githubLink: "https://github.com/Palak0230/FleetManagement.git",
      featured: true
    }
  ];

  const filters = ["All", "ML Projects", "Backend"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="text-muted-foreground">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in machine learning, 
            backend development, and full-stack applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="px-6 py-2 transition-all duration-300"
            >
              <Filter size={16} className="mr-2" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group card-gradient rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demoLink}
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted/20 text-muted-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demoLink}>
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubLink}>
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="px-8 py-3"
            asChild
          >
            <a href="https://github.com/Palak0230" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;