import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function HomePage() {
  return (
    <PageShell title="Dharmik Gor | Senior Shopify & WordPress Developer" flush>
      <Hero />
      <Highlights />
      <Projects limit={4} />
      <Testimonials />
      <CtaBand />
    </PageShell>
  );
}
