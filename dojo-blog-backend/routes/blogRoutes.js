import express from "express";
import {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogControllers.js";

import { validate } from "../middleware/validate.js";
import { BlogSchema ,updateBlogSchema } from "../validators/blogValidator.js";
import { idParamSchema } from "../validators/paramValidator.js";

const router = express.Router();
router.get("/", getAllBlogs);

router.get("/:id",validate(idParamSchema,"params") ,getBlog);
router.post("/", validate(BlogSchema),createBlog);
router.put("/:id",validate(idParamSchema),validate(updateBlogSchema), updateBlog);
router.delete("/:id", deleteBlog);

export default router;
