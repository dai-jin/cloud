<template>
  <div>
    <div class="reflect" @touchstart="handleToSubmit">
      <div class="feedback_problem">
        <img src="@/assets/add_btn.png" alt />
        <span>我要反馈</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleToSubmit() {
      console.log(55555);
      this.$router.push("/feedback");
      this.$store.commit("feedStatus/FEED_STATUS", { feedStatus: false });
    }
  }
};
</script>
<style  scoped>
.reflect {
  position: fixed;
  z-index: 1;
  right: 0.14rem;
  bottom: 0.14rem;
}
.feedback_problem {
  display: flex;
  width: 1.1rem;
  height: 0.42rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.21rem;
  background-image: linear-gradient(180deg, #73a9ff 0%, #3f70ff 100%);
}
.feedback_problem span {
  color: #fff;
  font-size: 0.14rem;
  margin-left: 0.05rem;
}
</style>