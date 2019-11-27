<template>
  <div class="slide-enter-active">
    <Header title="版本介绍">
      <img slot="back" src="@/assets/back.png" @touchstart="handleToBack" />
    </Header>
    <div class="content">
      <p class="introduce">1.0.02版本介绍</p>
      <p>-体验优化与修复bug</p>
      <p>-新增评论功能</p>
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
  display: flex;
  align-items: center;
}
.content p {
  color: #999;
  font-size: 0.12rem;
}
.content p:last-child {
  margin-top: 0.05rem;
}
.content .introduce {
  font-size: 0.18rem;
  padding: 0.2rem 0;
  color: #333;
  letter-spacing: 2px;
}
</style>