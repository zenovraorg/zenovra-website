import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Send,
  Mail,
  Calendar,
  HelpCircle,
  MapPin,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const offices = [
  { city: 'San Francisco', address: '100 Market Street, Suite 400, SF, CA 94105', timezone: 'PST (UTC-8)' },
  { city: 'New York', address: '85 Broad Street, 17th Floor, New York, NY 10004', timezone: 'EST (UTC-5)' },
  { city: 'London', address: '1 Finsbury Avenue, London, EC2M 2PF, UK', timezone: 'GMT (UTC+0)' },
];

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn('py-24', className)}
    >
      {children}
    </motion.section>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    email: 'jane@acmecorp.com',
    company: 'Acme Corp',
    product: 'hiring',
    message: 'We are interested in Zenovra Hiring for our growing team of 120+ people. We would love to schedule a demo and discuss enterprise pricing.',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            Have a question? Want a demo? Our team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Form + Cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border/40 bg-card/50 p-8 backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-border/50 bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-border/50 bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Company</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border border-border/50 bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Product Interest</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border border-border/50 bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="hiring">Zenovra Hiring</option>
                      <option value="crm">Zenovra CRM</option>
                      <option value="analytics">Zenovra Analytics</option>
                      <option value="bundle">All Products (Bundle)</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border/50 bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    />
                  </div>

                  <Button size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Right Side Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold">Talk to Sales</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Get a personalized demo and discuss pricing for your team.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" /> sales@zenovra.tech
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> Book a 30-min demo call
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold">Need Help?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Our support team is available to help with any issues.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" /> support@zenovra.tech
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5" /> +1 (888) 555-0199
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">{office.city}</p>
                        <p className="text-xs text-muted-foreground">{office.address}</p>
                        <p className="text-xs text-muted-foreground">{office.timezone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
