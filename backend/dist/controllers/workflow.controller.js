"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkflowById = exports.getAllWorkflows = exports.saveWorkflow = void 0;
const workflow_model_1 = __importDefault(require("../models/workflow.model"));
const saveWorkflow = async (req, res) => {
    const { nodes, edges } = req.body;
    const workflow = await workflow_model_1.default.create({ nodes, edges });
    res.json(workflow);
};
exports.saveWorkflow = saveWorkflow;
const getAllWorkflows = async (_, res) => {
    const workflows = await workflow_model_1.default.find().sort({ createdAt: -1 });
    res.json(workflows);
};
exports.getAllWorkflows = getAllWorkflows;
const getWorkflowById = async (req, res) => {
    const workflow = await workflow_model_1.default.findById(req.params.id);
    res.json(workflow);
};
exports.getWorkflowById = getWorkflowById;
