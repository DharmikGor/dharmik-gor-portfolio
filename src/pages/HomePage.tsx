import FeaturedBuilds from '../components/FeaturedBuilds';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function HomePage() {
  return (
    <PageShell title="Dharmik Gor | Senior Shopify & WordPress Developer"
      description="Freelance Shopify, Shopify Plus & WordPress developer with 5+ years of experience. Custom themes, B2B, integrations and migrations for brands and agencies."
      path="/"
      flush>
      <Hero />
      <Highlights />
      <FeaturedBuilds />
      <Testimonials />
      <CtaBand />
    </PageShell>
  );
}
