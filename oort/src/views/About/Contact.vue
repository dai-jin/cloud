<template>
  <div class="slide-enter-active">
    <Header title="联系我们">
      <img slot="back" src="@/assets/back.png" @touchstart="handleToBack" />
    </Header>
    <div class="content">
      <p class="introduce">
        <span>科室电话:</span>
        <span class="tel">0000-88888888</span>
      </p>
      <p class="introduce">
        <span>运维支持:</span>
        <span class="tel">13510218888</span>
      </p>
      <p class="introduce">
        <span>奥尔特云（深圳）智慧科技有限公司</span>
      </p>
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
  padding: 0.2rem 0.4rem;
}
.content p {
  color: #333;
  font-size: 0.12rem;
  font-size: 0.16rem;
}
.content p:nth-child(2) {
  margin: 0.05rem 0 0.1rem 0;
}
.content p span:last-child {
  color: #140000;
}
.content p span.tel {
  color: #3d7ca9;
}
</style>