
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-netflix-bg flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-netflix-primary animate-pulse-slow">404</h1>
          <h2 className="text-2xl font-semibold text-white">Página não encontrada</h2>
          <p className="text-gray-400">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-netflix-primary/30 text-white hover:bg-netflix-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            className="bg-netflix-accent hover:bg-netflix-accent/80 text-netflix-bg"
          >
            <Home className="w-4 h-4 mr-2" />
            Ir para o início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
