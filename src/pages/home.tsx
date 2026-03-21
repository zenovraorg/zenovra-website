import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Users,
  Target,
  BarChart3,
  ArrowRight,
  Star,
  Zap,
  GitBranch,
  PieChart,
  UserCheck,
  Handshake,
  TrendingUp,
  Database,
  BrainCircuit,
  LayoutDashboard,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/sections/animated-counter';
import { cn } from '@/lib/utils';

/* ───────── data ───────── */

const products = [
  {
    name: 'Zenovra Hiring',
    tagline: 'Hire smarter, faster',
    description: 'Enterprise-grade applicant tracking and hiring pipeline management.',
    icon: Users,
    color: 'from-indigo-500 to-purple-600',
    href: '/products/hiring',
    features: [
      'Applicant Tracking System',
      'Pipeline Management',
      'Hiring Analytics',
      'Team Collaboration',
    ],
  },
  {
    name: 'Zenovra CRM',
    tagline: 'Close deals with confidence',
    description: 'Modern CRM built for high-velocity sales teams.',
    icon: Target,
    color: 'from-emerald-500 to-teal-600',
    href: '/products/crm',
    features: [
      'Contact Management',
      'Sales Pipeline',
      'Workflow Automation',
      'Revenue Reporting',
    ],
  },
  {
    name: 'Zenovra Analytics',
    tagline: 'Data-driven decisions',
    description: 'Real-time business intelligence and analytics suite.',
    icon: BarChart3,
    color: 'from-orange-500 to-rose-600',
    href: '/products/analytics',
    features: [
      'Custom Dashboards',
      'Real-Time Metrics',
      'Custom Reports',
      'AI-Powered Insights',
    ],
  },
];

const testimonials = [
  {
    quote:
      'Zenovra Hiring cut our time-to-fill by 40%. The pipeline view is incredibly intuitive and our recruiters actually enjoy using it.',
    name: 'Sarah Chen',
    title: 'VP of People',
    company: 'TechFlow Inc.',
    stars: 5,
  },
  {
    quote:
      'We switched from Salesforce to Zenovra CRM and haven\'t looked back. The automation features alone save our team 15 hours per week.',
    name: 'Marcus Rivera',
    title: 'Head of Sales',
    company: 'ScaleUp Co.',
    stars: 5,
  },
  {
    quote:
      'The analytics suite gives us visibility we never had before. Executive dashboards update in real time and the AI insights are genuinely useful.',
    name: 'Priya Patel',
    title: 'Chief Data Officer',
    company: 'DataPrime',
    stars: 5,
  },
];

const logos = ['Acme Corp', 'TechFlow', 'DataPrime', 'CloudBase', 'ScaleUp', 'NexGen'];

/* ───────── helpers ───────── */

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('py-24', className)}
    >
      {children}
    </motion.section>
  );
}

/* ───────── page ───────── */

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Zap className="h-3 w-3 text-primary" />
              Part of Zenovra Org
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl"
          >
            Enterprise Software{' '}
            <span className="gradient-text">Built for the Modern Era</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Zenovra Tech builds powerful, beautiful software that helps teams hire, sell, and
            analyze at scale. Trusted by hundreds of companies worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Button size="xl" asChild>
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </motion.div>

          {/* Floating product cards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mx-auto mt-20 max-w-5xl"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div
                    className={cn(
                      'mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-white',
                      product.color
                    )}
                  >
                    <product.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold">{product.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{product.tagline}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Trusted By ─── */}
      <Section className="py-16 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by innovative teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-lg font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Products Overview ─── */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              One platform, <span className="gradient-text">three powerful products</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything your team needs to hire, sell, and make data-driven decisions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 p-8 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  className={cn(
                    'mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white',
                    product.color
                  )}
                >
                  <product.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{product.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>

                <ul className="mt-5 space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={product.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {/* Decorative corner */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Stats ─── */}
      <Section className="border-y border-border/30 gradient-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <AnimatedCounter end={10000} suffix="+" label="Active Users" />
            <AnimatedCounter end={500} suffix="+" label="Companies" />
            <AnimatedCounter end={99} suffix=".9%" label="Uptime" />
            <AnimatedCounter end={50} suffix="M+" label="Data Points Processed" />
          </div>
        </div>
      </Section>

      {/* ─── Testimonials ─── */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Loved by <span className="gradient-text">industry leaders</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hear from teams that transformed their workflows with Zenovra.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-2xl border border-border/40 bg-card/50 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-12 text-center lg:p-20">
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to <span className="gradient-text">transform your business</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join hundreds of companies using Zenovra to power their operations. Start your free
                trial today or book a demo with our team.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" asChild>
                  <Link to="/pricing">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link to="/contact">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
