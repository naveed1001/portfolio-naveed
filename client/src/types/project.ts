export interface Project {
  _id: string;

  title: string;

  slug: string;

  description: string;

  overview: string;

  technologies: string[];

  category: string;

  githubUrl?: string;

  liveUrl?: string;

  featured: boolean;

  year: number;

  features: string[];

  image: string;

  gallery: string[];

  challenges: string[];

  solutions: string[];

  architecture?: string;

  order: number;

  createdAt?: string;

  updatedAt?: string;
}

export interface ProjectsResponse {
  success: boolean;

  count: number;

  data: Project[];
}

export interface ProjectResponse {
  success: boolean;

  data: Project;
}