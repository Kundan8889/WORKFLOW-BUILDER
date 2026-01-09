Workflow Builder Application
Project Overview

This project is a simple workflow builder where users can create workflows using Input and Output nodes.
Users can drag nodes onto a canvas, connect them, enter data, and save/load workflows using a backend API.

The goal of this project is to demonstrate:

Drag-and-drop UI using React Flow

Basic node-based data flow

Saving and loading workflows from a database

Tech Stack
Frontend

React

TypeScript

React Flow

Vite

Backend

Node.js

Express

TypeScript

MongoDB (Mongoose)
Features

Drag Input and Output nodes from sidebar

Connect Input → Output nodes

Enter text in Input node and see it reflected in Output node

Validate workflow before saving

Save workflows to database

Load previously saved workflows

Clean and simple UI

project-root/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.ts
│   │   └── index.ts
│   └── package.json
└── README.md

Prerequisites

Node.js (v18 or above recommended)

MongoDB (local installation)

npm

How to Run the Project
1. Start MongoDB

Make sure MongoDB is running locally:

mongodb://127.0.0.1:27017

2. Backend Setup

cd backend
npm install
npm run dev

Expected output:
MongoDB connected
Server running on port 3000

3. Frontend Setup

cd frontend
npm install
npm run dev

Open browser at:
http://localhost:5173

API Endpoints:

Save Workflow
POST /api/workflows

Request body:
{
  "nodes": [],
  "edges": []
}

Design Decisions

React Flow was used for handling node-based UI and interactions

Workflow data is stored as nodes and edges directly for simplicity

MongoDB was chosen for flexible schema and fast setup

Validation is handled on the frontend before saving workflows

Known Limitations

Only Input → Output workflows are supported

No authentication implemented

Only latest workflow is loaded by default

No versioning or undo/redo functionality

Future Improvements

Multiple workflow selection

Workflow versioning

Undo / Redo support

Better error handling

Dark mode UI

Conclusion

This project provides a basic but complete implementation of a workflow builder with frontend and backend integration.
It focuses on clarity, simplicity, and meeting the functional requirements of the assignment.
