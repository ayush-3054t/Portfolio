// Static fallback data — used when the backend API is unreachable
export const aboutData = {
    name: "Ayush Tiwari",
    title: "Full Stack Developer",
    summary:
        "Aspiring Full Stack Developer with hands-on experience in building scalable and responsive web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Strong understanding of RESTful API development, authentication, CRUD operations, and database integration. Passionate about writing clean, efficient code and developing end-to-end solutions.",
    email: "ayushtiwari2034@gmail.com",
    github: "https://github.com/ayush-3054t",
    linkedin: "https://www.linkedin.com/in/ayush-tiwari-349459296/",
    leetcode: "https://leetcode.com/u/ayush_tiwari3054",
    gfg: "https://www.geeksforgeeks.org/profile/ayushtiwndyy",
    codechef: "https://www.codechef.com/users/ayushtiwari305",
    education: [
        {
            degree: "Bachelor of Technology (B.Tech) in Information Technology",
            institution: "ABES Engineering College, Ghaziabad",
            year: "2023 - 2027",
            score: "CGPA: 7.0 / 10",
        },
        {
            degree: "Senior Secondary (Class 12), PCM",
            institution: "Central Public School, Azamgarh",
            year: "2020 - 2022",
            score: "Percentage: 72%",
        },
        {
            degree: "High School (Class 10)",
            institution: "Central Public School, Azamgarh",
            year: "2018 - 2020",
            score: "Percentage: 73%",
        },
    ],
    certifications: [
        "AI-Machine Learning Engineer Certification (2026) — Reliance Foundation Skilling Academy: Completed 150-hour training covering supervised and unsupervised learning, model evaluation, and foundational AI concepts.",
        "Front-End Development Certification (2026) — Reliance Foundation: Gained hands-on experience in HTML5, CSS3, JavaScript, and responsive web design.",
        "Data Structures and Algorithms (2025) — Infosys Springboard: Covered arrays, recursion, trees, sorting algorithms, and time and space complexity analysis.",
        "Oracle AI Foundation Certification (2024): Learned AI fundamentals, machine learning basics, and ethical AI practices.",
    ],
};

export const projectsData = [
    {
        _id: "1",
        title: "Safe Ledger (Banking Management)",
        description: [
            "Developed a comprehensive MERN stack banking management system.",
            "Features include secure user authentication, real-time account creation, deposit and withdrawal functionalities, and detailed transaction history tracking.",
            "Engineered with a robust Express.js backend and MongoDB for reliable data persistence, alongside an intuitive React frontend.",
        ],
        technologies: "MERN Stack, Tailwind CSS",
        year: "2025",
        github: "https://github.com/ayush-3054t/SafeLedger",
        link: "https://safe-ledger-pi.vercel.app/",
    },
    {
        _id: "2",
        title: "HireBoard (Job Management Portal)",
        description: [
            "Designed and built a full-stack job portal connecting job seekers with recruiters.",
            "Includes dedicated dashboards, job posting capabilities, streamlined application workflows, and user profile management.",
            "Leveraged the MERN stack to deliver a scalable and performant application.",
        ],
        technologies: "MERN Stack, Tailwind CSS",
        year: "2025",
        github: "https://github.com/ayush-3054t/HireBoard",
        link: "https://hire-board-theta.vercel.app/",
    },
    {
        _id: "3",
        title: "Shopsy (E-Commerce Platform)",
        description: [
            "Built a fully responsive e-commerce platform with a dynamic shopping interface.",
            "Allows users to browse products, filter by categories, and manage a shopping cart.",
            "Implemented using React.js and styled with Tailwind CSS for a seamless user experience across devices.",
        ],
        technologies: "React.js, Tailwind CSS",
        year: "2024",
        github: "https://github.com/ayush-3054t/E-Commmerce_Website",
        link: "https://shopsy-3054.netlify.app/",
    },
];

export const skillsData = [
    { _id: "1", category: "Programming Languages", items: "JavaScript (ES6+), C++, SQL" },
    { _id: "2", category: "Frontend Technologies", items: "HTML5, CSS3, React.js, Redux, Tailwind CSS, Bootstrap" },
    { _id: "3", category: "Backend Technologies", items: "Node.js, Express.js" },
    { _id: "4", category: "Databases", items: "MongoDB, Mongoose" },
    { _id: "5", category: "Tools and Platforms", items: "Git, GitHub, VS Code, Postman, Figma" },
    { _id: "6", category: "Core Concepts", items: "MERN Stack, RESTful APIs, Authentication, CRUD Operations, API Integration" },
];
