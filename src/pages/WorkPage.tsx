import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function WorkPage() {
  return (
    <PageShell title="Work | Dharmik Gor">
      <Projects />
      <Testimonials />
      <CtaBand />
    </PageShell>
  );
}
