import api from "../lib/api";

import type {
  Project,
  ProjectsResponse,
} from "../types/project";

export const getProjects =
  async (): Promise<Project[]> => {
    const response =
      await api.get("/projects");

    return response.data.data;
  };

export const getProjectBySlug =
  async (
    slug: string
  ): Promise<Project> => {
    const response =
      await api.get(
        `/projects/${slug}`
      );

    return response.data.data;
  };
export const getFeaturedProjects =
  async (): Promise<Project[]> => {
    const response =
      await api.get<ProjectsResponse>(
        "/projects/featured"
      );

    return response.data.data;
  };

