import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data';
import { Gamepad2, Github, Twitter, Menu, X, Calendar, Code, ArrowLeft } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <Gamepad2 className="w-6 h-6 text-emerald-400" />
                            <span className="font-bold text-xl text-white tracking-wider font-mono">
                                {SITE_DATA.profile.name}
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/#projects" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</Link>
                            <Link to="/blog" className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">DevLog</Link>
                            <Link to="/#contact" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/#projects" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                        <Link to="/blog" className="text-emerald-400 block px-3 py-2 rounded-md text-base font-medium">DevLog</Link>
                        <Link to="/#contact" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-12 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <Gamepad2 className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-white text-lg">{SITE_DATA.profile.name}</span>
                    </div>
                    <p className="text-slate-500 text-sm">Building worlds, debugging reality.</p>
                </div>

                <div className="flex gap-6">
                    <a href={SITE_DATA.profile.social.github} className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={SITE_DATA.profile.social.twitter} className="text-slate-400 hover:text-blue-400 transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>

                <div className="text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} {SITE_DATA.profile.name}
                </div>
            </div>
        </footer>
    );
};

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(SITE_DATA.posts.map(post => post.category))];

    // Filter posts by category
    const filteredPosts = selectedCategory === 'All'
        ? SITE_DATA.posts
        : SITE_DATA.posts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navigation />

            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link to="/#blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
                        <Code className="text-emerald-500" /> DevLog Archive
                    </h1>
                    <p className="text-slate-400 text-lg">開発の記録と学びを共有しています。</p>
                </div>

                {/* Category Filter */}
                {categories.length > 1 && (
                    <div className="flex flex-wrap gap-3 mb-8">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Posts List */}
                {filteredPosts.length > 0 ? (
                    <div className="space-y-6">
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="group p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                                    <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
                                        <Calendar size={16} /> {post.date}
                                    </div>
                                    <span className="text-sm font-medium px-3 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-600 w-fit">
                                        {post.category}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                                    {post.title}
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    {post.content}
                                </p>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-lg">まだ記事がありません。</p>
                        <p className="text-slate-500 mt-2">新しい記事は <code className="bg-slate-800 px-2 py-1 rounded">src/content/posts/</code> で追加できます。</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
