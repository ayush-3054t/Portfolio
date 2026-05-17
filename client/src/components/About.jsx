import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Target } from 'lucide-react';
import { aboutData as about } from '../data/portfolioData';

const About = () => {

    return (
        <section id="about" className="py-24 bg-[#030014] relative z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 inline-block mb-4">
                        About Me
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" 
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-slate-400 leading-relaxed text-lg mb-10">{about.summary}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4 glass p-6 rounded-2xl border border-white/5 transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                                <div className="bg-green-500/10 p-4 rounded-xl text-green-400 shadow-inner">
                                    <User size={26} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-500 font-medium mb-1">Name</h4>
                                    <p className="text-slate-200 font-semibold">{about.name}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 glass p-6 rounded-2xl border border-white/5 transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                                <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-400 shadow-inner">
                                    <Code size={26} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-500 font-medium mb-1">Role</h4>
                                    <p className="text-slate-200 font-semibold">{about.title}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl animate-pulse" />
                        <div className="relative glass border border-white/10 p-10 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                                <Target className="text-green-400" size={28} />
                                Certifications
                            </h3>
                            <ul className="space-y-6">
                                {about.certifications.map((cert, index) => (
                                    <li key={index} className="flex gap-4 group">
                                        <div className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all flex-shrink-0" />
                                        <p className="text-slate-400 text-[15px] leading-relaxed group-hover:text-slate-300 transition-colors">{cert}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
