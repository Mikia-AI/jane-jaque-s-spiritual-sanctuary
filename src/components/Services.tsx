const services = [
  {
    title: "Clairvoyantvejledning",
    desc: "I København eller online. Jeg stiller ind på dig og giver dig budskaber og redskaber til et bedre liv.",
    duration: "45 min",
    price: "499 kr.",
    icon: "✦",
  },
  {
    title: "Forældre-barn relation",
    desc: "Jeg stiller clairvoyant ind på din relation til dit barn med henblik på, at give dig redskaber til at komme videre i livet.",
    duration: "45 min",
    price: "499 kr.",
    icon: "❋",
  },
  {
    title: "Afdødekontakt",
    desc: "Som clairvoyant stiller jeg ind på den afdøde, du ønsker at komme i kontakt med. Jeg skaber et trygt og respektfuldt rum for mødet og dialog. Du er meget velkommen til at medbringe dine egne spørgsmål. Du bedes medbringe en genstand og et foto (i en kuvert), som jeg må holde for at skabe kontakt til vedkommende. Jeg videreformidler afdødes budskab til dig.",
    duration: "",
    price: "499 kr.",
    icon: "☽",
  },
  {
    title: "Chakra-clairvoyance",
    desc: "Clairvoyance med afsæt i dine chakraer for dybere selvindsigt.",
    duration: "45 min",
    price: "499 kr.",
    icon: "◎",
  },
  {
    title: "Karmasitting",
    desc: "Jeg kigger på dine tidligere liv, der påvirker dine nuværende udfordringer.",
    duration: "45 min",
    price: "499 kr.",
    icon: "∞",
  },
];

const Services = () => {
  return (
    <section id="konsultationer" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Jeg tilbyder
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Konsultationer
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-3xl text-accent mb-4 block">{s.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {s.duration ? (
                  <span className="font-body text-xs text-muted-foreground tracking-wide">
                    {s.duration}
                  </span>
                ) : (
                  <span />
                )}
                <span className="font-heading text-lg font-semibold text-accent">
                  {s.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-2">
            Venindeaften eller foredrag om det spirituelle?
          </p>
          <p className="font-body text-sm text-accent">
            Kontakt mig for pris og planlægning
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
