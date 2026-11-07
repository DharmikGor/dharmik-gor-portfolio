import ComplexCommerce from '../components/ComplexCommerce';
import Process from '../components/Process';
import Services from '../components/Services';
import ShopifyExpertise from '../components/ShopifyExpertise';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function ServicesPage() {
  return (
    <PageShell title="Services | Dharmik Gor">
      <Services />
      <ShopifyExpertise />
      <ComplexCommerce />
      <Process />
      <CtaBand />
    </PageShell>
  );
}
