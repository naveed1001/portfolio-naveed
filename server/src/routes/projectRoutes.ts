import { Router } from "express";

import {
  createProject,
  deleteProject,
  getFeaturedProjects,
  getProjectBySlug,
  getProjects,
  updateProject,
} from "../controllers/projectController.js";

import upload from "../middleware/upload";

import {
  uploadProjectImages,
} from "../controllers/projectImageController";

const router = Router();

router.get("/", getProjects);

router.get("/featured", getFeaturedProjects);

router.get("/:slug", getProjectBySlug);

router.post("/", createProject);

router.post(
  "/:id/images",
  upload.array("images", 10),
  uploadProjectImages
);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;