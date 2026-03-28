import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:mail@janejaque.dk?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Navn: ${formData.name}\n\n${formData.message}`)}`;
  };

  return (
    <section id="kontakt" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Kontakt
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
              Book en konsultation
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="font-body text-muted-foreground">
              Jeg vender straks tilbage med en tid.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                Emne
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                Besked
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              />
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="font-body text-sm font-medium bg-primary text-primary-foreground px-10 py-4 rounded-lg hover:bg-navy-light transition-colors duration-300 tracking-wide uppercase"
              >
                Send besked
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
