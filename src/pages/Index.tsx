import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle smooth scrolling to sections
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
      const scrollY = window.scrollY;
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop - 100;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollY >= elementTop && scrollY < elementBottom) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    // Debounce scroll events
    let timeoutId: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16);
    };

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header 
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
      />
      
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
