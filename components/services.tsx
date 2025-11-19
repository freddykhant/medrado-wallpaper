export function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Residential",
      description:
        "Beautiful wallpaper solutions for bedrooms, living rooms, and home offices. Transform any room with premium finishes.",
    },
    {
      icon: "🏢",
      title: "Commercial",
      description:
        "Professional installations for offices, retail spaces, and hospitality venues. Built to last and designed to impress.",
    },
    {
      icon: "🎨",
      title: "All Paper Types",
      description:
        "Expertise with vinyl, fabric, textured, and specialty papers. We handle every type of wallpaper with precision.",
    },
    {
      icon: "✨",
      title: "Premium Finish",
      description:
        "Flawless installation with perfect alignment and smooth application. Details matter.",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding py-24 md:py-32 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm tracking-widest uppercase text-accent font-medium">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
