import { Router } from "express";
import {
  saveWorkflow,
  getAllWorkflows,
  getWorkflowById
} from "../controllers/workflow.controller";

const router = Router();

router.post("/", saveWorkflow);
router.get("/", getAllWorkflows);
router.get("/:id", getWorkflowById);

export default router;
