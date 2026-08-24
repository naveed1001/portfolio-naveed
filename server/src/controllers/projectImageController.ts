import {
  Request,
  Response,
} from "express";

import Project from "../models/Project";

import {
  uploadToCloudinary,
} from "../utils/uploadToCloudinary";

export const uploadProjectImages =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const { id } =
        req.params;

      const project =
        await Project.findById(id);

      if (!project) {
        return res.status(404).json({
          success: false,
          message:
            "Project not found",
        });
      }

      const files =
        req.files as Express.Multer.File[];

      if (
        !files ||
        files.length === 0
      ) {
        return res.status(400).json({
          success: false,
          message:
            "No images uploaded",
        });
      }

      const uploadedImages =
        await Promise.all(
          files.map(
            async (file) => {
              const result =
                await uploadToCloudinary(
                  file.buffer,
                  `portfolio/projects/${project.slug}`
                );

              return result.secure_url;
            }
          )
        );

      project.gallery.push(
        ...uploadedImages
      );

      if (!project.image) {
        project.image =
          uploadedImages[0];
      }

      await project.save();

      return res.status(200).json({
        success: true,

        message:
          "Project images uploaded successfully",

        data: {
          coverImage:
            project.image,

          gallery:
            project.gallery,
        },
      });
    } catch (error) {
      console.error(
        "Project image upload error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Failed to upload project images",
      });
    }
  };