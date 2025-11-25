import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data';
import { Gamepad2, Github, Twitter, Menu, X, Mail, ShoppingBag, ExternalLink } from 'lucide-react';

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
                            <Link to="/blog" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">DevLog</Link>
                            <Link to="/contact" className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
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
                        <Link to="/blog" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">DevLog</Link>
                        <Link to="/contact" className="text-emerald-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
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

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navigation />

            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
                        <Mail className="text-emerald-500" /> Contact & Links
                    </h1>
                    <p className="text-slate-400 text-lg">SNSやストアへのリンク一覧です。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Socials */}
                    <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Github className="text-emerald-400" /> Socials
                        </h2>
                        <div className="space-y-4">
                            <a href={SITE_DATA.profile.social.github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group">
                                <span className="flex items-center gap-3 font-medium text-slate-200">
                                    <Github size={20} /> GitHub
                                </span>
                                <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400" />
                            </a>
                            <a href={SITE_DATA.profile.social.twitter} target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group">
                                <span className="flex items-center gap-3 font-medium text-slate-200">
                                    <Twitter size={20} /> Twitter (X)
                                </span>
                                <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400" />
                            </a>
                        </div>
                    </div>

                    {/* Stores */}
                    <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <ShoppingBag className="text-emerald-400" /> Stores
                        </h2>
                        <div className="space-y-4">
                            {SITE_DATA.profile.stores?.steam && (
                                <a href={SITE_DATA.profile.stores.steam} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group">
                                    <span className="flex items-center gap-3 font-medium text-slate-200">
                                        <Gamepad2 size={20} /> Steam
                                    </span>
                                    <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400" />
                                </a>
                            )}
                            {SITE_DATA.profile.stores?.itchio && (
                                <a href={SITE_DATA.profile.stores.itchio} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group">
                                    <span className="flex items-center gap-3 font-medium text-slate-200">
                                        <Gamepad2 size={20} /> Itch.io
                                    </span>
                                    <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400" />
                                </a>
                            )}
                             {/* Add more stores as needed */}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
