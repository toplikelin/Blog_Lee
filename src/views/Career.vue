<template>
  <div class="career-page">
    <section class="career-hero">
      <div class="container">
        <h1 class="page-title">职业经历</h1>
        <p class="page-subtitle">多年的技术积累与成长历程</p>
      </div>
    </section>

    <section class="career-stats">
      <div class="container">
        <div class="experience-stats">
          <div class="exp-card exp-primary">
            <div class="exp-number">9<span>年</span></div>
            <div class="exp-type">前端开发工程师</div>
            <div class="exp-desc">精通Vue.js、React等主流框架</div>
          </div>
          <div class="exp-card exp-secondary">
            <div class="exp-number">6<span>年</span></div>
            <div class="exp-type">Ruby on Rails工程师</div>
            <div class="exp-desc">全栈开发，API设计与实现</div>
          </div>
          <div class="exp-card exp-tertiary">
            <div class="exp-number">1<span>年</span></div>
            <div class="exp-type">Java工程师</div>
            <div class="exp-desc">Spring Boot微服务开发</div>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">工作经历时间线</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(exp, index) in experiences" :key="index">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-period">{{ exp.period }}</div>
              <h3 class="timeline-title">{{ exp.title }}</h3>
              <div class="timeline-company">{{ exp.company }}</div>
              <p class="timeline-desc">{{ exp.description }}</p>
              <div class="timeline-highlights">
                <span class="highlight-tag" v-for="tag in exp.highlights" :key="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-detail">
      <div class="container">
        <h2 class="section-title">技术栈详情</h2>
        <div class="skill-categories">
          <div class="skill-category" v-for="category in skillCategories" :key="category.name">
            <div class="category-header" :style="{ background: category.color }">
              <span class="category-icon">{{ category.icon }}</span>
              <h3>{{ category.name }}</h3>
            </div>
            <div class="category-content">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-years">{{ skill.years }}年经验</span>
                </div>
                <div class="skill-level-bar">
                  <div class="level-fill" :style="{ width: skill.level + '%', background: category.color }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="work-philosophy">
      <div class="container">
        <h2 class="section-title">工作理念</h2>
        <div class="philosophy-grid">
          <div class="philosophy-card">
            <div class="philosophy-icon">🎨</div>
            <h3>注重用户体验</h3>
            <p>每一个交互细节都经过精心打磨，追求极致的用户体验。理解用户需求，创造有价值的产品。</p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon">🏗️</div>
            <h3>架构思维</h3>
            <p>在编码前思考架构，注重代码的可维护性和可扩展性。遵循设计原则，编写高质量代码。</p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon">⚡</div>
            <h3>性能优化</h3>
            <p>关注性能指标，从加载速度到运行时性能都追求卓越。使用各种工具和技巧优化应用。</p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon">🤝</div>
            <h3>团队协作</h3>
            <p>积极参与团队讨论，分享技术经验。相信团队力量大于个人，推动团队共同成长。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useBlogStore } from '../stores/blog'

const blogStore = useBlogStore()
const experiences = blogStore.experiences

const skillCategories = [
  {
    name: '前端开发',
    icon: '🎨',
    color: '#42b883',
    skills: [
      { name: 'Vue.js', years: 5, level: 95 },
      { name: 'JavaScript/TypeScript', years: 9, level: 95 },
      { name: 'CSS/Sass/Less', years: 9, level: 90 }
    ]
  },
  {
    name: '后端开发',
    icon: '⚙️',
    color: '#cc342d',
    skills: [
      { name: 'Ruby on Rails', years: 6, level: 85 },
      { name: 'Node.js/Express', years: 4, level: 82 },
      { name: 'Java/Spring Boot', years: 1, level: 75 },
      { name: 'MySQL', years: 6, level: 80 }
    ]
  },
  {
    name: '工程化工具',
    icon: '🛠️',
    color: '#f59e0b',
    skills: [
      { name: 'Git/GitHub', years: 8, level: 92 },
      { name: 'Webpack/Vite', years: 5, level: 85 },
      { name: 'Docker', years: 3, level: 78 },
      { name: 'CI/CD', years: 4, level: 80 }
    ]
  },
  {
    name: '其他技能',
    icon: '📚',
    color: '#8b5cf6',
    skills: [
      { name: 'RESTful API设计', years: 6, level: 88 },
      { name: '微服务架构', years: 3, level: 82 },
      { name: 'Redis缓存', years: 5, level: 85 },
      { name: '消息队列', years: 3, level: 78 }
    ]
  }
]
</script>

<style scoped>
.career-page {
  padding-top: 64px;
}

.career-hero {
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.page-subtitle {
  font-size: 1.125rem;
  opacity: 0.9;
}

.career-stats {
  padding: 3rem 0;
  background: #f8fafc;
}

.experience-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.exp-card {
  padding: 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all var(--transition-base);
}

.exp-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.exp-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.exp-secondary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.exp-tertiary {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.exp-number {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.exp-number span {
  font-size: 1.5rem;
}

.exp-type {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.exp-desc {
  opacity: 0.9;
  font-size: 0.9375rem;
}

.timeline-section {
  padding: 4rem 0;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
}

.marker-dot {
  position: absolute;
  left: -8px;
  top: 8px;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: var(--shadow-md);
}

.marker-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--border-color);
}

.timeline-item:last-child .marker-line {
  display: none;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.timeline-period {
  display: inline-block;
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.timeline-company {
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.timeline-desc {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.timeline-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.highlight-tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
}

.skills-detail {
  padding: 4rem 0;
  background: #f8fafc;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  color: white;
}

.category-icon {
  font-size: 1.5rem;
}

.category-header h3 {
  font-size: 1.125rem;
}

.category-content {
  padding: 1.5rem;
}

.skill-item {
  margin-bottom: 1rem;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: var(--text-primary);
}

.skill-years {
  color: var(--text-light);
  font-size: 0.8125rem;
}

.skill-level-bar {
  height: 6px;
  background: var(--border-color);
  border-radius: 3px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease-out;
}

.work-philosophy {
  padding: 4rem 0;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.philosophy-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: all var(--transition-base);
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.philosophy-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.philosophy-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.philosophy-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }

  .exp-number {
    font-size: 2.5rem;
  }
}
</style>
