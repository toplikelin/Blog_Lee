<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">LK</span>
        <span class="logo-text">李科林</span>
      </router-link>

      <nav class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="active"
          @click="closeMenu"
        >
          <span class="nav-text">{{ item.name }}</span>
        </router-link>
      </nav>

      <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
        <span class="hamburger" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const menuItems = [
  { path: '/', name: '首页' },
  { path: '/career', name: '职业经历' },
  { path: '/blog', name: '博客文章' },
  { path: '/contact', name: '联系方式' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.header.scrolled {
  box-shadow: var(--shadow-md);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
  transition: transform var(--transition-fast);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 600;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-weight: 500;
  transition: all var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(37, 99, 235, 0.05);
}

.nav-link.active {
  color: var(--primary-color);
  background: rgba(37, 99, 235, 0.1);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.nav-icon {
  font-size: 1.125rem;
}

.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.menu-toggle:hover {
  background: var(--bg-tertiary);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 24px;
  height: 20px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-menu {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: white;
    padding: 1rem;
    gap: 0.25rem;
    box-shadow: var(--shadow-md);
    transform: translateY(-120%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 0.875rem 1rem;
    border-radius: var(--radius-md);
    font-size: 1rem;
  }

  .nav-link.active::after {
    display: none;
  }

  .nav-link.active {
    background: rgba(37, 99, 235, 0.1);
  }

  .nav-icon {
    font-size: 1.25rem;
  }
}
</style>
