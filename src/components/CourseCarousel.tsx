
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  thumbnail: string;
  category: string;
}

const courses: Course[] = [
  {
    id: 'javascript-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Aprenda os fundamentos do JavaScript moderno com exemplos práticos.',
    duration: '8h 30min',
    students: 2847,
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop',
    category: 'Programação'
  },
  {
    id: 'react-masterclass',
    title: 'React Masterclass',
    description: 'Domine o React.js e crie aplicações modernas e escaláveis.',
    duration: '12h 15min',
    students: 1923,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    category: 'Frontend'
  },
  {
    id: 'node-backend',
    title: 'Node.js Backend',
    description: 'Construa APIs robustas e sistemas backend com Node.js.',
    duration: '10h 45min',
    students: 1456,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    category: 'Backend'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Crie interfaces incríveis e experiências de usuário memoráveis.',
    duration: '6h 20min',
    students: 3241,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop',
    category: 'Design'
  },
  {
    id: 'python-data-science',
    title: 'Python para Data Science',
    description: 'Análise de dados e machine learning com Python.',
    duration: '15h 30min',
    students: 987,
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop',
    category: 'Data Science'
  },
  {
    id: 'digital-marketing',
    title: 'Marketing Digital',
    description: 'Estratégias modernas de marketing digital e growth hacking.',
    duration: '9h 15min',
    students: 2156,
    thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=225&fit=crop',
    category: 'Marketing'
  }
];

const CourseCarousel = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Seus <span className="text-netflix-primary">Cursos</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore nossa biblioteca completa de cursos e desenvolva suas habilidades
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {courses.map((course, index) => (
          <Card
            key={course.id}
            className="bg-black/60 border-netflix-primary/20 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-black/80 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleCourseClick(course.id)}
          >
            <div className="relative overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-netflix-primary text-netflix-bg px-2 py-1 rounded-full text-xs font-semibold">
                  {course.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <Button
                  size="sm"
                  className="bg-netflix-accent/90 hover:bg-netflix-accent text-netflix-bg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Assistir
                </Button>
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-netflix-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students.toLocaleString()} alunos
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCarousel;
