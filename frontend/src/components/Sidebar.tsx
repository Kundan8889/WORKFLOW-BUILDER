import React from "react";

const Sidebar = () => {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside
      style={{
        width: 180,
        padding: 10,
        borderRight: "1px solid #ddd",
        background: "#fafafa",
      }}
    >
      <div
        onDragStart={(e) => onDragStart(e, "inputNode")}
        draggable
        style={{ marginBottom: 10, cursor: "grab" }}
      >
        ➕ Input Node
      </div>

      <div
        onDragStart={(e) => onDragStart(e, "outputNode")}
        draggable
        style={{ cursor: "grab" }}
      >
        ➕ Output Node
      </div>
    </aside>
  );
};

export default Sidebar;
