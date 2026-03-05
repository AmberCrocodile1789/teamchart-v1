'use client';

import { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { PersonNode, PersonData } from '@/components/org-chart/person-node';
import { ProfilePanel } from '@/components/org-chart/profile-panel';

const nodeTypes = {
  person: PersonNode,
};

const initialNodes: Node<PersonData>[] = [
  {
    id: '1',
    type: 'person',
    position: { x: 400, y: 50 },
    data: { name: 'Sarah Johnson', role: 'CEO', team: 'Executive' },
  },
  {
    id: '2',
    type: 'person',
    position: { x: 200, y: 200 },
    data: { name: 'Michael Chen', role: 'CTO', team: 'Engineering' },
  },
  {
    id: '3',
    type: 'person',
    position: { x: 600, y: 200 },
    data: { name: 'Emily Davis', role: 'VP of Sales', team: 'Sales' },
  },
  {
    id: '4',
    type: 'person',
    position: { x: 100, y: 350 },
    data: { name: 'James Wilson', role: 'Engineering Manager', team: 'Engineering' },
  },
  {
    id: '5',
    type: 'person',
    position: { x: 300, y: 350 },
    data: { name: 'Lisa Anderson', role: 'Senior Developer', team: 'Engineering' },
  },
  {
    id: '6',
    type: 'person',
    position: { x: 550, y: 350 },
    data: { name: 'David Martinez', role: 'Sales Manager', team: 'Sales' },
  },
  {
    id: '7',
    type: 'person',
    position: { x: 700, y: 350 },
    data: { name: 'Anna Lee', role: 'Account Executive', team: 'Sales' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: false,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    type: 'smoothstep',
    animated: false,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    type: 'smoothstep',
    animated: false,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
    type: 'smoothstep',
    animated: false,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e3-6',
    source: '3',
    target: '6',
    type: 'smoothstep',
    animated: false,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e3-7',
    source: '3',
    target: '7',
    type: 'smoothstep',
    animated: false,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

export default function OrgChartPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedPerson, setSelectedPerson] = useState<PersonData | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    setSelectedPerson(node.data as PersonData);
  }, []);

  const addNewPerson = () => {
    const newNode: Node<PersonData> = {
      id: `${nodes.length + 1}`,
      type: 'person',
      position: { x: Math.random() * 500 + 100, y: Math.random() * 300 + 100 },
      data: {
        name: 'New Person',
        role: 'Role',
        team: 'Team',
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <Button onClick={addNewPerson} className="gap-2 shadow-md">
          <Plus className="h-4 w-4" />
          Add Person
        </Button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        className="bg-neutral-50"
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>

      <ProfilePanel
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </div>
  );
}
