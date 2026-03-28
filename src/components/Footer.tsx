import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Jane Jaqué" className="w-16 h-16 mb-6 opacity-80" loading="lazy" />
          <h3 className="font-heading text-2xl text-primary-foreground mb-6">
            Jane Jaqué
          </h3>

          <div className="flex flex-col md:flex-row gap-6 mb-8 text-sm font-body text-primary-foreground/60">
            <a href="mailto:mail@janejaque.dk" className="hover:text-gold-light transition-colors">
              mail@janejaque.dk
            </a>
            <span className="hidden md:inline text-primary-foreground/20">|</span>
            <span>København Sv. eller online</span>
          </div>

          <div className="flex gap-6 mb-10">
            <a
              href="https://www.tiktok.com/@janej.clairvoyant"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-primary-foreground/50 hover:text-gold-light transition-colors uppercase tracking-wider"
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com/jane_jaque"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-primary-foreground/50 hover:text-gold-light transition-colors uppercase tracking-wider"
            >
              Instagram
            </a>
          </div>

          <div className="w-full max-w-xs h-px bg-primary-foreground/10 mb-8" />

          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Jane Jaqué. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
