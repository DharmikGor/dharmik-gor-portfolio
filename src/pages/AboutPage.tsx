import About from '../components/About';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function AboutPage() {
  return (
    <PageShell title="About | Dharmik Gor — Shopify & WordPress Developer"
      description="About Dharmik Gor: a remote Shopify, Shopify Plus and WordPress developer from India — skills, certifications and how I work with brands and agencies."
      path="/about">
      <About />
      <Skills />
      <Certifications />
      <CtaBand />
    </PageShell>
  );
}
