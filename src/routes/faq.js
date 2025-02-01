import { Router } from "express";
import {
  getQuestion,
  getOneFAQ,
  createFAQ,
  updateFAQ,
  deleteFAQ,
} from "../controllers/question..js";

const router = Router();

router.get("/", getQuestion);
router.get("/:id", getOneFAQ);
router.post("/create", createFAQ);
router.put("/update", updateFAQ);
router.delete("/delete", deleteFAQ);

export default router;
