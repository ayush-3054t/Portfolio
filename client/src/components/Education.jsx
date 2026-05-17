import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const education = aboutData.education;

const Education = () => {

    return (
        <section id="education" className="py-16 md:py-24 bg-[#030014] relative">
            <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 inline-block mb-4"
                    >
                        Education
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" 
                    />
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-lime-500 h-full opacity-20 top-0 rounded-full" />

                    <div className="space-y-6 md:space-y-16">
                        {education.map((edu, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between group">
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 glass border-2 border-green-500 rounded-full items-center justify-center z-10 group-hover:bg-green-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300">
                                    <GraduationCap size={20} className="text-green-400 group-hover:text-white transition-colors" />
                                </div>

                                {/* Content Container */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-right'} p-[1px] rounded-2xl sm:rounded-3xl relative z-0 group-hover:z-20`}
                                >
                                    <div className="glass border border-white/5 group-hover:border-green-500/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-2 duration-300">
                                        <div className={`flex items-start sm:items-center gap-4 mb-5 sm:mb-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="p-3 bg-green-500/10 rounded-xl text-green-400 hidden md:block shadow-inner group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                <GraduationCap size={26} />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-lime-400 transition-all">
                                                {edu.degree}
                                            </h3>
                                        </div>

                                        <div className={`flex flex-col gap-3 mb-6 text-slate-500 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                                            <div className="flex items-start sm:items-center gap-2.5">
                                                <Award size={18} className="text-emerald-400" />
                                                <span className="font-medium text-slate-300 text-base sm:text-lg">{edu.institution}</span>
                                            </div>
                                            <div className="flex items-center gap-2.5">
                                                <Calendar size={18} className="text-slate-500" />
                                                <span className="text-sm font-semibold tracking-wider text-slate-400 font-mono bg-white/5 px-3 py-1 rounded-full">{edu.year}</span>
                                            </div>
                                        </div>

                                        <div className={`inline-block px-5 py-2.5 rounded-xl border border-lime-500/20 bg-lime-500/10 text-lime-400 font-bold text-sm shadow-sm backdrop-blur-sm ${index % 2 !== 0 ? 'md:float-right' : ''}`}>
                                            {edu.score}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
