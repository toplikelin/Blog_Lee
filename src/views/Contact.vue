<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <h1 class="page-title">联系方式</h1>
        <p class="page-subtitle">期待与您的交流与合作</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-info-section">
          <h2 class="section-title">直接联系</h2>
          <div class="info-cards">
            <div class="info-card email">
              <div class="card-icon">📧</div>
              <div class="card-content">
                <h3>邮箱</h3>
                <p>1020496019@qq.com</p>
              </div>
              <span class="card-copy" @click="copyText('1020496019@qq.com', '邮箱地址')">复制</span>
            </div>

            <div class="info-card phone">
              <div class="card-icon">📱</div>
              <div class="card-content">
                <h3>电话</h3>
                <p>15208311957</p>
              </div>
              <span class="card-copy" @click="copyText('15208311957', '电话号码')">复制</span>
            </div>

            <div class="info-card wechat">
              <div class="card-icon">💬</div>
              <div class="card-content">
                <h3>微信</h3>
                <p>账号：15208311957</p>
              </div>
              <span class="card-copy" @click="copyText('15208311957', '微信号')">复制</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const copyText = async (text, label) => {
  try {
    await navigator.clipboard.writeText(text)
    alert(`${label}已复制到剪贴板！`)
  } catch {
    alert(`${label}：${text}`)
  }
}
</script>

<style scoped>
.contact-page {
  padding-top: 64px;
}

.contact-hero {
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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

.contact-content {
  padding: 3rem 0;
}

.contact-info-section {
  max-width: 560px;
  margin: 0 auto;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  text-decoration: none;
  color: var(--text-primary);
}

.info-card:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-md);
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border-radius: var(--radius-lg);
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-card.email .card-icon {
  background: rgba(37, 99, 235, 0.1);
}

.info-card.phone .card-icon {
  background: rgba(16, 185, 129, 0.1);
}

.info-card.wechat .card-icon {
  background: rgba(7, 193, 96, 0.1);
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: 0.9375rem;
  color: var(--text-light);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.card-content p {
  font-size: 1.0625rem;
  font-weight: 500;
  color: var(--text-primary);
}

.card-copy {
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.info-card.email .card-copy {
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
}

.info-card.email .card-copy:hover {
  background: #2563eb;
  color: white;
}

.info-card.phone .card-copy {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.info-card.phone .card-copy:hover {
  background: #10b981;
  color: white;
}

.info-card.wechat .card-copy {
  background: rgba(7, 193, 96, 0.1);
  color: #07c160;
}

.info-card.wechat .card-copy:hover {
  background: #07c160;
  color: white;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .info-card {
    padding: 1rem;
  }
}
</style>
