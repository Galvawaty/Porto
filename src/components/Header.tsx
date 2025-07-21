import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ activeSection, onSectionClick, isDark, onThemeToggle }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-foreground">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-button ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="ml-4"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};