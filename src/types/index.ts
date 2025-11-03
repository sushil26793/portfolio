export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TechStackItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'blockchain';
  proficiency: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  availability: string;
  yearsOfExperience: number;
  avatar: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode?: string;
  twitter?: string;
}
