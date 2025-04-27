export interface Topic {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    category: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    resources?: {
      title: string;
      url: string;
    }[];
  }
  
  export interface Category {
    id: string;
    title: string;
    description: string;
    icon: string;
  }