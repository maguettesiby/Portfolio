import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: 'Web' | 'Design' | 'Vidéo';
  image: string;
  description: string;
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Dev' | 'Design' | 'Outils';
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description?: string;
}