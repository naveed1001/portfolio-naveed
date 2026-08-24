import { Request, Response } from "express";

import Project from "../models/Project.js";

export const getProjects = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await Project.find()
      .sort({
        order: 1,
        createdAt: -1,
      })
      .lean();

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error("Get projects error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

export const getFeaturedProjects = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await Project.find({
      featured: true,
    })
      .sort({
        order: 1,
      })
      .lean();

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error(
      "Get featured projects error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch featured projects",
    });
  }
};

export const getProjectBySlug =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const { slug } = req.params;

      const project =
        await Project.findOne({
          slug,
        });

      if (!project) {
        return res.status(404).json({
          success: false,
          message:
            "Project not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error) {
      console.error(
        "Get project error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Failed to fetch project",
      });
    }
  };
  
export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      title,
      slug,
      description,
      technologies,
      category,
      githubUrl,
      liveUrl,
      featured,
      year,
      features,
      image,
      order,
    } = req.body;

    const existingProject = await Project.findOne({
      $or: [
        {
          slug,
        },
        {
          title,
        },
      ],
    });

    if (existingProject) {
      res.status(409).json({
        success: false,
        message:
          "A project with this title or slug already exists",
      });

      return;
    }

    const project = await Project.create({
      title,
      slug,
      description,
      technologies,
      category,
      githubUrl,
      liveUrl,
      featured,
      year,
      features,
      image,
      order,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Create project error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};

export const updateProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const project = await Project.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      res.status(404).json({
        success: false,
        message: "Project not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    console.error("Update project error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update project",
    });
  }
};

export const deleteProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      res.status(404).json({
        success: false,
        message: "Project not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Delete project error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};