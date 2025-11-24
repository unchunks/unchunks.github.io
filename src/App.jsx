import React, { useState, useEffect } from 'react';
import { Gamepad2, Code, Terminal, ExternalLink, Github, Twitter, ChevronRight, Calendar, Tag, Menu, X } from 'lucide-react';

import { SITE_DATA } from './data';

/**
* ==============================================
* 以下、アプリケーションのコンポーネント
* (デザインやロジックを変更したい場合以外は触らなくてOK)
* ==============================================
*/

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Gamepad2 className="w-6 h-6 text-emerald-400" />
                        <span className="font-bold text-xl text-white tracking-wider font-mono">
                            {SITE_DATA.profile.name}
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#projects"
                                className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                            <a href="#blog"
                                className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">DevLog</a>
                            <a href="#contact"
                                className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
                            {isOpen ?
                                <X /> :
                                <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#projects"
                            className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#blog"
                            className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">DevLog</a>
                        <a href="#contact"
                            className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono mb-6 border border-emerald-500/20">
                        <Terminal size={14} />
                        <span>System.Ready()</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Level Up Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                            Game Experience
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                        {SITE_DATA.profile.bio}
                    </p>
                    <div className="flex gap-4">
                        <a href="#projects"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:translate-y-[-2px] flex items-center gap-2">
                            View Projects
                            <ChevronRight size={18} />
                        </a>
                        <a href={SITE_DATA.profile.social.github} target="_blank" rel="noopener noreferrer"
                            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all border border-slate-700 flex items-center gap-2">
                            <Github size={18} /> GitHub
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <div
                        className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000">
                    </div>
                    <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-mono text-sm text-slate-300 space-y-2">
                            <p><span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span>
                                &#123;</p>
                            <p className="pl-4"><span className="text-purple-400">public</span> <span
                                className="text-blue-400">string</span> Name = <span
                                    className="text-orange-300">"{SITE_DATA.profile.name}"</span>;</p>
                            <p className="pl-4"><span className="text-purple-400">public</span> <span
                                className="text-blue-400">string[]</span> Skills = &#123;</p>
                            <p className="pl-8"><span className="text-orange-300">"Unity"</span>, <span
                                className="text-orange-300">"Unreal"</span>, <span className="text-orange-300">"C#"</span>,
                                <span className="text-orange-300">"C++"</span></p>
                            <p className="pl-4">&#125;;</p>
                            <p className="pl-4"><span className="text-purple-400">void</span> <span
                                className="text-yellow-300">CreateGame</span>() &#123;</p>
                            <p className="pl-8 text-slate-500">// Magic happens here</p>
                            <p className="pl-4">&#125;</p>
                            <p>&#125;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-white">Selected Projects</h2>
                <div className="h-px bg-slate-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SITE_DATA.projects.map((project) => (
                    <div key={project.id}
                        className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
                        <div className={`h-48 bg-gradient-to-br ${project.imageColor} flex items-center justify-center relative
                overflow-hidden`}>
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
                            <a href={project.link}
                                className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-400 transition-colors">
                                View Details
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Blog = () => {
    return (
        <section id="blog"
            className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-slate-900/50 rounded-3xl mb-20 border border-slate-800/50">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Code className="text-emerald-500" /> DevLog
                </h2>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">View All Logs &rarr;</a>
            </div>

            <div className="space-y-4">
                {SITE_DATA.posts.map((post) => (
                    <div key={post.id}
                        className="group p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 transition-all cursor-pointer">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                                <Calendar size={12} /> {post.date}
                            </div>
                            <span
                                className="text-xs font-medium px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700 w-fit">
                                {post.category}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors mb-2">
                            {post.title}
                        </h3>
                        <p className="text-slate-400 text-sm line-clamp-2">
                            {post.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-12">
            <div
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
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

const App = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navigation />
            <Hero />
            <Projects />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
