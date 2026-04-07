const env = import.meta.env

export const site = {
  name: 'Nihar Joshi',
  title: 'Full-Stack Developer',
  tagline:
    'Full-stack developer with 1.5+ years of hands-on production experience building scalable web apps with React, Node.js, and cloud.',
  email: env.VITE_CONTACT_EMAIL || 'nihar.joshi2003@gmail.com',
  phone: env.VITE_PHONE || '+917058250805',
  location: 'Pune, India',
  github: 'https://github.com/niharjoshi2003',
  linkedin: 'https://www.linkedin.com/in/nihar-joshi',
  resumeUrl: '/resume.pdf',
  resumeDownloadName: 'Nihar_Joshi_Software_Dev_Resume.pdf',
  ogImage: '/og-image.png',
  url: env.VITE_SITE_URL || 'https://niharjoshi.vercel.app',
}
