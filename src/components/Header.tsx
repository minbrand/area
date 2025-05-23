
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-black/90 border-b border-netflix-primary/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={handleLogoClick}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-netflix-primary to-netflix-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <BookOpen className="w-6 h-6 text-netflix-bg" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white group-hover:text-netflix-primary transition-colors">
              EduPlatform
            </h1>
            <p className="text-xs text-gray-400">Área de Membros</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <User className="w-4 h-4" />
            <span className="text-sm">cliente513@minbrand.com</span>
          </div>
          
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="border-netflix-primary/30 text-white hover:bg-netflix-primary/10 hover:text-netflix-primary"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
