import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Users,
  Target,
  BarChart3,
  ArrowRight,
  ChevronDown,
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
  Search,
  Repeat,
  Eye,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/* ─── Product Data ─── */

const allProducts: Record<
  string,
  {
    name: string;
    tagline: string;
    heroDescription: string;
    gradient: string;
    icon: any;
    features: { name: string; description: string; icon: any }[];
    howItWorks: { step: string; title: string; description: string }[];
    faqs: { q: string; a: string }[];
    pricingPreview: { price: string; features: string[] };
  }
> = {
  hiring: {
    name: 'Zenovra Hiring',
    tagline: 'Enterprise ATS & Hiring Platform',
    heroDescription:
      'Streamline your entire recruitment process from sourcing to offer. Zenovra Hiring gives your team the tools to find, evaluate, and close top talent faster than ever.',
    gradient: 'from-indigo-500 to-purple-600',
    icon: Users,
    features: [
      { name: 'Applicant Tracking', description: 'Manage candidates across every stage with a unified view. Track status, communications, and evaluations in one place.', icon: UserCheck },
      { name: 'Visual Pipeline', description: 'Drag-and-drop Kanban boards let you move candidates through custom hiring stages with ease.', icon: GitBranch },
      { name: 'Hiring Analytics', description: 'Track time-to-fill, cost-per-hire, source effectiveness, and diversity metrics in real time.', icon: PieChart },
      { name: 'Collaborative Scoring', description: 'Structured scorecards and interview kits ensure consistent, unbiased evaluations across your team.', icon: MessageSquare },
      { name: 'Job Distribution', description: 'Publish to 100+ job boards including LinkedIn, Indeed, and Glassdoor with a single click.', icon: Globe },
      { name: 'Offer Management', description: 'Generate, track, and e-sign offer letters without leaving the platform.', icon: FileText },
      { name: 'Candidate Search', description: 'AI-powered search and filters help you find the best candidates in your talent pool instantly.', icon: Search },
      { name: 'Compliance Ready', description: 'EEOC reporting, GDPR consent management, and full audit trails built in.', icon: Shield },
    ],
    howItWorks: [
      { step: '01', title: 'Create Your Job', description: 'Define the role, requirements, and hiring team. Publish to multiple job boards instantly.' },
      { step: '02', title: 'Review & Evaluate', description: 'Screen applicants with AI assistance, schedule interviews, and collaborate with scorecards.' },
      { step: '03', title: 'Hire & Onboard', description: 'Send offer letters, collect signatures, and kick off onboarding workflows automatically.' },
    ],
    faqs: [
      { q: 'How many jobs can I post?', a: 'Starter plans include 5 active job posts. Growth and Enterprise plans offer unlimited job postings.' },
      { q: 'Does it integrate with our existing HRIS?', a: 'Yes, we integrate with BambooHR, Workday, Gusto, Rippling, and many more via API or native connectors.' },
      { q: 'Is there a candidate portal?', a: 'Yes. Candidates get a branded portal to track their application status, schedule interviews, and upload documents.' },
      { q: 'How does collaborative scoring work?', a: 'Each interviewer fills out a structured scorecard. Scores are aggregated and displayed in a unified hiring decision view.' },
      { q: 'Can I customize the hiring pipeline stages?', a: 'Absolutely. Create custom stages, add automations between stages, and set up approval gates.' },
    ],
    pricingPreview: { price: '$49', features: ['Up to 10 users', '5 active jobs', 'Basic analytics', 'Email support'] },
  },
  crm: {
    name: 'Zenovra CRM',
    tagline: 'Customer Relationship Management',
    heroDescription:
      'Close more deals with a CRM that works as hard as your sales team. Zenovra CRM combines intelligent automation with beautiful design to help you build lasting customer relationships.',
    gradient: 'from-emerald-500 to-teal-600',
    icon: Target,
    features: [
      { name: 'Unified Contacts', description: 'Every interaction, email, call, and note in a single timeline. See the full story for every contact.', icon: Users },
      { name: 'Sales Pipeline', description: 'Multiple customizable pipelines with weighted probability scoring and revenue forecasting.', icon: TrendingUp },
      { name: 'Workflow Automation', description: 'Set triggers to auto-assign leads, send follow-ups, create tasks, and update deal stages.', icon: Workflow },
      { name: 'Email Sequences', description: 'Build multi-step drip campaigns with personalization tokens. Track opens, clicks, and replies.', icon: Mail },
      { name: 'Meeting Scheduler', description: 'Share your availability link. Auto-syncs with Google Calendar and Outlook.', icon: Calendar },
      { name: 'Revenue Reporting', description: 'Real-time dashboards for ARR, MRR, pipeline velocity, win rates, and team performance.', icon: LineChart },
      { name: 'Lead Scoring', description: 'AI-powered lead scoring based on engagement, fit, and behavioral signals.', icon: Filter },
      { name: 'Activity Tracking', description: 'Automatic logging of emails, calls, meetings, and page visits. No manual data entry.', icon: Eye },
    ],
    howItWorks: [
      { step: '01', title: 'Import Contacts', description: 'Bring in your existing contacts from spreadsheets, other CRMs, or connect email to auto-capture.' },
      { step: '02', title: 'Build Your Pipeline', description: 'Create deal stages, set up automations, and start moving opportunities through your funnel.' },
      { step: '03', title: 'Close & Report', description: 'Win deals with timely follow-ups, then analyze performance with real-time revenue dashboards.' },
    ],
    faqs: [
      { q: 'Can I migrate from Salesforce?', a: 'Yes. We provide a dedicated migration tool and hands-on support to move your contacts, deals, and history from Salesforce.' },
      { q: 'Does it support multiple pipelines?', a: 'Yes. Create separate pipelines for different products, regions, or sales processes with independent stages and automations.' },
      { q: 'How does email integration work?', a: 'Connect Gmail or Outlook via OAuth. Emails are automatically logged on contact timelines and can trigger automations.' },
      { q: 'Is there a mobile app?', a: 'Yes, native iOS and Android apps are available with full CRM functionality including offline access.' },
      { q: 'What about data privacy?', a: 'We are SOC 2 Type II certified, GDPR compliant, and offer data residency options in US and EU.' },
    ],
    pricingPreview: { price: '$49', features: ['Up to 10 users', '1,000 contacts', 'Basic automation', 'Email support'] },
  },
  analytics: {
    name: 'Zenovra Analytics',
    tagline: 'Business Intelligence & Analytics',
    heroDescription:
      'Transform raw data into actionable insights. Zenovra Analytics connects to all your data sources, delivers real-time dashboards, and uses AI to surface the trends that matter most.',
    gradient: 'from-orange-500 to-rose-600',
    icon: BarChart3,
    features: [
      { name: 'Dashboard Builder', description: 'Drag-and-drop interface with 50+ chart types. Build executive dashboards in minutes, not days.', icon: LayoutDashboard },
      { name: 'Real-Time Streaming', description: 'Live data updates with sub-second refresh. Never make a decision on stale data again.', icon: Zap },
      { name: 'Custom Reports', description: 'Scheduled reports delivered via email or Slack. Export to PDF, CSV, or embed in your app.', icon: FileText },
      { name: 'AI Insights', description: 'Automatic anomaly detection, trend forecasting, and natural language querying powered by ML.', icon: BrainCircuit },
      { name: 'Data Connectors', description: '200+ native connectors for databases, SaaS tools, APIs, and file uploads.', icon: Database },
      { name: 'Embedded Analytics', description: 'White-label dashboards and embed charts directly into your product with our SDK.', icon: Layers },
      { name: 'Data Modeling', description: 'Define metrics, dimensions, and relationships in a semantic layer for consistent reporting.', icon: Repeat },
      { name: 'Row-Level Security', description: 'Control who sees what with team-based permissions, SSO, and row-level access policies.', icon: Lock },
    ],
    howItWorks: [
      { step: '01', title: 'Connect Your Data', description: 'Link databases, APIs, and SaaS tools in minutes with our 200+ native connectors.' },
      { step: '02', title: 'Build Dashboards', description: 'Drag and drop charts, tables, and metrics to create beautiful, interactive dashboards.' },
      { step: '03', title: 'Share & Automate', description: 'Share with your team, schedule email digests, and let AI surface the insights you need.' },
    ],
    faqs: [
      { q: 'What data sources do you support?', a: 'We support 200+ connectors including PostgreSQL, MySQL, Snowflake, BigQuery, Redshift, MongoDB, and all major SaaS tools.' },
      { q: 'Can I embed dashboards in my product?', a: 'Yes. Our embedded analytics SDK lets you white-label and embed interactive dashboards directly in your application.' },
      { q: 'How does the AI work?', a: 'Our ML models analyze your data patterns to detect anomalies, forecast trends, and let you ask questions in natural language.' },
      { q: 'Is there a SQL editor?', a: 'Yes. Power users can write custom SQL queries, create saved views, and use them as data sources for dashboards.' },
      { q: 'What about data security?', a: 'All data is encrypted at rest and in transit. We offer SSO, row-level security, audit logs, and SOC 2 Type II compliance.' },
    ],
    pricingPreview: { price: '$49', features: ['Up to 10 users', '5 dashboards', '10 data connectors', 'Email support'] },
  },
};

/* ─── Helpers ─── */

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

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/40">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-semibold pr-4">{q}</span>
        <ChevronDown
          className={cn('h-4 w-4 shrink-0 text-muted-foreground transition-transform', open && 'rotate-180')}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-muted-foreground">{a}</p>
      </motion.div>
    </div>
  );
}

/* ─── Page ─── */

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? allProducts[slug] : null;

  if (!product) return <Navigate to="/products" replace />;

  const Icon = product.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div
              className={cn(
                'mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white',
                product.gradient
              )}
            >
              <Icon className="h-7 w-7" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-2 text-lg font-medium text-primary"
          >
            {product.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-muted-foreground"
          >
            {product.heroDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Button size="xl" asChild>
              <Link to="/pricing">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need, <span className="gradient-text">nothing you don't</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Powerful features designed to give your team an unfair advantage.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold">{f.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Screenshot Gallery */}
      <Section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight">
              See it in action
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {['Dashboard View', 'Detail View', 'Analytics View'].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn('aspect-video rounded-xl bg-gradient-to-br p-px', product.gradient)}
              >
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-card/95">
                  <p className="text-sm text-muted-foreground/50">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              How it <span className="gradient-text">works</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {product.howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                {i < product.howItWorks.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-px w-[calc(100%-3.5rem)] translate-x-1/2 bg-border/50 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section className="gradient-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">Simple, transparent pricing</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-sm rounded-2xl border border-border/40 bg-card/80 p-8 backdrop-blur-sm"
          >
            <p className="text-sm text-muted-foreground">Starting at</p>
            <p className="mt-2 text-4xl font-extrabold">
              {product.pricingPreview.price}
              <span className="text-lg font-normal text-muted-foreground">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-left">
              {product.pricingPreview.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" size="lg" asChild>
              <Link to="/pricing">View Full Pricing</Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="divide-y-0">
            {product.faqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-12 text-center lg:p-20">
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Start using {product.name} today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                14-day free trial. No credit card required. Get set up in minutes.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button size="xl" asChild>
                  <Link to="/pricing">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
