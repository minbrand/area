
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  completed: boolean;
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  thumbnail: string;
  category: string;
  lessons: Lesson[];
}

export const coursesData: Record<string, CourseData> = {
  'javascript-fundamentals': {
    id: 'javascript-fundamentals',
    title: 'Páginas de vendas',
    description: 'Aprenda os fundamentos do JavaScript moderno com exemplos práticos e projetos reais.',
    instructor: 'Jota',
    duration: '1h 56min',
    students: 847,
    thumbnail: 'https://minbrand.com/img/pg-vendas.webp',
    category: 'Marketing digital',
    lessons: [
      {
        id: '1',
        title: 'Criando página com Bee-free',
        duration: '56:21',
        videoUrl: 'https://www.youtube.com/embed/479rtxoUNDQ',
        description: 'Criando do zero uma página de vendas',
        completed: false
      },
      {
        id: '2',
        title: 'Variáveis e Tipos de Dados',
        duration: '22:45',
        videoUrl: 'https://www.youtube.com/embed/JaMCxVWtW58',
        description: 'Aprenda sobre variáveis, tipos de dados primitivos e como trabalhar com eles.',
        completed: false
      },
      {
        id: '3',
        title: 'Funções e Escopo',
        duration: '28:15',
        videoUrl: 'https://www.youtube.com/embed/N8ap4k_1QEQ',
        description: 'Entenda como criar e usar funções, além dos conceitos de escopo em JavaScript.',
        completed: false
      },
      {
        id: '4',
        title: 'Arrays e Objetos',
        duration: '35:20',
        videoUrl: 'https://www.youtube.com/embed/7W4pQQ20nJg',
        description: 'Trabalhe com estruturas de dados complexas: arrays e objetos.',
        completed: false
      },
      {
        id: '5',
        title: 'DOM Manipulation',
        duration: '42:10',
        videoUrl: 'https://www.youtube.com/embed/5fb2aPlgoys',
        description: 'Aprenda a manipular o DOM para criar interfaces interativas.',
        completed: false
      }
    ]
  },
  'react-masterclass': {
    id: 'react-masterclass',
    title: 'React Masterclass',
    description: 'Domine o React.js e crie aplicações modernas e escaláveis.',
    instructor: 'Maria Santos',
    duration: '12h 15min',
    students: 1923,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    category: 'Frontend',
    lessons: [
      {
        id: '1',
        title: 'Introdução ao React',
        duration: '20:30',
        videoUrl: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
        description: 'Entenda os conceitos fundamentais do React e sua filosofia.',
        completed: false
      },
      {
        id: '2',
        title: 'Componentes e JSX',
        duration: '25:45',
        videoUrl: 'https://www.youtube.com/embed/DLX62G4lc44',
        description: 'Aprenda a criar componentes reutilizáveis com JSX.',
        completed: false
      },
      {
        id: '3',
        title: 'Props e State',
        duration: '30:15',
        videoUrl: 'https://www.youtube.com/embed/IYvD9oBCuJI',
        description: 'Gerencie dados em componentes com props e state.',
        completed: false
      },
      {
        id: '4',
        title: 'Hooks Essenciais',
        duration: '38:20',
        videoUrl: 'https://www.youtube.com/embed/TNhaISOUy6Q',
        description: 'Domine os hooks fundamentais: useState, useEffect e mais.',
        completed: false
      }
    ]
  },
  'node-backend': {
    id: 'node-backend',
    title: 'Node.js Backend',
    description: 'Construa APIs robustas e sistemas backend com Node.js.',
    instructor: 'Carlos Oliveira',
    duration: '10h 45min',
    students: 1456,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    category: 'Backend',
    lessons: [
      {
        id: '1',
        title: 'Introdução ao Node.js',
        duration: '18:30',
        videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
        description: 'Fundamentos do Node.js e configuração do ambiente.',
        completed: false
      },
      {
        id: '2',
        title: 'Express.js Básico',
        duration: '32:45',
        videoUrl: 'https://www.youtube.com/embed/L72fhGm1tfE',
        description: 'Criando seu primeiro servidor web com Express.',
        completed: false
      },
      {
        id: '3',
        title: 'APIs RESTful',
        duration: '28:15',
        videoUrl: 'https://www.youtube.com/embed/pKd0Rpw7O48',
        description: 'Desenvolva APIs RESTful profissionais.',
        completed: false
      }
    ]
  },
  'ui-ux-design': {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Crie interfaces incríveis e experiências de usuário memoráveis.',
    instructor: 'Ana Costa',
    duration: '6h 20min',
    students: 3241,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop',
    category: 'Design',
    lessons: [
      {
        id: '1',
        title: 'Princípios de Design',
        duration: '25:30',
        videoUrl: 'https://www.youtube.com/embed/a5KYlHNKQB8',
        description: 'Fundamentos do design de interfaces.',
        completed: false
      },
      {
        id: '2',
        title: 'Pesquisa de Usuário',
        duration: '22:45',
        videoUrl: 'https://www.youtube.com/embed/Ovj4hFxko7c',
        description: 'Como entender as necessidades dos usuários.',
        completed: false
      }
    ]
  },
  'python-data-science': {
    id: 'python-data-science',
    title: 'Python para Data Science',
    description: 'Análise de dados e machine learning com Python.',
    instructor: 'Dr. Pedro Lima',
    duration: '15h 30min',
    students: 987,
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop',
    category: 'Data Science',
    lessons: [
      {
        id: '1',
        title: 'Python para Análise de Dados',
        duration: '35:30',
        videoUrl: 'https://www.youtube.com/embed/r-uOLxNrNk8',
        description: 'Introdução ao Python para ciência de dados.',
        completed: false
      },
      {
        id: '2',
        title: 'Pandas e NumPy',
        duration: '45:20',
        videoUrl: 'https://www.youtube.com/embed/vmEHCJofslg',
        description: 'Manipulação de dados com as principais bibliotecas.',
        completed: false
      }
    ]
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Marketing Digital',
    description: 'Estratégias modernas de marketing digital e growth hacking.',
    instructor: 'Laura Ferreira',
    duration: '9h 15min',
    students: 2156,
    thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=225&fit=crop',
    category: 'Marketing',
    lessons: [
      {
        id: '1',
        title: 'Fundamentos do Marketing Digital',
        duration: '30:30',
        videoUrl: 'https://www.youtube.com/embed/NmC7rOEZr5g',
        description: 'Base essencial do marketing digital moderno.',
        completed: false
      },
      {
        id: '2',
        title: 'SEO e SEM',
        duration: '28:45',
        videoUrl: 'https://www.youtube.com/embed/xsVTqzratPs',
        description: 'Otimização para mecanismos de busca.',
        completed: false
      }
    ]
  }
};
