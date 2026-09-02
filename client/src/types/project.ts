export interface Testimonial {
  quote: string;
  author: string;
  role: string;

  /** Optional screenshot of the work the feedback is about. */
  image?: string;
  imageCaption?: string;
}

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

  testimonials?: Testimonial[];

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