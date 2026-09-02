import { projects } from "../data/projects";

import type {
  Project,
} from "../types/project";

const byOrderAscending = (
  first: Project,
  second: Project
): number =>
  first.order - second.order;

export const getProjects =
  async (): Promise<Project[]> => {
    return [...projects].sort(
      byOrderAscending
    );
  };

export const getProjectBySlug =
  async (
    slug: string
  ): Promise<Project> => {
    const project =
      projects.find(
        (item) =>
          item.slug === slug
      );

    if (!project) {
      throw new Error(
        `Project not found for slug: ${slug}`
      );
    }

    return project;
  };

export const getFeaturedProjects =
  async (): Promise<Project[]> => {
    return projects
      .filter(
        (project) =>
          project.featured
      )
      .sort(byOrderAscending);
  };
