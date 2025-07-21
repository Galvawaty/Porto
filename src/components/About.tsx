export const About = () => {
  const skills = {
    frontend: [
      { name: 'React', category: 'frontend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'HTML/CSS', category: 'frontend' },
    ],
    backend: [
      { name: 'Node.js', category: 'backend' },
      { name: 'Python', category: 'backend' },
      { name: 'Java', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'MySQL', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'Firebase', category: 'backend' },
    ],
    tools: [
      { name: 'Git', category: 'tools' },
      { name: 'Docker', category: 'tools' },
      { name: 'RapidMiner', category: 'tools' },
      { name: 'Figma', category: 'tools' },
      { name: 'Architecture Enterprise', category: 'tools' },
      { name: 'StarUML', category: 'tools' },
    ],
  };

  const getSkillTagClass = (category: string) => {
    const baseClass = 'skill-tag';
    switch (category) {
      case 'frontend':
        return `${baseClass} skill-tag-frontend`;
      case 'backend':
        return `${baseClass} skill-tag-backend`;
      case 'tools':
        return `${baseClass} skill-tag-tools`;
      default:
        return `${baseClass} skill-tag-default`;
    }
  };

  return (
    <section id="about" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Pengalaman & Keahlian</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Selama perkuliahan di Politeknik Negeri Jakarta, saya telah mengembangkan berbagai 
              keterampilan dalam bidang teknologi informasi. Pengalaman di CCIT-FTUI memberikan 
              saya foundation yang kuat dalam computer science dan software engineering.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sebagai System Analyst, saya memiliki pengalaman berharga dalam proyek Sistem SPDLN 
              (Sistem Pengajuan Dinas Luar Negeri), di mana saya bertanggung jawab atas analisis kebutuhan, 
              perancangan arsitektur sistem, dan koordinasi tim. Saya mengidentifikasi kebutuhan pengguna 
              melalui wawancara, merancang antarmuka web responsif menggunakan Figma, dan arsitektur backend 
              dengan Architecture Enterprise menggunakan StarUML untuk memastikan skalabilitas dan keamanan.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill.name} className={getSkillTagClass(skill.category)}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Backend Development</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill.name} className={getSkillTagClass(skill.category)}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Tools & Others</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill.name} className={getSkillTagClass(skill.category)}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="portfolio-card p-8 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Pendidikan</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-foreground">Politeknik Negeri Jakarta</h4>
                <p className="text-primary mb-2">Teknik Informatika</p>
                <p className="text-muted-foreground text-sm">2020 - 2024</p>
              </div>
              
              <div className="border-l-4 border-muted pl-6">
                <h4 className="font-semibold text-foreground">CCIT-FTUI</h4>
                <p className="text-muted-foreground mb-2">Computer Science Foundation</p>
                <p className="text-muted-foreground text-sm">2019 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};