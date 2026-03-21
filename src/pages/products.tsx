import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Users,
  Target,
  BarChart3,
  ArrowRight,
  GitBranch,
  UserCheck,
  PieChart,
  Bell,
  Shield,
  Zap,
  Workflow,
  Handshake,
  TrendingUp,
  Database,
  BrainCircuit,
  LayoutDashboard,
  LineChart,
  Mail,
  Calendar,
  Filter,
  Globe,
  Lock,
  MessageSquare,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const productsData = [
  {
    slug: 'hiring',
    name: 'Zenovra Hiring',
    tagline: 'Hire smarter, faster',
    description:
      'A complete enterprise hiring platform that streamlines your entire recruitment process, from job posting to offer letter. Built for scaling teams that refuse to compromise on talent quality.',
    gradient: 'from-indigo-500 to-purple-600',
    icon: Users,
    features: [
      { name: 'Applicant Tracking', description: 'Full-lifecycle candidate management with custom stages', icon: UserCheck },
      { name: 'Pipeline Management', description: 'Visual Kanban boards with drag-and-drop workflows', icon: GitBranch },
      { name: 'Hiring Analytics', description: 'Time-to-fill, source effectiveness, and DEI metrics', icon: PieChart },
      { name: 'Team Collaboration', description: 'Scorecards, interview kits, and shared evaluations', icon: MessageSquare },
      { name: 'Job Board Distribution', description: 'Post to 100+ job boards with one click', icon: Globe },
      { name: 'Compliance & Security', description: 'EEOC, GDPR, and SOC 2 compliant', icon: Shield },
    ],
  },
  {
    slug: 'crm',
    name: 'Zenovra CRM',
    tagline: 'Close deals with confidence',
    description:
      'A modern CRM designed for high-velocity B2B sales teams. Automate the busywork, focus on building relationships, and close deals faster with intelligent pipeline management.',
    gradient: 'from-emerald-500 to-teal-600',
    icon: Target,
    features: [
      { name: 'Contact Management', description: 'Unified customer profiles with activity timelines', icon: Users },
      { name: 'Sales Pipeline', description: 'Multi-pipeline views with forecasting and probability scoring', icon: TrendingUp },
      { name: 'Workflow Automation', description: 'Trigger-based automations for follow-ups and assignments', icon: Workflow },
      { name: 'Email Sequences', description: 'Multi-step email campaigns with open and click tracking', icon: Mail },
      { name: 'Meeting Scheduler', description: 'Built-in scheduling that syncs with Google and Outlook', icon: Calendar },
      { name: 'Revenue Reporting', description: 'Real-time dashboards for ARR, MRR, and churn metrics', icon: LineChart },
    ],
  },
  {
    slug: 'analytics',
    name: 'Zenovra Analytics',
    tagline: 'Data-driven decisions',
    description:
      'Enterprise business intelligence that connects all your data sources into a single, beautiful dashboard. Get AI-powered insights, custom reports, and real-time metrics without writing SQL.',
    gradient: 'from-orange-500 to-rose-600',
    icon: BarChart3,
    features: [
      { name: 'Custom Dashboards', description: 'Drag-and-drop dashboard builder with 50+ widget types', icon: LayoutDashboard },
      { name: 'Real-Time Metrics', description: 'Live data streaming with sub-second refresh rates', icon: Zap },
      { name: 'Custom Reports', description: 'Scheduled reports with PDF export and email delivery', icon: FileText },
      { name: 'AI Insights', description: 'Anomaly detection and trend prediction powered by ML', icon: BrainCircuit },
      { name: 'Data Connectors', description: '200+ integrations including Snowflake, BigQuery, and Postgres', icon: Database },
      { name: 'Access Controls', description: 'Row-level security, SSO, and team-based permissions', icon: Lock },
    ],
  },
];

const integrations = [
  'Slack',
  'GitHub',
  'Google Workspace',
  'Microsoft 365',
  'Jira',
  'Notion',
  'Salesforce',
  'HubSpot',
  'Snowflake',
  'BigQuery',
  'Zapier',
  'Stripe',
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

export default function ProductsPage() {
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
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Our <span className="gradient-text">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Three powerful products, one unified platform. Choose what you need today and grow into
            the full suite as your business scales.
          </motion.p>
        </div>
      </section>

      {/* Product Sections */}
      {productsData.map((product, i) => (
        <Section key={product.slug} className={cn(i % 2 === 1 && 'gradient-bg')}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'grid items-center gap-12 lg:grid-cols-2',
                i % 2 === 1 && 'lg:direction-rtl'
              )}
            >
              {/* Screenshot placeholder */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={cn(i % 2 === 1 && 'lg:order-2')}
              >
                <div
                  className={cn(
                    'aspect-[4/3] rounded-2xl bg-gradient-to-br p-px',
                    product.gradient
                  )}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-card/95 backdrop-blur-sm">
                    <div className="text-center">
                      <product.icon className="mx-auto h-16 w-16 text-muted-foreground/30" />
                      <p className="mt-3 text-sm text-muted-foreground/50">Product Screenshot</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={cn(i % 2 === 1 && 'lg:order-1')}
              >
                <div
                  className={cn(
                    'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white',
                    product.gradient
                  )}
                >
                  <product.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight">{product.name}</h2>
                <p className="mt-1 text-lg font-medium text-primary">{product.tagline}</p>
                <p className="mt-4 text-muted-foreground">{product.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {product.features.map((f) => (
                    <div key={f.name} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <f.icon className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{f.name}</p>
                        <p className="text-xs text-muted-foreground">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <Button asChild>
                    <Link to={`/products/${product.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/pricing">See Pricing</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      ))}

      {/* Integrations */}
      <Section className="border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Works with your <span className="gradient-text">favorite tools</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Integrate seamlessly with 200+ tools your team already uses.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {integrations.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex h-14 items-center justify-center rounded-xl border border-border/40 bg-card/50 px-6 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="xl" asChild>
              <Link to="/pricing">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
