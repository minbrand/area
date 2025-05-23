
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesData, Lesson } from '@/data/coursesData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowLeft, 
  BookOpen,
  PlayCircle
} from 'lucide-react';
import Header from '@/components/Header';

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courseId ? coursesData[courseId] : null;
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(
    course ? course.lessons[0] : null
  );

  if (!course) {
    return (
      <div className="min-h-screen bg-netflix-bg">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Curso não encontrado</h1>
          <Button onClick={() => navigate('/')} className="bg-netflix-accent hover:bg-netflix-accent/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = (completedLessons / course.lessons.length) * 100;

  const handleLessonClick = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  const toggleLessonComplete = (lessonId: string) => {
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (lesson) {
      lesson.completed = !lesson.completed;
      // Force re-render
      setCurrentLesson({ ...lesson });
    }
  };

  return (
    <div className="min-h-screen bg-netflix-bg">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="mb-6 border-netflix-primary/30 text-white hover:bg-netflix-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos cursos
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Video Player */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-black/60 border-netflix-primary/20 overflow-hidden">
              <div className="aspect-video bg-black">
                {currentLesson ? (
                  <iframe
                    src={currentLesson.videoUrl}
                    title={currentLesson.title}
                    className="w-full h-full"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle className="w-16 h-16 text-netflix-primary mx-auto mb-4" />
                      <p className="text-white text-lg">Selecione uma aula para começar</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Current Lesson Info */}
            {currentLesson && (
              <Card className="bg-black/60 border-netflix-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {currentLesson.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {currentLesson.duration}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => toggleLessonComplete(currentLesson.id)}
                      variant={currentLesson.completed ? "default" : "outline"}
                      size="sm"
                      className={currentLesson.completed 
                        ? "bg-netflix-accent hover:bg-netflix-accent/80 text-netflix-bg" 
                        : "border-netflix-primary/30 text-white hover:bg-netflix-primary/10"
                      }
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {currentLesson.completed ? 'Concluída' : 'Marcar como concluída'}
                    </Button>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {currentLesson.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar with Course Info and Lessons */}
          <div className="space-y-6">
            {/* Course Info */}
            <Card className="bg-black/60 border-netflix-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-netflix-primary" />
                  <span className="bg-netflix-primary text-netflix-bg px-2 py-1 rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                </div>
                
                <h1 className="text-xl font-bold text-white mb-2">{course.title}</h1>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Instrutor: {course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} alunos</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progresso</span>
                    <span>{completedLessons}/{course.lessons.length} aulas</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round(progressPercentage)}% concluído
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lessons List */}
            <Card className="bg-black/60 border-netflix-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Playlist do Curso
                </h3>
                
                <div className="space-y-2">
                  {course.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                        currentLesson?.id === lesson.id
                          ? 'border-netflix-primary bg-netflix-primary/10'
                          : 'border-gray-700 hover:border-netflix-primary/50 hover:bg-gray-800/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                          lesson.completed 
                            ? 'bg-netflix-accent text-netflix-bg'
                            : currentLesson?.id === lesson.id
                            ? 'bg-netflix-primary text-netflix-bg'
                            : 'bg-gray-700 text-gray-300'
                        }`}>
                          {lesson.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Play className="w-3 h-3" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${
                            currentLesson?.id === lesson.id ? 'text-netflix-primary' : 'text-white'
                          }`}>
                            {index + 1}. {lesson.title}
                          </p>
                          <p className="text-xs text-gray-400">{lesson.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
