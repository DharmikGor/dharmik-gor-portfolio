import Blog from '../components/Blog';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function InsightsPage() {
  return (
    <PageShell title="Insights | Dharmik Gor">
      <Blog />
      <CtaBand />
    </PageShell>
  );
}
