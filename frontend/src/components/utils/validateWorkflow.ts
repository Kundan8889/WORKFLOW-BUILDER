import type { Edge, Node } from 'reactflow';

export function validateWorkflow(
  nodes: Node[],
  edges: Edge[]
): string[] {
  const errors: string[] = [];

const inputNodes = nodes.filter((n) => n.type === 'inputNode');
const outputNodes = nodes.filter((n) => n.type === 'outputNode');

  // STEP 3 — Disconnected nodes check
nodes.forEach((node) => {
  const connected = edges.some(
    (e) => e.source === node.id || e.target === node.id
  );

  if (!connected) {
    errors.push(`Node "${node.data?.name || node.id}" is not connected`);
  }
});

  if (inputNodes.length === 0) {
    errors.push('At least one Input node is required');
  }

  if (outputNodes.length === 0) {
    errors.push('At least one Output node is required');
  }

  return errors;
}