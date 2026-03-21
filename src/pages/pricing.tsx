import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Rocket,
  Crown,
  Building2,
  Zap,
  BadgePercent,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/* ─── Data ─── */

const tiers = [
  {
    name: 'Starter',
    icon: Zap,
    monthlyPrice: 49,
    annualPrice: 39,
    description: 'For small teams getting started with modern software.',
    popular: false,
    cta: 'Start Free Trial',
    ctaHref: '/contact',
    features: [
      'Up to 10 users',
      '1 product included (choose any)',
      'Basic features',
      'Email support',
      '5GB storage',
      'Community access',
    ],
  },
  {
    name: 'Growth',
    icon: Rocket,
    monthlyPrice: 149,
    annualPrice: 119,
    description: 'For growing teams that need advanced functionality.',
    popular: true,
    cta: 'Start Free Trial',
    ctaHref: '/contact',
    features: [
      'Up to 50 users',
      '2 products included',
      'Advanced features + API access',
      'Priority support',
      '50GB storage',
      'Custom workflows',
      'Integrations marketplace',
      'Advanced reporting',
    ],
  },
  {
    name: 'Enterprise',
    icon: Building2,
    monthlyPrice: 399,
    annualPrice: 319,
    description: 'For organizations that need enterprise-grade features and support.',
    popular: false,
    cta: 'Contact Sales',
    ctaHref: '/contact',
    features: [
      'Unlimited users',
      'All 3 products included',
      'Enterprise features (SSO, RBAC, Audit logs)',
      'Dedicated support + SLA',
      'Unlimited storage',
      'Custom integrations',
      'Custom domains',
      'Onboarding & training',
      'Dedicated account manager',
    ],
  },
];

const combos = [
  { name: 'Hiring + CRM', discount: '15%', badge: false },
  { name: 'Hiring + Analytics', discount: '15%', badge: false },
  { name: 'CRM + Analytics', discount: '15%', badge: false },
  { name: 'All 3 Products', discount: '25%', badge: true },
];

const comparisonFeatures = [
  { name: 'Users', starter: 'Up to 10', growth: 'Up to 50', enterprise: 'Unlimited' },
  { name: 'Products Included', starter: '1', growth: '2', enterprise: 'All 3' },
  { name: 'Storage', starter: '5 GB', growth: '50 GB', enterprise: 'Unlimited' },
  { name: 'API Access', starter: false, growth: true, enterprise: true },
  { name: 'SSO / SAML', starter: false, growth: false, enterprise: true },
  { name: 'Role-Based Access', starter: false, growth: true, enterprise: true },
  { name: 'Custom Domains', starter: false, growth: false, enterprise: true },
  { name: 'Audit Logs', starter: false, growth: false, enterprise: true },
  { name: 'SLA', starter: false, growth: false, enterprise: true },
  { name: 'Dedicated Support', starter: false, growth: false, enterprise: true },
  { name: 'Custom Integrations', starter: false, growth: false, enterprise: true },
  { name: 'Priority Support', starter: false, growth: true, enterprise: true },
  { name: 'Advanced Reporting', starter: false, growth: true, enterprise: true },
];

const faqs = [
  { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.' },
  { q: 'Is there a free trial?', a: 'Yes! Every plan comes with a 14-day free trial. No credit card required to get started.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, ACH bank transfers, and wire transfers for annual Enterprise plans.' },
  { q: 'Can I pay annually?', a: 'Yes. Annual plans save you 20% compared to monthly billing. You can switch between monthly and annual at any time.' },
  { q: 'What happens when the trial ends?', a: 'At the end of your trial, you can choose a paid plan or your account will be paused. No data is deleted for 30 days.' },
  { q: 'Do you offer discounts for nonprofits?', a: 'Yes! Nonprofits and educational institutions receive 30% off any plan. Contact our sales team to apply.' },
  { q: 'What is the startup program?', a: 'Qualifying startups (under $5M in funding and fewer than 50 employees) get 50% off for the first 12 months.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. There are no long-term contracts. Cancel anytime and your access continues until the end of the billing period.' },
];

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
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="text-sm font-semibold pr-4">{q}</span>
        <ChevronDown className={cn('h-4 w-4 shrink-0 text-muted-foreground transition-transform', open && 'rotate-180')} />
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
        <p className="pb-5 text-sm text-muted-foreground">{a}</p>
      </motion.div>
    </div>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-primary" />
    ) : (
      <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

/* ─── Page ─── */

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-8 lg:pt-44 lg:pb-12">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Simple, transparent <span className="gradient-text">pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            Start free for 14 days. No credit card required. Choose the plan that fits your team.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/60 p-1 backdrop-blur-sm"
          >
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                !annual ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                annual ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual <span className="ml-1 text-xs opacity-80">(-20%)</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={cn(
                  'relative rounded-2xl border bg-card/50 p-8 backdrop-blur-sm transition-shadow hover:shadow-xl hover:shadow-primary/5',
                  tier.popular ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-border/40'
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <tier.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold">
                    ${annual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                  {annual && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Billed annually (${tier.annualPrice * 12}/yr)
                    </p>
                  )}
                </div>

                <Button
                  className="w-full mb-6"
                  size="lg"
                  variant={tier.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link to={tier.ctaHref}>
                    {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Discounts */}
      <Section className="border-y border-border/30 gradient-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="gradient-text">Bundle & Save</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Use multiple products? Get a discount when you bundle.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {combos.map((combo, i) => (
              <motion.div
                key={combo.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  'relative rounded-xl border bg-card/60 p-5 text-center backdrop-blur-sm transition-shadow hover:shadow-lg',
                  combo.badge ? 'border-primary/50' : 'border-border/40'
                )}
              >
                {combo.badge && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold text-primary-foreground">
                    Best Value
                  </div>
                )}
                <BadgePercent className="mx-auto h-6 w-6 text-primary mb-2" />
                <p className="text-sm font-bold">{combo.name}</p>
                <p className="mt-1 text-2xl font-extrabold gradient-text">{combo.discount} off</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Startup Program */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8 text-center lg:p-12"
          >
            <Sparkles className="mx-auto h-8 w-8 text-primary mb-4" />
            <h3 className="text-2xl font-extrabold">Built for Startups</h3>
            <p className="mt-4 text-muted-foreground">
              Qualifying startups get <span className="font-bold text-foreground">50% off for 12 months</span>.
              Available for companies with less than $5M in funding and fewer than 50 employees.
            </p>
            <Button className="mt-8" size="lg" asChild>
              <Link to="/contact">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Feature Comparison */}
      <Section className="gradient-bg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">
            Feature comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="pb-4 text-left font-semibold">Feature</th>
                  <th className="pb-4 text-center font-semibold">Starter</th>
                  <th className="pb-4 text-center font-semibold">
                    <span className="inline-flex items-center gap-1">
                      Growth <Crown className="h-3 w-3 text-primary" />
                    </span>
                  </th>
                  <th className="pb-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.name} className="border-b border-border/20">
                    <td className="py-4 text-muted-foreground">{row.name}</td>
                    <td className="py-4 text-center">
                      <Cell value={row.starter} />
                    </td>
                    <td className="py-4 text-center">
                      <Cell value={row.growth} />
                    </td>
                    <td className="py-4 text-center">
                      <Cell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">
            Frequently asked questions
          </h2>
          <div>
            {faqs.map((faq) => (
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
                Still have questions?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Our sales team is happy to walk you through the platform and help you find the right
                plan for your team.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button size="xl" asChild>
                  <Link to="/contact">
                    Talk to Sales <ArrowRight className="ml-2 h-4 w-4" />
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
