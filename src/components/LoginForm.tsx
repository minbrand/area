
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, LogIn, BookOpen } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular delay de autenticação
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = login(email, password);
    if (!success) {
      setError('Email ou senha incorretos');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-netflix-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-netflix-bg via-netflix-bg to-netflix-secondary/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf8,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23FFDD79%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M20 20c0 10.49-8.51 19-19 19s-19-8.51-19-19 8.51-19 19-19 19 8.51 19 19zm15.5-15.5c0 10.49-8.51 19-19 19s-19-8.51-19-19 8.51-19 19-19 19 8.51 19 19z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <Card className="w-full max-w-md bg-black/80 border-netflix-primary/20 backdrop-blur-sm relative z-10 animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-netflix-primary to-netflix-secondary rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-netflix-bg" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">Área de Membros</CardTitle>
          <CardDescription className="text-gray-300">
            Acesse sua plataforma educacional
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-netflix-bg/50 border-netflix-primary/30 text-white placeholder:text-gray-400 focus:border-netflix-primary"
                placeholder="Seu email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-netflix-bg/50 border-netflix-primary/30 text-white placeholder:text-gray-400 focus:border-netflix-primary pr-10"
                  placeholder="Sua senha"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-md p-2">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-netflix-accent hover:bg-netflix-accent/80 text-netflix-bg font-semibold py-3 transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-netflix-bg/30 border-t-netflix-bg rounded-full animate-spin"></div>
                  Entrando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Entrar
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
