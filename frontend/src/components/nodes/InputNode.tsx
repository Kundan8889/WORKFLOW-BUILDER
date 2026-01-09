import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";

export default function InputNode({ data }: NodeProps<any>) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid #3b82f6",
        borderRadius: 6,
        background: "#eff6ff",
        minWidth: 150,
      }}
    >
      <strong>{data.name || "Input Node"}</strong>
     <input
  value={data.value || ""}
  onChange={(e) => data.onChange?.(e.target.value)}
  onMouseDown={(e) => e.stopPropagation()}
  onKeyDown={(e) => e.stopPropagation()}
  placeholder="Enter text"
/>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
