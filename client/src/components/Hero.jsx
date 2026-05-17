import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code, ChefHat } from 'lucide-react';

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pb-0 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-24 w-72 h-72 md:w-[500px] md:h-[500px] bg-green-600/20 rounded-full blur-[90px] md:blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 -right-24 w-72 h-72 md:w-[500px] md:h-[500px] bg-emerald-600/20 rounded-full blur-[90px] md:blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[800px] md:h-[800px] bg-lime-600/10 rounded-full blur-[110px] md:blur-[150px] pointer-events-none" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
                <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div 
                            className="inline-flex items-center px-3.5 py-2 rounded-full glass border-green-500/30 text-green-300 text-xs sm:text-sm font-medium mb-5 md:mb-6 shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" /> Available for work
                        </motion.div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white leading-tight">
                            Hi, I'm <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 drop-shadow-lg">Ayush Tiwari</span>
                        </h1>
                        
                        <div className="min-h-9 md:h-10 mb-5 md:mb-6 flex items-center justify-center md:justify-start">
                            <motion.h3 
                                key={currentRole}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300"
                            >
                                {roles[currentRole]}
                            </motion.h3>
                        </div>

                        <p className="text-slate-400 max-w-xl text-base sm:text-lg mb-8 md:mb-10 leading-relaxed mx-auto md:mx-0">
                            Crafting beautiful, responsive, and scalable web applications. Turning complex problems into elegant, user-centric solutions.
                        </p>

                        <div className="flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center justify-center md:justify-start gap-3 sm:gap-5 mb-9 md:mb-12">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center justify-center gap-2 group"
                            >
                                Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-7 py-3.5 rounded-full glass border border-slate-700 text-slate-200 font-medium hover:bg-slate-800/50 hover:border-green-500/50 transition-all text-center flex items-center justify-center gap-2 group"
                            >
                                View Work
                            </motion.a>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-5 md:gap-6">
                            {[
                                { icon: <Github size={22} />, href: "https://github.com/ayush-3054t" },
                                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/ayush-tiwari-349459296/" },
                                { icon: <Mail size={22} />, href: "mailto:ayushtiwari2034@gmail.com" },
                                { icon: <Code size={22} />, href: "https://www.geeksforgeeks.org/profile/ayushtiwndyy" },
                                { icon: <ChefHat size={22} />, href: "https://www.codechef.com/users/ayushtiwari305" }
                            ].map((social, i) => (
                                <motion.a 
                                    key={i}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    whileHover={{ y: -5, scale: 1.1, color: '#4ade80' }}
                                    className="p-3 rounded-full glass text-slate-400 hover:text-green-400 transition-colors shadow-lg"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="flex-1 flex justify-center md:justify-end w-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500 via-emerald-500 to-lime-500 rounded-full blur-[70px] opacity-30 animate-pulse" />
                        <div className="absolute inset-4 rounded-full border border-white/10 overflow-hidden flex items-center justify-center glass shadow-2xl z-10 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h2 className="text-[88px] sm:text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600 select-none font-mono drop-shadow-2xl">
                                AT
                            </h2>
                        </div>
                        {/* Floating elements */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-5 -right-2 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-24 sm:h-24 glass rounded-2xl flex items-center justify-center z-20 shadow-xl border border-green-500/20"
                        >
                            <span className="text-green-400 font-bold text-base sm:text-xl">React</span>
                        </motion.div>
                        <motion.div 
                            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-5 w-16 h-16 sm:w-20 sm:h-20 glass rounded-full flex items-center justify-center z-20 shadow-xl border border-emerald-500/20"
                        >
                            <span className="text-emerald-400 font-bold text-sm sm:text-lg">Node</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
