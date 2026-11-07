import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function WorkPage() {
  return (
    <PageShell title="Work & Case Studies | Dharmik Gor"
      description="Shopify, Shopify Plus and WordPress case studies — storefront rebuilds, B2B and ERP integrations, migrations and subscription stores with measurable results."
      path="/work">
      <Projects />
      <Testimonials />
      <CtaBand />
    </PageShell>
  );
}
