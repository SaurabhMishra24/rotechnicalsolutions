import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import { Clock, User, Calendar, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | RO Technical Solutions`,
    description: post.excerpt,
    keywords: post.seoKeywords
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-inter">
          <Link href="/" className="hover:text-cyan-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-cyan-600">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 dark:text-white font-semibold truncate">{post.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
          {post.category}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-slate-500 font-inter border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" /> {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 prose dark:prose-invert font-inter text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4 whitespace-pre-line">
        {post.content}
      </article>

      {/* Article Author & Lead Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold font-poppins text-cyan-400">Need Professional RO Assistance in Nagpur?</h3>
            <p className="text-xs text-slate-300 font-inter">Our certified technicians reach your doorstep in 30 to 45 minutes.</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a
              href={`tel:${DUMMY_CONTACT.phoneRaw}`}
              className="py-2.5 px-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              Call {DUMMY_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
