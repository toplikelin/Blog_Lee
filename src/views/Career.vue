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
              <button class="detail-btn" @click="toggleDetail(index)">
                {{ activeDetail === index ? '收起详情' : '详细' }}
                <span class="detail-arrow" :class="{ up: activeDetail === index }">▼</span>
              </button>
              <transition name="detail-slide">
                <div class="detail-panel" v-show="activeDetail === index">
                  <div class="detail-project" v-for="(project, pi) in exp.details" :key="pi">
                    <h4 class="project-name">{{ project.name }}</h4>
                    <p class="project-line" v-for="(line, li) in project.lines" :key="li">
                      {{ line }}
                    </p>
                  </div>
                </div>
              </transition>
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
import { ref } from 'vue'
import { useBlogStore } from '../stores/blog'

const blogStore = useBlogStore()
const experiences = blogStore.experiences

const activeDetail = ref(-1)
const toggleDetail = (index) => {
  activeDetail.value = activeDetail.value === index ? -1 : index
}

// 为每条工作经历补充详细信息
experiences[0].details = [
  {
    name: '1. 菲迪克网络工程管理系统(华东电气集团)',
    lines: [
      '运用css的bookstrap ,HTML页面开发，实现静态页面的展示',
      'ztree组件开发对应的目录树和和相应的管理菜单，实现与用户的用户交互',
      '基于js的JQUERY的列表异步刷新组件jqgrid，实现与用户的动态交互',
      'ajax获取后台相应数据，JSP的el表达式获取对象和相应值写入页面进行对应数据的展示，实现与用户的用户交互',
      '最后配合测试进行调试，对相应的bug进行修改处理'
    ]
  },
  {
    name: '2. 新药读片平台(四川和生视界医药技术开发有限公司)',
    lines: [
      'a.pc端显示AngularJS通过实现对志愿者服用药物之后的眼睛图像变化记录，图像通过阿里云相关api上传到云平台，后因公司需要改为rails框架',
      '定时任务上传部分图片到图像管理系统，管理员对不同药物的创建项目相应的配置，配合读片人员观测结果',
      'b.后因需要进行平台移植和部分功能的重构，同时增加病患注册和查看用药计量和最终报告结果等功能',
      '通过vue2 vuex vueRoute bootstrap3 element.ui(患者端页面使用) Axios（配合后台java）等技术增加患者界面'
    ]
  }
]
experiences[1].details = [
  {
    name: '1. 武汉大学福利平台(数采小博科技发展有限公司)',
    lines: [
      '武汉大学对教职工人员发送福利积分，购物的saas电商平台',
      '通过Ruby on Rails框架采购端实现用积分或线上支付的方式进行购物下单',
      '供应商端在供应商菜单实现对本地供应商商品上传，审核，订单的查看，审核，售后处理等功能',
      '同时通过gem电商api对商品的基本信息，价格，图片，库存，商品类型等进行把控',
      '下单后继续通过api将订单预占库存，下单成功或失败，物流信息，完成订单，售后服务等流程与供应商进行交互',
      '管理人员定期或按需进行积分发放，订单管理，售后问题处理，数据汇总和图表通过Echart实现',
      '商品数据和订单状态数据维护通过定时任务更新',
      '手机端只有采购端，且与pc端采购端类似',
      '工作内容：负责pc端，手机端页面调整，修改，问题处理，数据维护和导出统计，对接新电商api和对部分电商个性化处理',
      '功能开发和以前功能二次开发以及优化'
    ]
  },
  {
    name: '2. 中国航空集团(中航)，中国航空发动机集团(航发)对公商城采购(数采小博科技发展有限公司)',
    lines: [
      '通过Ruby on Rails框架采购端实现商品下单，同步比价，全网比价，商品议价，热门商品，优选供应商商品推荐等相关商品功能。',
      '供应商端在供应商菜单实现对本地供应商商品上传，审核，订单的查看，审核，售后处理。',
      '全网比价报价，报价商品审核，未中标原因以及二次报价，商品议价报价流程。本地供应商，推优供应商相关比价功能。',
      '管理后台对商城公告，活动和一些基本配置，还需对商品，比价商品，报价进行审核。订单审核通过api和redis获取中航平台审批结果',
      '全网比价报价，报价商品审核，未中标原因以及二次报价，商品议价报价流程。本地供应商，推优供应商相关比价功能。',
      '商品数据和订单状态数据维护通过定时任务更新',
      '参与需求评审和讨论，对需求开发提出意见和建议。pc端页面调整，修改，问题处理。负责商城订单整个流程重构，全网比价，商品议价功能优化。部分配置项模块开发，商城商品详情页面重构。',
      '历史商品价格统计功能展示，售后功能开发，电商api联调以及问题解答处理,还有对部分个性化电商（京东，苏宁）进行api开发',
      '测试部分：对功能所设计的地方进行测试用例编写，然后进行简单的测试，最后根据测试结果提出bug。对流程和需求未考虑到的问题及时反馈，最后生成相应的测试报告'
    ]
  },
  {
    name: '3.施耐德电器对公商城采购(数采小博科技发展有限公司)',
    lines: [
      '通过Ruby on Rails框架采购端实现商品下单，同步比价，全网比价，商品议价，热门商品，优选供应商商品推荐等相关商品功能。',
      '采购人还可发起商品寻源，物流寻源，图纸件寻源，供应商为相应寻源需求提供合适的商品以及报价，由采购人选择',
      '供应商端可查看商品，订单，报价流程状态。寻源报价和订单审核通过api分别向两个对应平台获取结果，也可以通过定时任务获取',
      '管理后台对商城公告，活动和一些基本配置。对商品进行审核，上下架等操作。',
      '工作内容：参与需求评审和讨论，对需求开发提出意见和建议。pc端页面调整，修改，问题处理。物流寻源，图纸件寻源进行二次开发，对接新电商api和对部分电商个性化处理。',
      'csp安全对所有模块进行优化，合并下单，购物车开发，部分模块优化，对接其他平台api开发以及优化。'
    ]
  },
  {
    name: '4.银海眼科官网，pc和移动端维护页面和更新通告等(四川和生视界医药技术开发有限公司)',
    lines: [
      '银海眼科官网，pc和移动端维护页面和更新通告等'
    ]
  },
  {
    name: '5.新药读片平台(四川和生视界医药技术开发有限公司)',
    lines: [
      'pc端通过实现对志愿者服用药物之后的眼睛图像变化记录，图像通过阿里云相关api上传到云平台',
      '定时任务上传部分图片到图像管理系统，管理员对不同药物的创建项目相应的配置，配合读片人员观测结果',
      '移动端通过微信公众号api将档案消息发送给读片员，从而进行下一步流程，mina脚本实现简易脚本部署。',
      '后因需要进行平台移植和部分功能的重构，同时增加病患注册和查看用药计量和最终报告结果等功能。',
      '通过vue2 vuex vueRoute bootstrap3 element.ui(患者端页面使用) Axios（配合后台java）等技术增加患者界面'
    ]
  },
  {
    name: '6.远程读片平台(四川和生视界医药技术开发有限公司)',
    lines: [
      'pc端让读片人员上传，下载，审批，查看读片，自动或手动修改读片结果。通过阿里云api将有价值的图片上传至云平台',
      '移动端通将读片流程信息通知发送以及相关信息发送给读片员和患者'
    ]
  },
  {
    name: '7.眼健康档案(四川和生视界医药技术开发有限公司)',
    lines: [
      'pc端实现医护人员对患者档案电子化，同时对中小学生的眼健康进行年度管理。',
      '管理员对检查项目模板和账号管理的配置，rabbitMq与ruby定时任务上传部分图片到图像管理系统',
      '移动端通过微信公众号api将部分活动消息以及档案消息和结果报告展示给用户'
    ]
  },
  {
    name: '8.Galax 图像汇聚管理系统(四川和生视界医药技术开发有限公司)',
    lines: [
      'pc端通过vue和Ruby on Rails框架对图片进行管理'
    ]
  },
  {
    name: '9.西科通信科技公司管理系统（外包）(四川和生视界医药技术开发有限公司)',
    lines: [
      '实现的劳务外包平台，功能包括框架协议，项目立项，第三方劳务平台管理，劳务人员管理',
      '背靠背项目成本金额计算，发票对账计算等功能'
    ]
  }
]
experiences[2].details = [
  {
    name: '1. 成都地铁劳保，福利电商平台(数采小博科技发展有限公司)',
    lines: [
      '通过java分布式部署，redis管理线程',
      'springBoot管理各模块，完成商品审核，上下架处理，订单所有流程的处理',
      '商品由中台统一审核并处理，同时对采购人发放积分进行购物',
      '集成消息队列实现异步解耦，系统吞吐量提升3倍',
      '参与需求评审和讨论，对需求开发提出意见和建议。pc端页面调整，修改，问题处理'
    ]
  }
]

const skillCategories = [
  {
    name: '前端开发',
    icon: '🎨',
    color: '#42b883',
    skills: [
      { name: 'Vue.js', years: 2, level: 70 },
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
      { name: 'Node.js/Express', years: 1, level: 60 },
      { name: 'Java/Spring Boot', years: 0.5, level: 50 },
      { name: 'MySQL', years: 6, level: 80 }
    ]
  },
  {
    name: '工程化工具',
    icon: '🛠️',
    color: '#f59e0b',
    skills: [
      { name: 'Git/GitHub', years: 8, level: 92 },
      { name: 'Webpack/Vite', years: 2, level: 70 },
      { name: 'Docker', years: 1, level: 60 },
      { name: 'CI/CD', years: 4, level: 80 }
    ]
  },
  {
    name: '其他技能',
    icon: '📚',
    color: '#8b5cf6',
    skills: [
      { name: 'RESTful API设计', years: 6, level: 88 },
      { name: '微服务架构', years: 0.5, level: 50 },
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

.detail-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.75rem;
  padding: 0.375rem 0.875rem;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary-color);
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.detail-btn:hover {
  background: rgba(37, 99, 235, 0.15);
}

.detail-arrow {
  font-size: 0.625rem;
  transition: transform 0.3s ease;
}

.detail-arrow.up {
  transform: rotate(180deg);
}

.detail-panel {
  margin-top: 0.75rem;
  padding: 1rem 1.25rem;
  background: #f8fafc;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--primary-color);
}

.detail-project {
  padding: 0.5rem 0;
}

.detail-project:not(:last-child) {
  border-bottom: 1px dashed #e2e8f0;
  margin-bottom: 0.5rem;
  padding-bottom: 0.75rem;
}

.project-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.project-line {
  color: var(--text-secondary);
  font-size: 0.8125rem;
  line-height: 1.8;
  padding-left: 0.75rem;
  position: relative;
  margin-bottom: 0.25rem;
}

.project-line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--primary-color);
  opacity: 0.5;
}

.detail-slide-enter-active,
.detail-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.detail-slide-enter-from,
.detail-slide-leave-to {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
}

.detail-slide-enter-to,
.detail-slide-leave-from {
  max-height: 500px;
  opacity: 1;
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
