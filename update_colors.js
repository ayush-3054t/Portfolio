const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'client', 'src', 'components');

const replaceInFile = (filename, replacements) => {
    const filePath = path.join(srcDir, filename);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf-8');
    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filename}`);
};

const commonReplacements = [
    ['from-blue-', 'from-green-'],
    ['to-cyan-', 'to-lime-'],
    ['via-purple-', 'via-emerald-'],
    ['to-purple-', 'to-emerald-'],
    ['text-blue-', 'text-green-'],
    ['text-purple-', 'text-emerald-'],
    ['text-cyan-', 'text-lime-'],
    ['bg-blue-', 'bg-green-'],
    ['bg-purple-', 'bg-emerald-'],
    ['bg-cyan-', 'bg-lime-'],
    ['border-blue-', 'border-green-'],
    ['border-purple-', 'border-emerald-'],
    ['border-cyan-', 'border-lime-'],
    ['ring-blue-', 'ring-green-'],
    ["color: '#60a5fa'", "color: '#4ade80'"],
    ['shadow-[0_0_15px_rgba(59,130,246', 'shadow-[0_0_15px_rgba(34,197,94'],
    ['shadow-[0_0_20px_rgba(59,130,246', 'shadow-[0_0_20px_rgba(34,197,94'],
    ['shadow-[0_0_25px_rgba(139,92,246', 'shadow-[0_0_25px_rgba(16,185,129'],
    ['shadow-[0_0_30px_rgba(139,92,246', 'shadow-[0_0_30px_rgba(16,185,129'],
    ['shadow-[0_0_40px_rgba(59,130,246', 'shadow-[0_0_40px_rgba(34,197,94'],
    ['shadow-[0_0_10px_rgba(59,130,246', 'shadow-[0_0_10px_rgba(34,197,94'],
];

const filesToUpdate = [
    'Navbar.jsx', 'Hero.jsx', 'About.jsx', 'Skills.jsx', 'Education.jsx', 'Contact.jsx', 'Footer.jsx'
];

filesToUpdate.forEach(file => {
    replaceInFile(file, commonReplacements);
});

// For Projects.jsx, I will do a more customized replacement to remove the hover overlay completely 
// and make links visible by default.
const projectsPath = path.join(srcDir, 'Projects.jsx');
let projectsContent = fs.readFileSync(projectsPath, 'utf-8');

// Apply common replacements first
for (const [search, replace] of commonReplacements) {
    projectsContent = projectsContent.split(search).join(replace);
}

// Ensure FolderGit2 is imported
if (!projectsContent.includes('FolderGit2')) {
    projectsContent = projectsContent.replace('Code2 } from', 'Code2, FolderGit2 } from');
}

// Make projects card look great default
projectsContent = projectsContent.replace(
    'className="group relative overflow-hidden rounded-2xl glass border-white/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] flex flex-col"',
    'className="group relative overflow-hidden rounded-2xl glass border-white/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:-translate-y-2 flex flex-col bg-gradient-to-b from-[#111928] to-[#0a0f18]"'
);

// Add the background icon and new header
projectsContent = projectsContent.replace(
    '<div className="flex justify-between items-center mb-6">',
    `<div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-150 group-hover:text-green-500 transition-all duration-700 pointer-events-none">
                                <FolderGit2 size={100} />
                            </div>
                            <div className="flex justify-between items-center mb-6">`
);

// Add the github/live links to header
projectsContent = projectsContent.replace(
    `                                    <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <Code2 size={28} />
                                    </div>
                                </div>`,
    `                                    <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-sm border border-green-500/20">
                                        <Code2 size={24} />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-400 transition-colors" title="GitHub Repository">
                                                <Github size={22} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-400 transition-colors" title="Live Preview">
                                                <ExternalLink size={22} />
                                            </a>
                                        )}
                                    </div>
                                </div>`
);

// Remove the hover overlay entirely
projectsContent = projectsContent.replace(
    /\{\/\* Hover Overlay \*\/\}[\s\S]*?<\/div>\s*<\/motion\.div>/,
    '</motion.div>'
);

fs.writeFileSync(projectsPath, projectsContent);
console.log('Updated Projects.jsx');

