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

## Screenshots

## Screenshots

### Workflow Canvas
Drag-and-drop interface to add Input and Output nodes on the canvas.
Nodes can be positioned freely and connected to define the workflow.


<img width="1899" height="922" alt="Screenshot 2026-01-09 191710" src="https://github.com/user-attachments/assets/b85d8fcd-3034-4213-be53-73bec2e55bea" />

---

### Input to Output Data Flow
Text entered in the Input node is propagated to the connected Output node,
demonstrating unidirectional data flow.

<img width="1875" height="925" alt="Screenshot 2026-01-09 191803" src="https://github.com/user-attachments/assets/8213f65a-43a6-48e6-b991-bffe871e3612" />


---

### Save Workflow
Workflows can be validated and saved using the backend API.
A confirmation message is shown after a successful save.

<img width="1880" height="927" alt="Screenshot 2026-01-09 191819" src="https://github.com/user-attachments/assets/a5c9f47a-4f40-4f17-aac6-d8aef04f44be" />


---

### Load Workflow
Previously saved workflows can be loaded back onto the canvas.
The nodes and connections are restored correctly.

<img width="1886" height="929" alt="Screenshot 2026-01-09 191838" src="https://github.com/user-attachments/assets/baf3741c-95e0-484d-9a33-54d3836d358d" />


