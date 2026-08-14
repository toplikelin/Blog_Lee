<template>
  <div class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <h1 class="page-title">博客文章</h1>
        <p class="page-subtitle">分享技术心得与开发经验</p>
      </div>
    </section>

    <section class="blog-content">
      <div class="container">
        <div class="blog-layout">
          <aside class="sidebar">
            <div class="sidebar-section">
              <h3 class="sidebar-title">搜索文章</h3>
              <div class="search-box">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="搜索文章标题或内容..."
                  class="search-input"
                />
                <span class="search-icon">🔍</span>
              </div>
            </div>

            <div class="sidebar-section">
              <h3 class="sidebar-title">文章分类</h3>
              <ul class="category-list">
                <li
                  v-for="category in categories"
                  :key="category"
                  :class="{ active: selectedCategory === category }"
                  @click="filterByCategory(category)"
                >
                  <span>{{ category }}</span>
                  <span class="count">{{ getCategoryCount(category) }}</span>
                </li>
                <li
                  :class="{ active: selectedCategory === null }"
                  @click="clearFilter"
                >
                  <span>全部文章</span>
                  <span class="count">{{ articles.length }}</span>
                </li>
              </ul>
            </div>

            <div class="sidebar-section">
              <h3 class="sidebar-title">热门标签</h3>
              <div class="tag-cloud">
                <span
                  v-for="tag in tags"
                  :key="tag"
                  class="tag"
                  :class="{ active: selectedTag === tag }"
                  @click="filterByTag(tag)"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </aside>

          <main class="articles-main">
            <div class="filter-info" v-if="selectedCategory || selectedTag">
              <span>
                筛选: 
                <strong v-if="selectedCategory">分类 - {{ selectedCategory }}</strong>
                <strong v-if="selectedTag">标签 - {{ selectedTag }}</strong>
              </span>
              <button class="clear-btn" @click="clearFilter">清除筛选</button>
            </div>

            <div class="articles-list" v-if="filteredArticles.length > 0">
              <article
                v-for="article in filteredArticles"
                :key="article.id"
                class="article-item"
                @click="goToArticle(article.id)"
              >
                <div class="article-cover" :style="{ background: article.coverImage }">
                  <span class="article-category">{{ article.category }}</span>
                </div>
                <div class="article-content">
                  <h2 class="article-title">{{ article.title }}</h2>
                  <p class="article-summary">{{ article.summary }}</p>
                  <div class="article-tags">
                    <span class="tag" v-for="tag in article.tags" :key="tag">{{ tag }}</span>
                  </div>
                  <div class="article-footer">
                    <div class="article-meta">
                      <span>📅 {{ article.date }}</span>
                    </div>
                    <span class="read-more">阅读全文 →</span>
                  </div>
                </div>
              </article>
            </div>

            <div class="no-articles" v-else>
              <div class="no-articles-icon">📭</div>
              <h3>没有找到相关文章</h3>
              <p>尝试修改搜索条件或清除筛选</p>
              <button class="btn btn-primary" @click="clearFilter">查看全部文章</button>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const searchQuery = ref('')
const selectedCategory = ref(route.params.category || null)
const selectedTag = ref(route.params.tag || null)

const articles = computed(() => blogStore.sortedArticles)
const categories = computed(() => blogStore.getAllCategories)
const tags = computed(() => blogStore.getAllTags)

const filteredArticles = computed(() => {
  let result = articles.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(
      article =>
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query)
    )
  }

  if (selectedCategory.value) {
    result = result.filter(article => article.category === selectedCategory.value)
  }

  if (selectedTag.value) {
    result = result.filter(article => article.tags.includes(selectedTag.value))
  }

  return result
})

const getCategoryCount = (category) => {
  return blogStore.getArticlesByCategory(category).length
}

const filterByCategory = (category) => {
  selectedCategory.value = category
  selectedTag.value = null
  router.push(`/categories/${category}`)
}

const filterByTag = (tag) => {
  selectedTag.value = tag
  selectedCategory.value = null
  router.push(`/tags/${tag}`)
}

const clearFilter = () => {
  selectedCategory.value = null
  selectedTag.value = null
  searchQuery.value = ''
  router.push('/blog')
}

const goToArticle = (id) => {
  router.push(`/blog/${id}`)
}
</script>

<style scoped>
.blog-page {
  padding-top: 64px;
}

.blog-hero {
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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

.blog-content {
  padding: 3rem 0;
}

.blog-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
}

.sidebar {
  position: sticky;
  top: 80px;
  align-self: start;
}

.sidebar-section {
  background: white;
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.sidebar-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.search-box {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  transition: border-color var(--transition-fast);
}

.search-input:focus {
  border-color: var(--primary-color);
}

.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
}

.category-list {
  list-style: none;
}

.category-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0.75rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 0.9375rem;
}

.category-list li:hover {
  background: var(--bg-tertiary);
}

.category-list li.active {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  font-weight: 500;
}

.count {
  background: var(--bg-tertiary);
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}

.category-list li.active .count {
  background: var(--primary-color);
  color: white;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-cloud .tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tag-cloud .tag:hover,
.tag-cloud .tag.active {
  background: var(--primary-color);
  color: white;
}

.articles-main {
  min-width: 0;
}

.filter-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-secondary);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  font-size: 0.9375rem;
}

.filter-info strong {
  color: var(--primary-color);
}

.clear-btn {
  background: transparent;
  color: var(--text-secondary);
  text-decoration: underline;
  font-size: 0.875rem;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-item {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  display: grid;
  grid-template-columns: 240px 1fr;
}

.article-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.article-cover {
  height: 100%;
  min-height: 200px;
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

.article-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.article-summary {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.article-tags .tag {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  font-size: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.article-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8125rem;
  color: var(--text-light);
}

.read-more {
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9375rem;
}

.no-articles {
  text-align: center;
  padding: 4rem 2rem;
}

.no-articles-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.no-articles h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.no-articles p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

@media (max-width: 1024px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .sidebar-section {
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .article-item {
    grid-template-columns: 1fr;
  }

  .article-cover {
    min-height: 140px;
  }

  .article-meta {
    flex-direction: column;
    gap: 0.25rem;
  }

  .sidebar {
    grid-template-columns: 1fr;
  }
}
</style>
