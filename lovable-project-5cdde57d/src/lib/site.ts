export const site = {
  name: 'Pranav Dev J',
  tagline: '.NET • Backend • REST APIs',
  location: 'Chennai, India',
  email: 'jpranavdev@gmail.com',
  github: 'https://github.com/pranavdevj',
  linkedin: 'https://www.linkedin.com/in/pranavdevj',
  resume: '/downloads/Pranav_Dev_J_Resume.pdf',
}

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export const interests = [
  '.NET Development',
  'Backend Engineering',
  'REST APIs',
  'Databases',
  'Clean Architecture',
  'Data Analysis',
  'Machine Learning',
]

export const skillGroups = [
  { title: 'Languages', items: ['C#', 'SQL'] },
  {
    title: '.NET & Web',
    items: [
      'ASP.NET Core MVC',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'RESTful APIs',
      'JWT Authentication',
      'DTOs',
      'Razor Views',
    ],
  },
  {
    title: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Data Modeling', 'Query Optimization'],
  },
  { title: 'Developer Tools', items: ['Visual Studio', 'Git', 'GitHub', 'Docker', 'Postman / Scalar'] },
  {
    title: 'Concepts',
    items: ['OOP', 'MVC', 'CRUD', 'Unit Testing basics', 'REST / Web Services basics'],
  },
]

export const experience = [
  {
    company: 'Nissan Automobile',
    role: 'Data Analyst Intern',
    focus: 'SQL, ETL Automation & KPI Dashboards',
    period: 'Feb 2024 – Nov 2024',
    location: 'Chennai, India',
    points: [
      'Wrote and optimized SQL queries on 10,000+ record datasets, improving reporting accuracy and decision turnaround time.',
      'Automated ETL workflows for data ingestion and transformation.',
      'Delivered interactive KPI dashboards that cut manual reporting time by 40%.',
      'Collaborated with product and marketing teams to turn requirements into technical solutions.',
      'Resolved data quality and pipeline issues through systematic troubleshooting.',
    ],
    tags: ['SQL', 'ETL', 'Query Optimization', 'KPI Dashboards', 'Data Quality'],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  stack: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Brand Management REST API',
    category: 'Backend · REST API',
    description:
      'Full CRUD for Brand resources with DTOs separating the public API contract from the internal data model, JWT-secured endpoints, and Docker containerization.',
    stack: ['C#', 'ASP.NET Core Web API', 'EF Core', 'JWT', 'Docker'],
    github: 'https://github.com/pranavdevj',
  },
  {
    title: 'Student Course Management System',
    category: 'Web App · MVC',
    description:
      'CRUD for students and courses on a relational data model, with server-side validation via data annotations and Razor views following the MVC pattern.',
    stack: ['C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server'],
    github: 'https://github.com/pranavdevj',
  },
  {
    title: 'Autonomous Navigation Simulation (NEAT)',
    category: 'Machine Learning · Simulation',
    description:
      '100+ simulation iterations tracking collision rate and distance efficiency, achieving a 35% improvement in obstacle avoidance.',
    stack: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/pranavdevj',
  },
]

export const certifications = [
  {
    title: 'IBM Data Analyst Professional Certificate',
    issuer: 'Coursera',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Coursera / Google',
  },
]

export const education = {
  degree: 'B.Tech Computer Science and Engineering',
  school: 'SRM Institute of Science and Technology',
  location: 'Chennai, India',
  period: '2022 – 2026',
  grade: 'CGPA 8.71 / 10',
}
