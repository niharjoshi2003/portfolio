export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'blue-electric',
    icon: 'monitor',
    skills: [
      { name: 'React.js (hooks, components, state)', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS / CSS frameworks', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'purple-neon',
    icon: 'server',
    skills: [
      { name: 'Node.js (async patterns)', level: 85 },
      { name: 'Express.js (REST, middleware)', level: 85 },
      { name: 'RESTful API design', level: 80 },
      { name: 'Auth (JWT, sessions)', level: 80 },
      { name: 'WebSockets / Socket.IO', level: 80 },
    ],
  },
  {
    id: 'data',
    label: 'Database & Cloud',
    color: 'cyan-glow',
    icon: 'database',
    skills: [
      { name: 'MySQL (design, indexing)', level: 80 },
      { name: 'AWS (Lambda, DynamoDB, S3)', level: 75 },
      { name: 'Supabase (Postgres + Auth)', level: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    color: 'indigo-soft',
    icon: 'wrench',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel & Netlify', level: 80 },
    ],
  },
]
