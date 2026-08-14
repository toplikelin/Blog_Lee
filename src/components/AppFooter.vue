<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">关于我</h3>
          <p class="footer-desc">
            李科林，9年前端开发经验，热爱技术，追求卓越。专注于Vue.js、Ruby on Rails等技术栈。
          </p>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">快速链接</h3>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/career">职业经历</router-link></li>
            <li><router-link to="/blog">博客文章</router-link></li>
            <li><router-link to="/contact">联系方式</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">联系方式</h3>
          <ul class="footer-contact">
            <li>
              <span class="contact-icon">📧</span>
              <a href="mailto:1020496019@qq.com">1020496019@qq.com</a>
            </li>
            <li>
              <span class="contact-icon">📱</span>
              <a href="tel:15208311957">15208311957</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">关注我</h3>
          <div class="social-links">
            <a href="#" class="social-link" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.995-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="social-link" title="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} 李科林. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  color: #cbd5e1;
  margin-top: 4rem;
}

.footer-container {
  padding: 4rem 1.5rem 0;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding-bottom: 3rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  border-radius: 1px;
}

.footer-desc {
  line-height: 1.8;
  color: #94a3b8;
  font-size: 0.9375rem;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer-links a {
  color: #94a3b8;
  transition: all var(--transition-fast);
  display: inline-block;
}

.footer-links a:hover {
  color: white;
  transform: translateX(4px);
}

.footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-icon {
  font-size: 1.125rem;
}

.footer-contact a {
  color: #94a3b8;
  transition: color var(--transition-fast);
}

.footer-contact a:hover {
  color: white;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: #94a3b8;
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
  text-align: center;
  color: #64748b;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-section {
    min-width: 100%;
  }
}
</style>
