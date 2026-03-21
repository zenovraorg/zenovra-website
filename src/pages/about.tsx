import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Heart,
  Shield,
  Lightbulb,
  Rocket,
  Users,
  Zap,
  Globe,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const team = [
  {
    name: 'Alex Mercer',
    role: 'Co-Founder & CEO',
    bio: 'Previously VP Engineering at Stripe. 15 years building enterprise products. Stanford CS.',
    initials: 'AM',
  },
  {
    name: 'Nina Patel',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Google Staff Engineer. Led teams building large-scale data infrastructure. MIT PhD.',
    initials: 'NP',
  },
  {
    name: 'Jordan Kim',
    role: 'VP of Product',
    bio: 'Former Head of Product at Notion. Passionate about crafting intuitive enterprise experiences.',
    initials: 'JK',
  },
  {
    name: 'Elif Osman',
    role: 'VP of Engineering',
    bio: 'Led engineering at Datadog for 6 years. Expert in real-time systems and observability.',
    initials: 'EO',
  },
];

const values = [
  {
    name: 'Customer Obsession',
    description: 'Every decision starts with the customer. We build what matters, not what is easy.',
    icon: Heart,
  },
  {
    name: 'Craft & Quality',
    description: 'We sweat the details. Every pixel, every API response, every error message matters.',
    icon: Lightbulb,
  },
  {
    name: 'Trust & Security',
    description: 'Enterprise trust is earned. We invest heavily in security, compliance, and reliability.',
    icon: Shield,
  },
  {
    name: 'Move Fast',
    description: 'Ship weekly. Iterate daily. We believe speed and quality are not mutually exclusive.',
    icon: Rocket,
  },
];

const milestones = [
  { date: 'December 2025', title: 'Zenovra Founded', description: 'Alex and Nina incorporate Zenovra Org and begin building the first product.' },
  { date: 'February 2026', title: 'Zenovra Hiring Launches', description: 'First product launch. 50 companies onboarded in the first month.' },
  { date: 'March 2026', title: 'CRM & Analytics Launch', description: 'Full product suite available. Zenovra Tech now offers Hiring, CRM, and Analytics.' },
  { date: 'March 2026', title: 'Series A Fundraise', description: 'Raised $18M Series A led by Benchmark to accelerate growth and hiring.' },
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

export default function AboutPage() {
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
            About <span className="gradient-text">Zenovra Tech</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg"
          >
            We are on a mission to build the best enterprise software for modern teams.
            Beautiful, powerful, and a joy to use.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Enterprise software has been broken for decades: bloated, ugly, and painful to use.
              Zenovra Tech exists to prove it doesn't have to be that way. We build software that
              teams actually want to use -- tools that are as powerful as they are beautiful, as
              reliable as they are fast. Our goal is to give every team on the planet access to
              world-class tools for hiring, selling, and making data-driven decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* Part of Zenovra Org */}
      <Section className="gradient-bg border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Globe className="h-3 w-3 text-primary" />
                Parent Organization
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Part of <span className="gradient-text">Zenovra Org</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Zenovra Tech is the software division of Zenovra Org, a technology holding company
                focused on building best-in-class enterprise products. Zenovra Org provides the
                vision, funding, and infrastructure that allows Zenovra Tech to move fast while
                maintaining the stability and trust that enterprise customers demand.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This structure allows us to think long-term, invest in R&D, and build products
                without the pressure of short-term revenue targets compromising quality.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="rounded-2xl border border-border/40 bg-card/60 p-8 text-center backdrop-blur-sm">
                  <Zap className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold">Zenovra Org</h3>
                  <p className="text-sm text-muted-foreground mt-1">Technology Holding Company</p>
                  <div className="mt-6 h-8 w-px bg-border/50 mx-auto" />
                  <div className="mt-2 rounded-xl border border-primary/30 bg-primary/5 p-4">
                    <h4 className="text-sm font-bold">Zenovra Tech</h4>
                    <p className="text-xs text-muted-foreground">Enterprise Software Division</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet the <span className="gradient-text">leadership</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A team of seasoned operators who have built products used by millions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border/40 bg-card/50 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {member.initials}
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-xs font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="gradient-bg border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-16">
            Our Journey
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50 lg:left-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-12 pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-8"
              >
                <div className={cn('lg:text-right', i % 2 === 1 && 'lg:order-2 lg:text-left')}>
                  <div className="absolute left-2 top-1 h-5 w-5 rounded-full border-2 border-primary bg-background lg:left-1/2 lg:-translate-x-1/2" />
                  <p className="text-xs font-semibold text-primary">{m.date}</p>
                  <h3 className="mt-1 font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Join CTA */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-12 text-center lg:p-20">
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
            <div className="relative">
              <Users className="mx-auto h-8 w-8 text-primary mb-4" />
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Join our team
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                We are hiring across engineering, product, design, and sales.
                Help us build the future of enterprise software.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button size="xl" asChild>
                  <Link to="/contact">
                    View Open Roles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
