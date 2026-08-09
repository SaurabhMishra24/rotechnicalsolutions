import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';

export const metadata = {
  title: 'RO Water Purification Knowledge Hub & Maintenance Guides | Nagpur',
  description: 'Expert guides on RO water purifier maintenance, TDS levels, filter replacement warning signs, and AMC savings by senior water engineers.'
};

export default function BlogDirectoryPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <BookOpen className="w-4 h-4 text-cyan-400" /> Expert Technical Articles
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            Water Purification Knowledge Hub
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Learn practical tips on maintaining water purifiers, understanding TDS science, and protecting family health.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-inter">
                <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-bold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-cyan-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-inter leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-cyan-600">
              <span className="flex items-center gap-1.5 font-normal text-slate-500">
                <User className="w-3.5 h-3.5" /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <EmergencyCTA />
    </div>
  );
}
