import { profile, contact, navigation, footer, socialLinks } from '../data/profile';

export default function Footer() {
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-stone-200 bg-charcoal text-stone-300">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#top" onClick={handleNavClick('#top')} className="flex items-center gap-2.5 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink text-sm font-display font-bold">
                {profile.initials}
              </span>
              <span className="font-display font-semibold text-paper">{profile.name}</span>
            </a>
            <p className="text-sm text-stone-400 max-w-xs">{profile.title}</p>
            <p className="mt-4 text-xs tracking-wide text-stone-500">{footer.techLine}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className="text-sm text-stone-400 hover:text-paper transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-stone-400 hover:text-paper transition-colors duration-300"
                >
                  {socialLinks.linkedin.label}
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.email.url}
                  className="text-sm text-stone-400 hover:text-paper transition-colors duration-300"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.whatsapp.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-stone-400 hover:text-paper transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-stone-700/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stone-500">{footer.copyright}</p>
          <p className="text-xs text-stone-500">{contact.location}</p>
        </div>
      </div>
    </footer>
  );
}
