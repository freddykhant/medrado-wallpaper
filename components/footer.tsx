export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-padding bg-foreground text-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Medrado</h3>
            <p className="text-background/80">
              Professional wallpaper installation services for residential and commercial projects across Western
              Australia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#portfolio" className="hover:text-background transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-background/80 mb-2">
              <a href="mailto:medradoinstaller@outlook.com" className="hover:text-background transition-colors">
                medradoinstaller@outlook.com
              </a>
            </p>
            <p className="text-background/80">📍 Western Australia</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/80 text-sm">
            © {currentYear} Medrado Wallpaper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
