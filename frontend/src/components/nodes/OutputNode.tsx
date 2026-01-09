import { Handle, Position } from "reactflow";

export default function OutputNode({ data }: any) {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid #555",
        borderRadius: 4,
        background: "#e8f5e9",
      }}
    >
      {data.label}
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
