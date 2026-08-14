<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <p class="hero-greeting">你好，我是</p>
            <h1 class="hero-name">李科林</h1>
            <h2 class="hero-title">全栈开发工程师</h2>
            <p class="hero-description">
              9年前端开发经验 · 6年Ruby on Rails经验 · 1年Java经验<br />
              热爱技术，追求卓越，致力于打造高质量的Web应用
            </p>
            <div class="hero-actions">
              <router-link to="/blog" class="btn btn-primary">
                阅读我的博客
                <span>→</span>
              </router-link>
              <router-link to="/contact" class="btn btn-outline">
                联系我
              </router-link>
            </div>
          </div>
          <div class="hero-avatar">
            <div class="avatar-container">
              <div class="avatar-ring"></div>
              <div class="avatar">
                <span class="avatar-initials">LK</span>
              </div>
              <div class="floating-badge badge-1">Vue.js</div>
              <div class="floating-badge badge-2">Ruby</div>
              <div class="floating-badge badge-3">Node.js</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-background">
        <div class="gradient-circle circle-1"></div>
        <div class="gradient-circle circle-2"></div>
        <div class="gradient-circle circle-3"></div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">🚀</div>
            <div class="stat-value">9<span>+</span></div>
            <div class="stat-label">年前端经验</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💎</div>
            <div class="stat-value">6<span>+</span></div>
            <div class="stat-label">年Rails经验</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">☕</div>
            <div class="stat-value">1<span>+</span></div>
            <div class="stat-label">年Java经验</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📝</div>
            <div class="stat-value">{{ articleCount }}<span>+</span></div>
            <div class="stat-label">篇技术文章</div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <h2 class="section-title">个人信息</h2>
        <div class="about-grid">
          <div class="about-info">
            <div class="info-item">
              <span class="info-label">姓名</span>
              <span class="info-value">李科林</span>
            </div>
            <div class="info-item">
              <span class="info-label">性别</span>
              <span class="info-value">男</span>
            </div>
            <div class="info-item">
              <span class="info-label">年龄</span>
              <span class="info-value">32岁</span>
            </div>
            <div class="info-item">
              <span class="info-label">民族</span>
              <span class="info-value">汉</span>
            </div>
            <div class="info-item full-width">
              <span class="info-label">教育背景</span>
              <span class="info-value">电子科技大学成都学院 · 集成电路设计与集成系统嵌入式专业 · 本科</span>
            </div>
            <div class="info-item">
              <span class="info-label">邮箱</span>
              <a href="mailto:1020496019@qq.com" class="info-value link">1020496019@qq.com</a>
            </div>
            <div class="info-item">
              <span class="info-label">电话</span>
              <a href="tel:15208311957" class="info-value link">15208311957</a>
            </div>
          </div>
          <div class="about-highlights">
            <div class="highlight-card">
              <div class="highlight-icon">🎯</div>
              <h3>专注技术</h3>
              <p>深耕前端领域9年，同时掌握后端开发，具备全栈视野</p>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">🔧</div>
              <h3>实践经验</h3>
              <p>参与多个大型项目，涵盖电商、SaaS、金融等领域</p>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">📚</div>
              <h3>持续学习</h3>
              <p>保持技术敏感度，关注行业动态，不断精进</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">技能展示</h2>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in skills" :key="skill.name">
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div
                class="skill-progress"
                :style="{ width: skill.level + '%', background: skill.color }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="latest-articles">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">最新文章</h2>
          <router-link to="/blog" class="view-all">
            查看全部文章
            <span>→</span>
          </router-link>
        </div>
        <div class="articles-grid">
          <div
            class="article-card"
            v-for="article in latestArticles"
            :key="article.id"
            @click="goToArticle(article.id)"
          >
            <div class="article-cover" :style="{ background: article.coverImage }">
              <span class="article-category">{{ article.category }}</span>
            </div>
            <div class="article-body">
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-summary">{{ article.summary }}</p>
              <div class="article-meta">
                <span class="meta-item">📅 {{ article.date }}</span>
                <span class="meta-item">❤️ {{ article.likes }}</span>
              </div>
              <div class="article-tags">
                <span class="tag" v-for="tag in article.tags.slice(0, 3)" :key="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const router = useRouter()
const blogStore = useBlogStore()

const skills = computed(() => blogStore.skills)
const articleCount = computed(() => blogStore.articles.length)
const latestArticles = computed(() => blogStore.sortedArticles.slice(0, 3))

const goToArticle = (id) => {
  router.push(`/blog/${id}`)
}
</script>

<style scoped>
.home-page {
  padding-top: 64px;
}

.hero-section {
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 4rem 0;
}

.hero-text {
  flex: 1;
}

.hero-greeting {
  font-size: 1.125rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.hero-title {
  font-size: 1.75rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary span,
.view-all span {
  transition: transform var(--transition-fast);
}

.btn-primary:hover span,
.view-all:hover span {
  transform: translateX(4px);
}

.hero-avatar {
  flex-shrink: 0;
}

.avatar-container {
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px dashed var(--primary-color);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

.avatar {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.3);
}

.avatar-initials {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.25rem;
}

.floating-badge {
  position: absolute;
  padding: 0.375rem 0.875rem;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--text-primary);
  animation: float 3s ease-in-out infinite;
}

.badge-1 {
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.badge-2 {
  bottom: 15%;
  right: -15%;
  animation-delay: 1s;
}

.badge-3 {
  bottom: -5%;
  left: 20%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.gradient-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.circle-1 {
  width: 400px;
  height: 400px;
  background: var(--primary-color);
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 300px;
  height: 300px;
  background: #10b981;
  bottom: -50px;
  left: -50px;
}

.circle-3 {
  width: 200px;
  height: 200px;
  background: #f59e0b;
  top: 50%;
  left: 50%;
}

.stats-section {
  padding: 4rem 0;
  background: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.stat-value span {
  font-size: 1.5rem;
}

.stat-label {
  margin-top: 0.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
}

.about-section {
  padding: 4rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.about-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background: white;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  min-width: calc(50% - 0.5rem);
}

.info-item.full-width {
  min-width: 100%;
}

.info-label {
  font-size: 0.875rem;
  color: var(--text-light);
  font-weight: 500;
}

.info-value {
  font-size: 1.0625rem;
  color: var(--text-primary);
  font-weight: 500;
}

.info-value.link {
  color: var(--primary-color);
}

.info-value.link:hover {
  text-decoration: underline;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.highlight-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(5px);
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.highlight-card h3 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.highlight-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.skills-section {
  padding: 4rem 0;
  background: white;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  color: var(--text-primary);
}

.skill-percent {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.skill-bar {
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-out;
}

.latest-articles {
  padding: 4rem 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.view-all {
  color: var(--primary-color);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.article-card {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.article-cover {
  height: 180px;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
}

.article-category {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-primary);
}

.article-body {
  padding: 1.5rem;
}

.article-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  line-height: 1.4;
}

.article-summary {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8125rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  font-size: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
}

@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }

  .hero-name {
    font-size: 3rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .avatar-container {
    width: 240px;
    height: 240px;
  }

  .avatar {
    width: 160px;
    height: 160px;
  }

  .avatar-initials {
    font-size: 3rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .info-item {
    min-width: calc(50% - 0.5rem);
  }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: 2.5rem;
  }

  .hero-title {
    font-size: 1.375rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-item {
    min-width: 100%;
  }

  .section-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .about-highlights {
    flex-direction: column;
  }
}
</style>
