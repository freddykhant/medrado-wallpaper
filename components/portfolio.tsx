export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Residential",
      image: "/modern-wallpaper-living-room-interior-design.jpg",
    },
    {
      id: 2,
      title: "Executive Office",
      category: "Commercial",
      image: "/office-wallpaper-professional-interior.jpg",
    },
    {
      id: 3,
      title: "Luxury Bedroom",
      category: "Residential",
      image: "/bedroom-wallpaper-interior-design-elegant.jpg",
    },
    {
      id: 4,
      title: "Restaurant Feature Wall",
      category: "Commercial",
      image: "/restaurant-wallpaper-interior-feature-wall.jpg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="section-padding py-24 md:py-32 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm tracking-widest uppercase text-accent font-medium">
            Completed Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest installations showcasing our expertise in
            residential and commercial wallpaper design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-video md:aspect-square bg-secondary"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-primary-foreground">
                <p className="text-sm font-medium tracking-wider uppercase mb-1">
                  {item.category}
                </p>
                <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
