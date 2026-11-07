import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import { usePathname } from './router';

function renderRoute(path: string) {
  switch (path) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/services':
      return <ServicesPage />;
    case '/work':
      return <WorkPage />;
    case '/contact':
      return <ContactPage />;
  }

  const projectMatch = path.match(/^\/work\/([a-z0-9-]+)$/);
  if (projectMatch) return <ProjectDetailPage key={projectMatch[1]} projectId={projectMatch[1]} />;

  return <NotFoundPage />;
}

export default function App() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" key={pathname}>
        {renderRoute(pathname)}
      </main>

      <Footer />
    </div>
  );
}
