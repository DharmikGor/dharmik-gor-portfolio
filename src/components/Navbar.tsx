import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { navigation, profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import Logo from './Logo';

const sectionIds = navigation.map((item) => item.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'
      }`}
    >
      <div className="h-[2px] bg-stone-200/60">
        <motion.div
          className="h-full origin-left bg-accent-500"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </div>

      <nav className="container-content flex items-center justify-between py-5" aria-label="Primary">
        <a
          href="#top"
          onClick={handleNavClick('#top')}
          className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-ink"
        >
          <Logo />
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-stone-500 hover:text-ink'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-500"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#contact" onClick={handleNavClick('#contact')} className="hidden lg:inline-flex btn-primary">
          Let's Talk
        </a>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-stone-300"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-[1.5px] w-5 bg-ink transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-paper border-b border-stone-200"
          >
            <ul className="container-content flex flex-col gap-1 py-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className="block py-3 text-lg font-display font-medium text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href="#contact" onClick={handleNavClick('#contact')} className="btn-primary w-full">
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
