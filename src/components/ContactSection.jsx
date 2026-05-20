import { Instagram, Linkedin, Mail, MapPin, Phone, SendIcon } from 'lucide-react'
import { toast } from 'sonner'
import { useState } from 'react'
import cn from '../lib/utils'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const getContactEndpoint = () => {
  if (typeof window === 'undefined') {
    return '/api/contact'
  }

  const isLocalHost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'

  return isLocalHost ? 'http://localhost:3000/api/contact' : '/api/contact'
}

export const ContactSection = () => {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(getContactEndpoint(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send your message right now.')
      }

      toast.success('Message sent', {
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setFormData(INITIAL_FORM)
    } catch (error) {
      toast.error('Message not sent', {
        description:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your message.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-secondary/30 px-4 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-4xl rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8 rounded-3xl border border-border/60 bg-card/75 p-8 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div>
              <h3 className="mb-3 text-2xl font-semibold">Contact Information</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Let&apos;s build something thoughtful, fast, and genuinely useful.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:127anushka@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    127anushka@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918881427301"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    +91 88814 27301
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/70 pt-6">
              <h4 className="mb-4 font-medium">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border/80 p-3 text-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border/80 p-3 text-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
                  aria-label="Visit Instagram profile"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <h3 className="mb-2 text-left text-2xl font-semibold">Send a Message</h3>
            <p className="mb-6 text-left text-sm leading-6 text-muted-foreground">
              Share a few details and your message will land directly in my inbox.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-left text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Anushka Verma"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-left text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-left text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-left text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Tell me a little about your idea, timeline, or what you need help with..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button flex w-full items-center justify-center gap-2',
                  isSubmitting && 'cursor-not-allowed opacity-80',
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <SendIcon size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
