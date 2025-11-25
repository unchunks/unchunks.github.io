import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data';
import { Gamepad2, Github, Twitter, Menu, X, ArrowLeft } from 'lucide-react';

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
                            <Link to="/projects" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">All Projects</Link>
                            <Link to="/#blog" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">DevLog</Link>
                            <Link to="/contact" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
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
                        <Link to="/projects" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">All Projects</Link>
                        <Link to="/#blog" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">DevLog</Link>
                        <Link to="/contact" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
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

const ProjectDetail = () => {
    const { id } = useParams();
    const project = SITE_DATA.projects.find(p => p.id.toString() === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-900 text-slate-200 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <Link to="/" className="text-emerald-400 hover:text-emerald-300">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navigation />

            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link to="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to All Projects
                </Link>

                <article>
                    <div className={`h-64 rounded-2xl bg-gradient-to-br ${project.imageColor} flex items-center justify-center mb-10 relative overflow-hidden`}>
                        <Gamepad2 className="text-white/20 w-32 h-32 absolute transform -rotate-12" />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white relative z-10 drop-shadow-lg">{project.title}</h1>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="text-sm font-mono bg-slate-800 text-emerald-400 px-3 py-1 rounded border border-slate-700">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-none">
                        {project.details ? project.details : (
                            <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
                        )}
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
