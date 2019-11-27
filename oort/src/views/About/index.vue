<template>
  <div class="slide-enter-active">
    <Header title="关于">
      <img slot="back" src="@/assets/back.png" @touchstart="handleToBack" />
    </Header>
    <div class="content">
      <router-link tag="div" to="/about/version" class="version">
        <span>版本介绍</span>
        <img src="@/assets/arrow.png" alt />
      </router-link>
      <router-link tag="div" to="/about/contact" class="contact">
        <span>联系我们</span>
        <img src="@/assets/arrow.png" alt />
      </router-link>
    </div>
    <div class="list">
      <div class="smile">
        <img src="@/assets/smile.png" />
      </div>
      <p class="question">问题反馈</p>
      <p class="version">V1.0.02</p>
      <p>开发公司：奥尔特云（深圳）智慧科技有限公司</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {};
  },
  components: {
    Header
  },
  methods: {
    handleToBack() {
      this.$router.back();
    }
  }
};
</script>
<style  scoped>
.slide-enter-active {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.content {
  padding-left: 0.1rem;
  box-sizing: border-box;
  position: relative;
}
.content .version,
.content .contact {
  display: flex;
  align-items: center;
  padding: 0.2rem 0rem;
  color: #1a1a1a;
  font-size: 0.14rem;
  border-bottom: 1px solid #e6e6e6;
}
.content .version span,
.content .contact span {
  flex: 1;
}
.content .version img,
.content .contact img {
  margin-right: 0.1rem;
}
.list {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0.2rem;
  width: 100%;
}
.list .question {
  margin: 0.15rem 0;
  color: #333;
  font-size: 0.16rem;
}
.list .version {
  margin-bottom: 0.25rem;
  color: #999999;
  font-size: 0.12rem;
}
.list p:last-child {
  color: #999999;
  font-size: 0.12rem;
}
</style>