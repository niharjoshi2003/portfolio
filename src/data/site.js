const env = import.meta.env

export const site = {
  name: 'Nihar Joshi',
  title: 'Software Developer (Full-Stack + Agentic AI)',
  tagline:
    'Software engineer at Amdocs building agentic automation and full-stack systems with React, Node.js, and Python — including enterprise CRM flows reduced from 8-10 minutes to 97 seconds.',
  email: env.VITE_CONTACT_EMAIL || 'nihar.joshi2003@gmail.com',
  phone: env.VITE_PHONE || '+917058250805',
  location: 'Pune, India',
  github: 'https://github.com/niharjoshi2003',
  linkedin: 'https://www.linkedin.com/in/niharjoshi2003/',
  experienceStartDate: '2025-07-14',
  resumeUrl: '/resume.pdf',
  resumeDownloadName: 'Nihar_Joshi_Software_Engineer_Resume.pdf',
  ogImage: '/og-image.png',
  url: env.VITE_SITE_URL || 'https://portfolio-mu-ten-cx4b4tkk6h.vercel.app/',
}
