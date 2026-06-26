const env = import.meta.env

export const site = {
  name: 'Nihar Joshi',
  title: 'Software Developer (Full-Stack + Agentic AI)',
  tagline:
    'Software developer at Amdocs building full-stack and agentic AI systems with React, Node.js, and Python — shipped portfolio projects, hackathon prototypes, and production automation in active use.',
  email: env.VITE_CONTACT_EMAIL || 'nihar.joshi2003@gmail.com',
  phone: env.VITE_PHONE || '+917058250805',
  location: 'Pune, India',
  github: 'https://github.com/niharjoshi2003',
  linkedin: 'https://www.linkedin.com/in/nihar-joshi-3a1133179/',
  resumeUrl: '/resume.pdf',
  resumeDownloadName: 'Nihar_Joshi_Software_Dev_Resume.pdf',
  ogImage: '/og-image.png',
  url: env.VITE_SITE_URL || 'https://portfolio-mu-ten-cx4b4tkk6h.vercel.app/',
}
