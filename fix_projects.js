const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'client', 'src', 'components');
const projectsPath = path.join(srcDir, 'Projects.jsx');
let content = fs.readFileSync(projectsPath, 'utf-8');

const target = `                            <div className="p-8 flex-grow flex flex-col relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-150 group-hover:text-green-500 transition-all duration-700 pointer-events-none">
                                <FolderGit2 size={100} />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                    <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <Code2 size={28} />
                                    </div>
                                </div>`;

const replacement = `                            <div className="p-8 flex-grow flex flex-col relative z-10">
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
                                </div>`;

content = content.replace(target, replacement);

fs.writeFileSync(projectsPath, content);
console.log('Projects fixed');
