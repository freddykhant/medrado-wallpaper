"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open email client with pre-filled information
    const mailtoLink = `mailto:medradoinstaller@outlook.com?subject=New Project Inquiry from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0D%0DMessage:%0D${formData.message}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="section-padding py-24 md:py-32 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm tracking-widest uppercase text-accent font-medium">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready for Your Next Project?</h2>
          <p className="text-lg text-muted-foreground">
            Contact Kevin today to discuss your wallpaper installation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:medradoinstaller@outlook.com"
              className="text-accent hover:text-primary transition-colors text-sm break-all"
            >
              medradoinstaller@outlook.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Western Australia</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="font-semibold mb-2">Service Area</h3>
            <p className="text-muted-foreground text-sm">Residential & Commercial</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors rounded-lg"
          >
            Send Inquiry
          </button>

          {submitted && (
            <p className="text-sm text-accent text-center">Your inquiry has been sent! Kevin will be in touch soon.</p>
          )}
        </form>
      </div>
    </section>
  )
}
