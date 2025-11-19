export function About() {
  return (
    <section id="about" className="section-padding py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <img src="/wallpaper-installation-professional-craftsmanship.jpg" alt="Kevin Medrado at work" className="w-full rounded-lg shadow-lg" />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-sm tracking-widest uppercase text-accent font-medium mb-2">Meet Kevin</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Your Wallpaper Expert</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of dedicated experience in wallpaper installation, Kevin Medrado brings precision and attention
              to detail to every project. Specializing in all types of papers—from delicate fabrics to durable
              vinyls—Kevin ensures flawless results every time.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's a cozy residential space or a large commercial renovation, Kevin's commitment to quality
              craftsmanship and customer satisfaction sets Medrado Wallpaper apart.
            </p>

            <div className="flex flex-col gap-3 pt-6">
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span className="text-foreground">Professional installation for all paper types</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span className="text-foreground">Residential and commercial expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span className="text-foreground">Serving Western Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
