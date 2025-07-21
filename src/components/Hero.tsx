import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export const Hero = () => {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log('Download CV');
  };

  return (
    <section id="home" className="pt-16 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Hi, I am{' '}
              <span className="text-primary">Muhammad Nathan Sunarto</span>,
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Mahasiswa Teknik Informatika
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Saya kuliah di Politeknik Negeri Jakarta dan sudah lulus dari CCIT-FTUI. 
              Passionate dalam pengembangan web dan analisis sistem dengan fokus pada 
              teknologi modern dan best practices.
            </p>
            <Button 
              onClick={handleDownloadCV}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="lg:w-1/2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 gradient-card rounded-full overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-500 hover:scale-105">
                <img 
                  src="/Profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};