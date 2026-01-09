"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workflow_controller_1 = require("../controllers/workflow.controller");
const router = (0, express_1.Router)();
router.post("/", workflow_controller_1.saveWorkflow);
router.get("/", workflow_controller_1.getAllWorkflows);
router.get("/:id", workflow_controller_1.getWorkflowById);
exports.default = router;
