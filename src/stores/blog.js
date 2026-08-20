import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    articles: [
      {
        id: 1,
        title: 'Vue 3 Composition API 深度解析',
        summary: '深入理解Vue 3的Composition API，掌握setup函数、响应式引用和副作用清理等核心概念。',
        content: '',
        category: '前端框架',
        tags: ['Vue', 'JavaScript', '前端'],
        author: '李科林',
        date: '2024-03-15',
        coverImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        likes: 89
      },
      {
        id: 2,
        title: 'Flexbox布局完全指南',
        summary: '全面掌握CSS Flexbox布局，从基础到高级技巧，让你的响应式设计更加优雅。',
        content: '',
        category: 'CSS',
        tags: ['CSS', 'Flexbox', '响应式'],
        author: '李科林',
        date: '2024-03-10',
        coverImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        likes: 156
      },
      {
        id: 3,
        title: 'Ruby on Rails 性能优化实战',
        summary: '从数据库查询到前端渲染，全方位优化Rails应用性能，打造流畅的用户体验。',
        content: '',
        category: '后端开发',
        tags: ['Ruby', 'Rails', '性能优化'],
        author: '李科林',
        date: '2024-02-28',
        coverImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        likes: 67
      },
      {
        id: 4,
        title: 'JavaScript设计模式精要',
        summary: '深入探讨JavaScript中常用的设计模式，提升代码质量和可维护性。',
        content: '',
        category: 'JavaScript',
        tags: ['JavaScript', '设计模式', '架构'],
        author: '李科林',
        date: '2024-02-20',
        coverImage: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        likes: 134
      },
      {
        id: 5,
        title: '响应式设计：从移动端到桌面端',
        summary: '学习如何使用媒体查询、流体网格和弹性图片，创建适配所有设备的响应式网站。',
        content: '',
        category: 'CSS',
        tags: ['CSS', '响应式', '移动端'],
        author: '李科林',
        date: '2024-02-10',
        coverImage: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        likes: 98
      },
      {
        id: 6,
        title: 'Node.js异步编程详解',
        summary: '从回调到Promise再到async/await，全面理解JavaScript的异步编程模型。',
        content: '',
        category: 'Node.js',
        tags: ['Node.js', '异步', 'JavaScript'],
        author: '李科林',
        date: '2024-01-25',
        coverImage: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        likes: 76
      }
    ],

    skills: [
      { name: 'Vue.js', level: 95, color: '#42b883' },
      { name: 'JavaScript', level: 92, color: '#f7df1e' },
      { name: 'CSS/Sass', level: 90, color: '#2965f1' },
      { name: 'Ruby on Rails', level: 85, color: '#cc342d' },
      { name: 'Node.js', level: 82, color: '#339933' },
      { name: 'Java', level: 75, color: '#ea2d2e' },
      { name: 'HTML5', level: 95, color: '#e34f26' },
      { name: 'MySQL', level: 80, color: '#4479a1' }
    ],

    experiences: [
      {
        period: '2018.1 - 2018.7',
        title: '前端工程师',
        company: '菲迪克网络工程管理系统 ',
        description: '负责公司核心产品的前端架构设计和开发，主导多个大型项目从0到1的建设，带领团队完成技术选型和代码规范制定。',
        highlights: ['Vue.js', 'JQUERY', 'bootstrap', 'echarts', 'vue2全家桶', 'AngularJS']
      },
      {
        period: '2018.8 - 2025.3',
        title: 'Ruby on Rails 全栈工程师',
        company: '四川和生视界医药技术开发有限公司+数采小博科技发展有限公司',
        description: '参与公司SaaS平台的后端开发，使用Rails框架构建高可用的API服务，设计合理的数据库结构，实现业务逻辑。',
        highlights: ['Ruby on Rails', 'h5', 'JQUERY', 'Docker', 'bootstrap3', 'redis', 'rabbitMq', 'echarts' ,'vue2全家桶', 'AngularJS', 'node.js']
      },
      {
        period: '2024.10 - 2025.3',
        title: 'Java 后端工程师',
        company: '数采小博科技发展有限公司',
        description: '参与支付系统的开发和维护，使用Spring Boot构建微服务，保证系统的高可用性和数据一致性。',
        highlights: ['Spring Boot', 'MySQL', '消息队列', '分布式系统']
      }
    ]
  }),

  getters: {
    getArticlesByCategory: (state) => (category) => {
      return state.articles.filter(article => article.category === category)
    },
    getArticlesByTag: (state) => (tag) => {
      return state.articles.filter(article => article.tags.includes(tag))
    },
    getArticleById: (state) => (id) => {
      return state.articles.find(article => article.id === Number(id))
    },
    getAllCategories: (state) => {
      return [...new Set(state.articles.map(article => article.category))]
    },
    getAllTags: (state) => {
      const tags = new Set()
      state.articles.forEach(article => {
        article.tags.forEach(tag => tags.add(tag))
      })
      return [...tags]
    },
    sortedArticles: (state) => {
      return [...state.articles].sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  }
})
