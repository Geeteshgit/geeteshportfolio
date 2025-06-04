interface Data {
    email: string,
    linkedin: string,
    resume: string
    github: string,
    leetcode: string,
    CGPA: number
}

export interface Projects {
    image?: string,
    caption?: string,
    name?: string,
    link?: string,
    github?: string,
    description?: string,
    features?: string[],
    technologies?: string[],
}

export const myData: Data = {
    email: 'geeteshdalal.work@gmail.com',
    linkedin: 'geeteshdalal',
    resume: 'Geetesh_Resume.pdf',
    github: 'Geeteshgit',
    leetcode: 'Geetesh_Dalal',
    CGPA: 8.94
}

export const projects: Projects[] = [
    {
        image: 'codev.png',
        caption: 'A powerful platform for developers to showcase their coding profiles, projects, and skills.',
        name: 'Codev',
        link: 'https://codev-ten.vercel.app/',
        github: 'https://github.com/Geeteshgit/Codev.git',
        description: 'Codev is a developer portfolio and discovery platform where users showcase their skills, projects, and coding profiles (like GitHub, LeetCode, etc.). It features personalized profiles and project highlights to help developers stand out and get discovered.',
        features: [
            'Personalized portfolios to showcase coding profiles like LeetCode, Codeforces, GitHub, and more.',
            'Project section with descriptions, live links, and technologies used.',
            'Explore and discover developers or get discovered by recruiters based on skills.',
            'JWT-based authentication for secure login and session management.',
            'Image uploads handled via Cloudinary.',
            'State management using Redux for smooth user experience.'
        ],
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'MongoDB', 'Redux', 'Framer Motion']
    },
    {
        image: 'campushive.png',
        caption: 'A student-driven platform solving daily campus challenges through seamless communication and collaboration.',
        name: 'CampusHive',
        link: 'https://campushive-snowy.vercel.app/',
        github: 'https://github.com/Geeteshgit/CampusHive.git',
        description: 'CampusHive is a platform aimed at solving common campus challenges, enhancing communication, and connecting students for various needs like collaboration, carpooling, and social interactions.',
        features: [
            'Real-time public chat and private DMs using Socket.IO.'
            , 
            'Secure login with JWT and Google OAuth.'
            ,
            'Carpool posts to reduce travel costs.'
            ,
            'Lost & Found with searchable listings.'
            ,
            'Project posts to connect for collaborations.'
            ,
            'Peer-to-peer car rental listings.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'Socket.IO']
    },
    {
        image: 'portfolio.png',
        caption: 'A sleek full stack developer portfolio to showcase skills, projects, and coding profiles.',
        name: 'Personal Portfolio',
        link: 'https://geeteshdalal.vercel.app/',
        github: 'https://github.com/Geeteshgit/geeteshportfolio.git',
        description: 'A fully responsive web developer portfolio designed to highlight personal projects, technical stack, and online presence across coding platforms. It features project cards with visuals, direct links to GitHub, LinkedIn, and LeetCode, and a downloadable resume—built for professional presentation and easy sharing.',
        features: [
            'Built with Next.js and TypeScript for fast performance.'
            , 
            'Styled using Tailwind CSS for full responsiveness across devices.'
            ,
            'Enhanced with smooth animations using Framer Motion.'
        ],
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    }
]

export const featuredProjects: Projects[] = [
    {
        image: 'codev.png',
        caption: 'A powerful platform for developers to showcase their coding profiles, projects, and skills.',
        name: 'Codev',
        link: 'https://codev-ten.vercel.app/',
        github: 'https://github.com/Geeteshgit/Codev.git',
        description: 'Codev is a developer portfolio and discovery platform where users showcase their skills, projects, and coding profiles (like GitHub, LeetCode, etc.). It features personalized profiles and project highlights to help developers stand out and get discovered.',
        features: [
            'Personalized portfolios to showcase coding profiles like LeetCode, Codeforces, GitHub, and more.',
            'Project section with descriptions, live links, and technologies used.',
            'Explore and discover developers or get discovered by recruiters based on skills.',
            'JWT-based authentication for secure login and session management.',
            'Image uploads handled via Cloudinary.',
            'State management using Redux for smooth user experience.'
        ],
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'MongoDB', 'Redux', 'Framer Motion']
    },
    {
        image: 'campushive.png',
        caption: 'A student-driven platform solving daily campus challenges through seamless communication and collaboration.',
        name: 'CampusHive',
        link: 'https://campushive-snowy.vercel.app/',
        github: 'https://github.com/Geeteshgit/CampusHive.git',
        description: 'CampusHive is a platform aimed at solving common campus challenges, enhancing communication, and connecting students for various needs like collaboration, carpooling, and social interactions.',
        features: [
            'Real-time public chat and private DMs using Socket.IO.'
            , 
            'Secure login with JWT and Google OAuth.'
            ,
            'Carpool posts to reduce travel costs.'
            ,
            'Lost & Found with searchable listings.'
            ,
            'Project posts to connect for collaborations.'
            ,
            'Peer-to-peer car rental listings.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'Socket.IO']
    },
    {
        image: 'portfolio.png',
        caption: 'A sleek full stack developer portfolio to showcase skills, projects, and coding profiles.',
        name: 'Personal Portfolio',
        link: 'https://geeteshdalal.vercel.app/',
        github: 'https://github.com/Geeteshgit/geeteshportfolio.git',
        description: 'A fully responsive web developer portfolio designed to highlight personal projects, technical stack, and online presence across coding platforms. It features project cards with visuals, direct links to GitHub, LinkedIn, and LeetCode, and a downloadable resume—built for professional presentation and easy sharing.',
        features: [
            'Built with Next.js and TypeScript for fast performance.'
            , 
            'Styled using Tailwind CSS for full responsiveness across devices.'
            ,
            'Enhanced with smooth animations using Framer Motion.'
        ],
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    }
];