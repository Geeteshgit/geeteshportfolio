interface Data {
    email: string,
    linkedin: string,
    resume: string
    github: string,
    leetcode: string,
    CGPA: number
}

interface Projects {
    image: string,
    caption: string,
    name: string,
    link: string,
    github: string,
    description: string,
    features: string[],
    technologies: string[]
}

export const myData: Data = {
    email: 'geetesh472@gmail.com',
    linkedin: 'geeteshdalal',
    resume: 'Geetesh_Resume.pdf',
    github: 'Geeteshgit',
    leetcode: 'Geetesh_Dalal',
    CGPA: 8.94
}

export const projects: Projects[] = [
    {
        image: './projects/campushive.jpg',
        caption: 'A student-driven platform designed to solve daily campus life challenges by enabling seamless communication, collaboration, and connections among students.',
        name: 'CampusHive',
        link: 'https://campushive-snowy.vercel.app/',
        github: 'https://github.com/Geeteshgit/CampusHive.git',
        description: 'CampusHive is a platform aimed at solving common campus challenges, enhancing communication, and connecting students for various needs like collaboration, carpooling, and social interactions.',
        features: [
            'Used Socket.IO to enable real-time public chat and private messaging for seamless peer-to-peer campus communication'
            , 
            'Implemented secure authentication using JWT and integrated Google OAuth for flexible login/signup options.'
            ,
            'Implemented a carpool feature that allows students to share rides, helping reduce travel costs by up to 70%.'
            ,
            'Lost & Found feature improving item recovery with searchable listings.'
            ,
            'Project collaboration posts to connect students for academic and technical teamwork.'
            ,
            'Student-to-student car rental listings for easy short-term vehicle access.'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO']
    }
]
