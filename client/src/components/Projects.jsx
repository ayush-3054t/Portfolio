import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, FolderGit2 } from 'lucide-react';
import { projectsData as projects } from '../data/portfolioData';

const Projects = () => {

    return (
        <section id="projects" className="py-24 bg-[#030014] relative">
            <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 inline-block mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl glass border-white/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:-translate-y-2 flex flex-col bg-gradient-to-b from-[#111928] to-[#0a0f18]"
                        >
                            <div className="p-8 flex-grow flex flex-col relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-150 group-hover:text-green-500 transition-all duration-700 pointer-events-none">
                                    <FolderGit2 size={100} />
                                </div>
                                <div className="flex justify-between items-center mb-6 relative z-20">
                                    <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-sm border border-green-500/20">
                                        <Code2 size={24} />
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-green-500/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all" title="GitHub Repository">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-green-500/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all" title="Live Preview">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-lime-400 transition-all duration-300">
                                    {project.title}
                                </h3>

                                <div className="flex-grow">
                                    <ul className="space-y-3 mb-8 text-slate-400 text-sm leading-relaxed">
                                        {project.description.map((desc, idx) => (
                                            <li key={idx} className="flex gap-3 items-start">
                                                <span className="text-green-500 mt-1">▹</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2 text-sm">
                                        {project.technologies.split(',').map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-green-500/10 rounded-lg border border-green-500/20 text-green-300 font-medium text-xs backdrop-blur-sm shadow-sm group-hover:border-green-500/40 transition-colors">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
