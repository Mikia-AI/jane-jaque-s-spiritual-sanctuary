const testimonials = [
  {
    text: "Jane leverede udelukkende specifikke beskeder, som kun kunne passe på mig. Føler mig dybt ramt og har fået årsag beskrevet 100% præcist. En perfekt og helt igennem god og tryg oplevelse.",
    name: "Lene J.",
    location: "Sorgenfri",
  },
  {
    text: "Jeg var meget imponeret over min session hos Jane. Det var dejlig konkret og meget præcis både ift. den livssituation, jeg står i nu, men også mine fremtidsplaner.",
    name: "Vickie W.",
    location: "København",
  },
  {
    text: "Det var en vild oplevelse, hun var meget præcis og flere gange kunne jeg ikke forstå, hun vidste alt det om mig. Jeg kan kun give hende mine anbefalinger.",
    name: "Trine M. H.",
    location: "Østerbro",
  },
  {
    text: "Jeg ville give Jane karakteren 13, hvis jeg kunne. Clairvoyancen har ramt en livsnerve og det mærkes dybt i sjælen.",
    name: "Ditte A.",
    location: "Holbæk",
  },
  {
    text: "Jeg havde ikke regnet med at Jane kunne give så klart et billede af hvem jeg er som menneske — men også i forhold til mit arbejde.",
    name: "Anette M.",
    location: "København",
  },
  {
    text: "Jane virkede meget tryg i sig selv og det betød rigtigt meget. Hun virker som en varm person. Hun er virkelig dygtig.",
    name: "Susanne",
    location: "København",
  },
  {
    text: "Udelukkende specifikke beskeder, som kun kunne passe på mig. Føler mig dybt ramt og har fået årsager beskrevet 100% præcist og jeg ved med sikkerhed, hvad jeg kan gøre for at komme videre på bedst mulig måde. En helt igennem stærk og tryg oplevelse.",
    name: "Eileen B.",
    location: "Ølstykke",
  },
];

const Testimonials = () => {
  return (
    <section id="udtalelser" className="py-24 bg-gradient-mystical">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-gold-light mb-3">
            Udtalelser
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-primary-foreground mb-4">
            Hvad mine klienter siger
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8"
            >
              <div className="text-accent text-2xl mb-4">"</div>
              <p className="font-body text-sm text-primary-foreground/80 leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <div>
                <p className="font-heading text-base font-semibold text-gold-light">
                  {t.name}
                </p>
                <p className="font-body text-xs text-primary-foreground/50">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
