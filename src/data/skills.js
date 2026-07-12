const skills = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'SCSS/Sass', level: 85, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'frontend' },
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 35, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'React Router', level: 85, category: 'frontend' },
  { name: 'Context API', level: 85, category: 'frontend' },
  { name: 'Axios', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'REST APIs', level: 85, category: 'backend' },
  { name: 'JWT Authentication', level: 80, category: 'backend' },
  { name: 'HTTP Cookies', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'Mongoose', level: 80, category: 'backend' },
  { name: 'MySQL', level: 75, category: 'backend' },
  { name: 'Puppeteer', level: 75, category: 'backend' },

  // AI / ML
  { name: 'Python', level: 75, category: 'ai/ml' },
  { name: 'Pandas', level: 50, category: 'ai/ml' },
  { name: 'NumPy', level: 55, category: 'ai/ml' },
  { name: 'Machine Learning Basics', level: 45, category: 'ai/ml' },
  { name: 'Google Gemini API', level: 80, category: 'ai/ml' },
  { name: 'Prompt Engineering', level: 85, category: 'ai/ml' },
  { name: 'AI Integration', level: 80, category: 'ai/ml' },

  // Tools
  { name: 'Git', level: 75, category: 'tools' },
  { name: 'GitHub', level: 75, category: 'tools' },
  { name: 'Postman', level: 80, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'npm', level: 85, category: 'tools' },
  { name: 'Vite', level: 80, category: 'tools' },
  { name: 'Streamlit', level: 45, category: 'tools' }
]

const categories = [
  'all',
  'frontend',
  'backend',
  'ai/ml',
  'tools'
]

export { skills, categories }
