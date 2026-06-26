const env = import.meta.env

export const site = {
  name: 'Nihar Joshi',
  title: 'Full-Stack Developer',
  tagline:
    'Full-stack engineer at Amdocs building React + Node + Python systems — 5 portfolio projects, hackathon prototypes, and production automation in active use.',
  email: env.VITE_CONTACT_EMAIL || 'nihar.joshi2003@gmail.com',
  phone: env.VITE_PHONE || '+917058250805',
  location: 'Pune, India',
  github: 'https://github.com/niharjoshi2003',
  linkedin: 'https://www.linkedin.com/in/nihar-joshi-3a1133179/',
  resumeUrl: '/resume.pdf',
  resumeDownloadName: 'Nihar_Joshi_Software_Dev_Resume.pdf',
  ogImage: '/og-image.png',
  url: env.VITE_SITE_URL || 'https://niharjoshi.vercel.app',
}
