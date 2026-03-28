const whyItems = [
  {
    title: "Personlig opmærksomhed",
    text: "Du har min fulde opmærksomhed i en dedikeret konsultation. De clairvoyante budskaber er specifikt rettet til at hjælpe dig.",
  },
  {
    title: "Tillid i et fortroligt rum",
    text: "I trygge omgivelser giver jeg dig råd og redskaber. Konsultationen kan foregå i København Sv. ved fysisk fremmøde eller online.",
  },
  {
    title: "Etik under clairvoyancen",
    text: "Jeg forudser ikke død eller sygdom. Fokus er på konstruktive budskaber. Jeg har tavshedspligt og værner om respekt.",
  },
];

const WhyMe = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Værd at vide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Hvorfor vælge mig?
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Jeg har meget stærke clairvoyante evner og mere end 30 års erfaring i at arbejde med menneskelige relationer. Min akademiske tilgang gør mig til en kritisk analytiker, der hjælper dig med at se nye vinkler og nuancer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whyItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
