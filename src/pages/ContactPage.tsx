import Contact from '../components/Contact';
import PageShell from './PageShell';

export default function ContactPage() {
  return (
    <PageShell title="Contact | Hire a Shopify & WordPress Developer — Dharmik Gor"
      description="Available for freelance, contract and white-label agency work. Tell me about your Shopify or WordPress project and I'll get back to you."
      path="/contact">
      <Contact />
    </PageShell>
  );
}
