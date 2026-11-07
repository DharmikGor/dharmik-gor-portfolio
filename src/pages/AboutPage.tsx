import About from '../components/About';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function AboutPage() {
  return (
    <PageShell title="About | Dharmik Gor">
      <About />
      <Skills />
      <Certifications />
      <CtaBand />
    </PageShell>
  );
}
