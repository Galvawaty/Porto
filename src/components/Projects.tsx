import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  gdriveLink?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "MusicProject Web",
      description: "Aplikasi web untuk melakukan preview tentang wiki dari music artist",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["HTML", "CSS", "JS", "JAVA"],
      githubLink: "https://github.com/Galvawaty/MUSICPROJECT"
    },
    {
      title: "Mobile ChatApp",
      description: "Aplikasi mobile chat seperti WhatsApp",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      tags: ["Java", "Firebase"],
      githubLink: "https://github.com/Galvawaty/ChatApp-Mobile"
    },
    {
      title: "CarniforU",
      description: "Website Resep yang dibuat untuk seseorang yang ingin melakukan carnivore diet",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["HTML", "CSS", "JS"],
      githubLink: "https://github.com/Galvawaty/CarniforU"
    },
    {
      title: "SPDLN KUI PNJ",
      description: "Hasil dari analisis permintaan client untuk dibuatkan web Surat Pengajuan Dinas Luar Negeri",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      tags: ["StarUML", "Architecture Enterprise", "draw.io"],
      gdriveLink: "https://drive.google.com/drive/folders/1X2jSidStAhGlX4BZ9U6OT58Quwkx9P7n?usp=drive_link"
    }
  ];

  const getTagColor = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (['html', 'css', 'js', 'react', 'javascript'].includes(lowerTag)) {
      return 'skill-tag-frontend';
    } else if (['java', 'firebase', 'node.js', 'python'].includes(lowerTag)) {
      return 'skill-tag-backend';
    } else {
      return 'skill-tag-tools';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="section-divider mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa project yang telah saya kerjakan selama perkuliahan dan pengembangan skill
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 gradient-card relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-sm opacity-90">Click to view details</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`skill-tag ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </Button>
                  )}
                  
                  {project.gdriveLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.gdriveLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </Button>
                  )}
                  
                  {project.liveLink && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};