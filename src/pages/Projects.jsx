import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data';
import { Gamepad2, Github, Twitter, Menu, X, ArrowLeft, ExternalLink } from 'lucide-react';

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
                            <Link to="/projects" className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</Link>
                            <Link to="/blog" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">DevLog</Link>
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
                        <Link to="/projects" className="text-emerald-400 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                        <Link to="/blog" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">DevLog</Link>
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

const Projects = () => {
    const [selectedTag, setSelectedTag] = useState('All');

    // Get unique tags
    const allTags = ['All', ...new Set(SITE_DATA.projects.flatMap(project => project.tags))];

    // Filter projects by tag
    const filteredProjects = selectedTag === 'All'
        ? SITE_DATA.projects
        : SITE_DATA.projects.filter(project => project.tags.includes(selectedTag));

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navigation />

            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
                        <Gamepad2 className="text-emerald-500" /> All Projects
                    </h1>
                    <p className="text-slate-400 text-lg">ゲーム開発プロジェクトの作品集</p>
                </div>

                {/* Tag Filter */}
                {allTags.length > 1 && (
                    <div className="flex flex-wrap gap-3 mb-12">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedTag === tag
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id}
                                className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                                <div className={`h-48 bg-gradient-to-br ${project.imageColor} flex items-center justify-center relative overflow-hidden`}>
                                    <Gamepad2
                                        className="text-white/20 w-32 h-32 absolute transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag, i) => (
                                            <span key={i}
                                                className="text-xs font-mono bg-slate-800 text-emerald-400 px-2 py-1 rounded border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {project.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    {project.link.startsWith('/') ? (
                                        <Link to={project.link}
                                            className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-400 transition-colors">
                                            View Details
                                            <ExternalLink size={14} />
                                        </Link>
                                    ) : (
                                        <a href={project.link}
                                            className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-400 transition-colors">
                                            View Details
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-lg">このカテゴリーにはプロジェクトがありません。</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Projects;
