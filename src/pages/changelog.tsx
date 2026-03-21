import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  Palette,
  BarChart3,
  GripVertical,
  Moon,
  Users,
  Handshake,
  Rocket,
  Zap,
  Target,
  LayoutDashboard,
  BrainCircuit,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const releases = [
  {
    version: 'v2.1',
    date: 'March 2026',
    title: 'Pipeline Overhaul & Dark Mode',
    badge: 'Latest',
    badgeColor: 'bg-primary text-primary-foreground',
    changes: [
      { icon: GripVertical, text: 'Drag-and-drop pipeline management with custom stage ordering' },
      { icon: Moon, text: 'Full dark mode support across all products' },
      { icon: Users, text: 'Applicant portal for candidates to track their application status' },
      { icon: BrainCircuit, text: 'AI-powered candidate matching and scoring' },
      { icon: Zap, text: 'Performance improvements: 40% faster dashboard loads' },
    ],
  },
  {
    version: 'v2.0',
    date: 'February 2026',
    title: 'The Big Redesign',
    badge: 'Major',
    badgeColor: 'bg-amber-500/10 text-amber-400',
    changes: [
      { icon: Palette, text: 'Complete UI redesign with a modern, premium design system' },
      { icon: BarChart3, text: 'New analytics engine with real-time data streaming' },
      { icon: LayoutDashboard, text: 'Customizable dashboard widgets and layout builder' },
      { icon: Sparkles, text: 'Framer Motion animations throughout the interface' },
    ],
  },
  {
    version: 'v1.5',
    date: 'January 2026',
    title: 'CRM Launch & Collaboration',
    badge: 'New Product',
    badgeColor: 'bg-emerald-500/10 text-emerald-400',
    changes: [
      { icon: Target, text: 'Zenovra CRM launched with contact management and sales pipeline' },
      { icon: Handshake, text: 'Team collaboration features: shared scorecards and interview kits' },
      { icon: Users, text: 'Multi-user workspaces with role-based access controls' },
    ],
  },
  {
    version: 'v1.0',
    date: 'December 2025',
    title: 'Initial Launch',
    badge: 'Launch',
    badgeColor: 'bg-rose-500/10 text-rose-400',
    changes: [
      { icon: Rocket, text: 'Zenovra Hiring launched with core ATS functionality' },
      { icon: Users, text: 'Job posting, applicant tracking, and candidate pipeline' },
      { icon: BarChart3, text: 'Basic hiring analytics and reporting' },
    ],
  },
];

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ChangelogPage() {
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
            <span className="gradient-text">Changelog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            A record of all notable changes and improvements to Zenovra products.
          </motion.p>
        </div>
      </section>

      {/* Releases */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border/50" />

            <div className="space-y-16">
              {releases.map((release, i) => (
                <Section key={release.version}>
                  <div className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-2 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                        {release.version}
                      </span>
                      <span className={cn('rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider', release.badgeColor)}>
                        {release.badge}
                      </span>
                      <span className="text-sm text-muted-foreground">{release.date}</span>
                    </div>

                    <h2 className="text-xl font-bold mb-6">{release.title}</h2>

                    <div className="space-y-4">
                      {release.changes.map((change, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.08 }}
                          className="flex items-start gap-3 rounded-xl border border-border/30 bg-card/40 p-4 backdrop-blur-sm"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <change.icon className="h-4 w-4" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                            {change.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
