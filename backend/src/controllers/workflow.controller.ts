import { Request, Response } from "express";
import Workflow from "../models/workflow.model";

export const saveWorkflow = async (req: Request, res: Response) => {
  const { nodes, edges } = req.body;
  const workflow = await Workflow.create({ nodes, edges });
  res.json(workflow);
};

export const getAllWorkflows = async (_: Request, res: Response) => {
  const workflows = await Workflow.find().sort({ createdAt: -1 });
  res.json(workflows);
};

export const getWorkflowById = async (req: Request, res: Response) => {
  const workflow = await Workflow.findById(req.params.id);
  res.json(workflow);
};
