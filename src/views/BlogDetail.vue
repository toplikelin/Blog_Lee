<template>
  <div class="blog-detail-page">
    <div v-if="article" class="article-container">
      <nav class="breadcrumb">
        <router-link to="/blog">← 返回文章列表</router-link>
        <span class="separator">/</span>
        <span class="current">{{ article.category }}</span>
      </nav>

      <article class="article">
        <header class="article-header">
          <h1 class="article-title">{{ article.title }}</h1>
          <div class="article-meta">
            <span class="meta-item">✍️ {{ article.author }}</span>
            <span class="meta-item">📅 {{ article.date }}</span>
          </div>
          <div class="article-tags">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="tag"
              @click="filterByTag(tag)"
            >
              #{{ tag }}
            </span>
          </div>
        </header>

        <div class="article-content">
          <div class="markdown-body" v-html="renderedContent"></div>
        </div>

        <footer class="article-footer">
          <div class="author-card">
            <div class="author-avatar">
              <span>LK</span>
            </div>
            <div class="author-info">
              <h3>关于作者 - 李科林</h3>
              <p>9年前端开发经验，6年Ruby on Rails经验，1年Java经验。热爱技术，专注于Web开发。</p>
              <router-link to="/contact" class="btn btn-outline">联系作者</router-link>
            </div>
          </div>

          <div class="article-actions">
            <button class="action-btn" :class="{ liked: isLiked }" @click="toggleLike">
              <span>{{ isLiked ? '❤️' : '🤍' }}</span>
              <span>{{ isLiked ? '已点赞' : '点赞' }}</span>
              <span class="count">{{ likeCount }}</span>
            </button>
            <button class="action-btn" @click="shareArticle">
              <span>🔗</span>
              <span>分享</span>
            </button>
            <button class="action-btn" @click="scrollTop">
              <span>⬆️</span>
              <span>回到顶部</span>
            </button>
          </div>
        </footer>
      </article>

      <section class="related-articles">
        <h2 class="section-title">相关文章推荐</h2>
        <div class="related-grid">
          <div
            v-for="related in relatedArticles"
            :key="related.id"
            class="related-card"
            @click="goToArticle(related.id)"
          >
            <div class="related-cover" :style="{ background: related.coverImage }">
              <span class="related-category">{{ related.category }}</span>
            </div>
            <div class="related-body">
              <h4>{{ related.title }}</h4>
              <div class="related-meta">
                <span>📅 {{ related.date }}</span>
                <span>👁 {{ related.views }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-else class="not-found">
      <div class="not-found-icon">😕</div>
      <h2>文章未找到</h2>
      <p>抱歉，您访问的文章不存在</p>
      <router-link to="/blog" class="btn btn-primary">返回文章列表</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const isLiked = ref(false)
const likeCount = ref(0)

const article = computed(() => blogStore.getArticleById(route.params.id))

onMounted(() => {
  if (article.value) {
    likeCount.value = article.value.likes
  }
})

const renderedContent = computed(() => {
  if (!article.value) return ''
  
  let content = article.value.content
  
  content = content.replace(/^# (.+)$/gm, '<h1>$1</h1>')
  content = content.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  content = content.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  content = content.replace(/\*(.+?)\*/g, '<em>$1</em>')
  content = content.replace(/`(.+?)`/g, '<code>$1</code>')
  content = content.replace(/```[\s\S]*?```/g, match => {
    const code = match.replace(/```\w*\n?/g, '').replace(/```/g, '')
    return `<pre><code>${code}</code></pre>`
  })
  content = content.replace(/^- (.+)$/gm, '<li>$1</li>')
  content = content.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
  content = content.replace(/\n\n/g, '</p><p>')
  content = `<p>${content}</p>`
  
  return content
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  return blogStore.articles
    .filter(a => a.id !== article.value.id && a.category === article.value.category)
    .slice(0, 3)
})

const toggleLike = () => {
  isLiked.value = !isLiked.value
  likeCount.value += isLiked.value ? 1 : -1
}

const shareArticle = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
    alert('文章链接已复制到剪贴板！')
  }
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const filterByTag = (tag) => {
  router.push(`/tags/${tag}`)
}

const goToArticle = (id) => {
  router.push(`/blog/${id}`)
}
</script>

<style scoped>
.blog-detail-page {
  padding-top: 80px;
  padding-bottom: 4rem;
}

.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.breadcrumb a {
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.breadcrumb a:hover {
  color: var(--primary-color);
}

.separator {
  color: var(--text-light);
}

.current {
  color: var(--primary-color);
}

.article {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.article-header {
  padding: 2.5rem 2rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.article-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
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

.article-tags .tag {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.article-tags .tag:hover {
  background: var(--primary-color);
  color: white;
}

.article-content {
  padding: 2rem;
}

.markdown-body {
  line-height: 1.8;
  color: var(--text-primary);
  font-size: 1.0625rem;
}

.markdown-body :deep(h1) {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border-color);
}

.markdown-body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.75rem 0 0.75rem;
}

.markdown-body :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
}

.markdown-body :deep(p) {
  margin-bottom: 1rem;
  text-align: justify;
}

.markdown-body :deep(ul) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.markdown-body :deep(li) {
  margin-bottom: 0.5rem;
}

.markdown-body :deep(strong) {
  font-weight: 600;
  color: var(--text-primary);
}

.markdown-body :deep(code) {
  background: var(--bg-tertiary);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9em;
  color: #e11d48;
}

.markdown-body :deep(pre) {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: 1.25rem 0;
}

.markdown-body :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}

.article-footer {
  padding: 1.5rem 2rem 2rem;
  border-top: 1px solid var(--border-color);
}

.author-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  margin-bottom: 1.5rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
}

.author-info h3 {
  font-size: 1rem;
  margin-bottom: 0.375rem;
}

.author-info p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin-bottom: 0.75rem;
}

.article-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.action-btn:hover {
  background: var(--bg-tertiary);
}

.action-btn.liked {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.action-btn .count {
  background: var(--bg-tertiary);
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
}

.related-articles {
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.related-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}

.related-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.related-cover {
  height: 120px;
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
}

.related-category {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}

.related-body {
  padding: 1rem;
}

.related-body h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-meta {
  display: flex;
  gap: 0.75rem;
  font-size: 0.8125rem;
  color: var(--text-light);
}

.not-found {
  text-align: center;
  padding: 6rem 2rem;
}

.not-found-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.not-found h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.not-found p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .article-header {
    padding: 2rem 1.5rem 1.25rem;
  }

  .article-title {
    font-size: 1.5rem;
  }

  .article-content {
    padding: 1.5rem;
  }

  .article-footer {
    padding: 1.25rem 1.5rem 1.5rem;
  }

  .author-card {
    flex-direction: column;
    text-align: center;
  }

  .article-actions {
    justify-content: center;
  }
}
</style>
