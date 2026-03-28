import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Om mig", href: "#om-mig" },
  { label: "Konsultationer", href: "#konsultationer" },
  { label: "Udtalelser", href: "#udtalelser" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Jane Jaqué logo" className="w-10 h-10" />
          <span className="font-heading text-xl font-semibold text-primary tracking-wide">
            Jane Jaqué
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              className="text-sm font-body font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors duration-300"
            >
              Book en tid
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body font-medium text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="inline-block text-sm font-body font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg"
              >
                Book en tid
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
