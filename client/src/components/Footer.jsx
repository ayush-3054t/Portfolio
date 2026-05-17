import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#030014] py-10 md:py-12 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-7 md:gap-8">

                    <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2">
                        <p className="text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} Ayush Tiwari. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-6">
                        <motion.a 
                            whileHover={{ y: -3 }}
                            href="https://github.com/ayush-3054t" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-3 glass rounded-full text-slate-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all shadow-lg"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -3 }}
                            href="https://linkedin.com/in/ayush-tiwari" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-3 glass rounded-full text-slate-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all shadow-lg"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -3 }}
                            href="mailto:ayushtiwari2034@gmail.com" 
                            className="p-3 glass rounded-full text-slate-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all shadow-lg"
                        >
                            <Mail size={20} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -3 }}
                            href="https://www.geeksforgeeks.org/profile/ayushtiwndyy" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-3 glass rounded-full text-slate-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all shadow-lg"
                        >
                            <Code size={20} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -3 }}
                            href="https://www.codechef.com/users/ayushtiwari305" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-3 glass rounded-full text-slate-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all shadow-lg"
                        >
                            <ChefHat size={20} />
                        </motion.a>
                    </div>

                    <div>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center group"
                        >
                            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
