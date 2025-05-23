
import React from 'react';
import Header from '@/components/Header';
import CourseCarousel from '@/components/CourseCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-netflix-bg">
      <Header />
      
      <main className="container mx-auto py-12">
        <CourseCarousel />
      </main>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-netflix-primary/5 to-transparent rounded-full transform rotate-12"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-netflix-secondary/5 to-transparent rounded-full transform -rotate-12"></div>
      </div>
    </div>
  );
};

export default Index;
