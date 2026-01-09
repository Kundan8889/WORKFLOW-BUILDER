import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
  ReactFlowProvider,
} from "reactflow";
import { useCallback } from "react";
import type { Connection, Edge } from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "./components/NodeTypes";
import Sidebar from "./components/Sidebar";

let id = 0;
const getId = () => `node_${id++}`;

function FlowApp() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
const API_URL = "http://localhost:3000/api/workflows";

const handleSave = async () => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nodes, edges }),
  });

  if (!res.ok) {
    alert("Save failed");
    return;
  }

  alert("Workflow saved ✅");
};

const handleLoad = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  if (!data.length) {
    alert("No workflows found");
    return;
  }

  const latest = data[data.length - 1];
  setNodes(latest.nodes);
  setEdges(latest.edges);

  alert("Workflow loaded ✅");
};


  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds: Edge[]) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

const onDrop = useCallback(
  (event: React.DragEvent) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const position = {
      x: event.clientX - 200,
      y: event.clientY - 50,
    };

    const id = getId();

    const newNode =
      type === "inputNode"
        ? {
            id,
            type: "inputNode",
            position,
            data: {
              name: "Input",
              value: "",
              onChange: (val: string) =>
                handleInputChange(id, val),
            },
          }
        : {
            id,
            type: "outputNode",
            position,
            data: {
              name: "Output",
              receivedValue: "",
            },
          };

    setNodes((nds: any[]) => nds.concat(newNode));
  },
  [setNodes]
);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
         <button onClick={handleSave}>Save</button>
         <button onClick={handleLoad}>Load</button>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowApp />
    </ReactFlowProvider>
  );
}
