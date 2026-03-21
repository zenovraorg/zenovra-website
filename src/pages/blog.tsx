import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const posts = [
  {
    category: 'Product',
    categoryColor: 'bg-indigo-500/10 text-indigo-400',
    title: 'Introducing Zenovra Hiring 2.0',
    excerpt:
      'A complete redesign of our hiring platform with drag-and-drop pipelines, a new applicant portal, and AI-powered candidate matching.',
    author: 'Alex Mercer',
    initials: 'AM',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Engineering',
    categoryColor: 'bg-emerald-500/10 text-emerald-400',
    title: 'How We Built Our Real-Time Analytics Engine',
    excerpt:
      'A deep dive into the architecture behind Zenovra Analytics, including our use of ClickHouse, Kafka, and a custom query optimizer.',
    author: 'Nina Patel',
    initials: 'NP',
    date: 'Mar 10, 2026',
    readTime: '12 min read',
  },
  {
    category: 'Product',
    categoryColor: 'bg-indigo-500/10 text-indigo-400',
    title: 'The Future of Enterprise CRM',
    excerpt:
      'Why we believe the next generation of CRM needs to be AI-native, automation-first, and built for the way modern sales teams actually work.',
    author: 'Jordan Kim',
    initials: 'JK',
    date: 'Mar 5, 2026',
    readTime: '8 min read',
  },
  {
    category: 'Engineering',
    categoryColor: 'bg-emerald-500/10 text-emerald-400',
    title: 'Why We Chose MongoDB for Scale',
    excerpt:
      'Our evaluation process for choosing a primary database, the trade-offs we considered, and how MongoDB handles our document-heavy workloads.',
    author: 'Elif Osman',
    initials: 'EO',
    date: 'Feb 28, 2026',
    readTime: '10 min read',
  },
  {
    category: 'Company',
    categoryColor: 'bg-amber-500/10 text-amber-400',
    title: 'Zenovra Tech Raises Series A',
    excerpt:
      'We are thrilled to announce our $18M Series A led by Benchmark. Here is what we plan to do with the funding and our vision for the future.',
    author: 'Alex Mercer',
    initials: 'AM',
    date: 'Feb 20, 2026',
    readTime: '4 min read',
  },
  {
    category: 'Product',
    categoryColor: 'bg-indigo-500/10 text-indigo-400',
    title: '5 Tips for Better Hiring Workflows',
    excerpt:
      'Practical advice on structuring your hiring pipeline, reducing time-to-fill, and improving candidate experience using Zenovra Hiring.',
    author: 'Jordan Kim',
    initials: 'JK',
    date: 'Feb 12, 2026',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
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
            <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            Product updates, engineering deep dives, and company news from the Zenovra team.
          </motion.p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl border border-border/40 bg-card/50 overflow-hidden backdrop-blur-sm transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Colored header bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary/60 to-primary/20" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                        post.categoryColor
                      )}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {post.initials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold">{post.author}</p>
                        <p className="text-[10px] text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
