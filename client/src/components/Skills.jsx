import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Wrench } from 'lucide-react';
import { skillsData as skills } from '../data/portfolioData';

const iconMap = {
    "Programming Languages": <Code2 size={28} className="text-green-400" />,
    "Frontend Technologies": <Layout size={28} className="text-lime-400" />,
    "Backend Technologies": <Terminal size={28} className="text-emerald-400" />,
    "Databases": <Database size={28} className="text-indigo-400" />,
    "Tools and Platforms": <Wrench size={28} className="text-sky-400" />,
    "Core Concepts": <Database size={28} className="text-violet-400" />,
};

const Skills = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section id="skills" className="py-16 md:py-24 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 inline-block mb-4"
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" 
                    />
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill._id}
                            variants={itemVariants}
                            className="group p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-green-500/30 transition-all duration-500 shadow-xl hover:-translate-y-2 relative"
                        >
                            <div className="absolute inset-0 bg-green-500/5 blur-xl group-hover:bg-green-500/20 transition-colors duration-500 rounded-2xl sm:rounded-3xl" />
                            <div className="relative glass h-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/5 group-hover:border-green-500/20 transition-colors">
                                <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                                    <div className="bg-[#030014]/50 p-3 sm:p-4 rounded-2xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                        {iconMap[skill.category] || <Code2 size={24} className="text-green-400" />}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-lime-400 transition-all">{skill.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.split(',').map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-800/50 hover:bg-green-600/20 text-slate-300 border border-white/5 hover:border-green-500/30 hover:text-green-300 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm"
                                        >
                                            {item.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
