import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Mari Berkolaborasi!</h3>
          <p className="text-white/80 mb-6">
            Saya terbuka untuk kesempatan kerja sama, magang, atau project freelance. 
            Jangan ragu untuk menghubungi saya!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a 
            href="mailto:nathanzzz1312@gmail.com" 
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group"
          >
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <span>nathanzzz1312@gmail.com</span>
          </a>
          
          <a 
            href="tel:+6281290849176" 
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group"
          >
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <span>+62 8129-0849-7176</span>
          </a>
        </div>
        
        <div className="text-center text-white/60 text-sm border-t border-white/20 pt-8">
          <p>&copy; 2025 Muhammad Nathan Sunarto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};