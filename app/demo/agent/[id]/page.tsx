import { notFound } from 'next/navigation';
import { getAgentDetailById } from '@/lib/agents';
import SpatialProductShowcase from '@/components/ui/spatial-product-showcase';

interface PageProps {
  params: { id: string };
}

export default function AgentPage({ params }: PageProps) {
  const agent = getAgentDetailById(params.id);
  if (!agent) notFound();
  return <SpatialProductShowcase data={agent} />;
}
