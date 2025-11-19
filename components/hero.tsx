export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 md:pt-0 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-sm md:text-base tracking-widest uppercase text-accent font-medium">
            Premium Wallpaper Installation
          </p>
          <h1 className="heading-gradient">Transform Your Space</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert wallpaper installation for residential and commercial
            projects across Western Australia. Precision craftsmanship with
            experience in all paper types.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors rounded-lg"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg font-medium"
          >
            Get In Touch
          </a>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl">🛠️</div>
            <p className="font-semibold">Professional Installation</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl">📍</div>
            <p className="font-semibold">Western Australia Based</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl">🗞️</div>
            <p className="font-semibold">All Paper Types</p>
          </div>
        </div>
      </div>
    </section>
  );
}
