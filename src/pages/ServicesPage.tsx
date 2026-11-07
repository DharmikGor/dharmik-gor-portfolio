import ComplexCommerce from '../components/ComplexCommerce';
import Process from '../components/Process';
import Services from '../components/Services';
import ShopifyExpertise from '../components/ShopifyExpertise';
import CtaBand from './CtaBand';
import PageShell from './PageShell';

export default function ServicesPage() {
  return (
    <PageShell title="Services | Shopify, Shopify Plus & WordPress Development — Dharmik Gor"
      description="Shopify theme development, Shopify Plus and B2B builds, checkout extensions, custom apps, API/ERP integrations, store migrations and WordPress development."
      path="/services">
      <Services />
      <ShopifyExpertise />
      <ComplexCommerce />
      <Process />
      <CtaBand />
    </PageShell>
  );
}
