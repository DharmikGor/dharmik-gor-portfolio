// Not routed yet: re-add '/insights' to App.tsx and navigation once real articles are published.
import Blog from '../components/Blog';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function InsightsPage() {
  return (
    <PageShell title="Insights | Dharmik Gor"
      description="Notes on Shopify and e-commerce development."
      path="/insights">
      <Blog />
      <CtaBand />
    </PageShell>
  );
}
