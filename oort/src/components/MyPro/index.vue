<template>
  <div class="wrapper">
    <div class="cont" v-for="(item ,index) in list" :key="index">
      <div class="time" @tap="handleToSubmit">
        <p class="word">{{ item.content }}</p>
        <p class="time_stamp">{{ item.time }}</p>
      </div>
      <div class="alert" v-if="item.num">{{ item.num }}</div>
      <div class="arrow">
        <img src="@/assets/arrow.png" />
      </div>
    </div>
    <FeedBackBtn />
  </div>
</template>

<script>
import FeedBackBtn from "@/components/FeedBackBtn";
export default {
  data() {
    return {
      list: [
        {
          content: "如何设置手机输入法",
          time: "2019-02-15",
          num: 2
        },
        {
          content: "如何设置手机输入法",
          time: "2019-02-15",
          num: 0
        },
        {
          content: "如何设置手机输入法",
          time: "2019-02-15",
          num: 1
        },
        {
          content: "如何设置手机输入法",
          time: "2019-02-15",
          num: 4
        }
      ]
    };
  },
  components: {
    FeedBackBtn
  },
  methods: {
    handleToSubmit() {
      this.$router.push("/");
    }
  }
};
</script>
<style  scoped>
.wrapper {
  padding: 0 0.1rem;
}
.wrapper .cont {
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  border-bottom: 1px solid #d8d8d8;
}
.wrapper .cont .time {
  flex: 1;
}
.wrapper .cont .time:first-child {
  color: #1a1a1a;
  font-size: 0.14rem;
}
.wrapper .cont .time .time_stamp {
  color: #999;
  font-size: 0.12rem;
  margin-top: 0.05rem;
}
.alert {
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
  background: red;
  border-radius: 50%;
  color: #fff;
  margin-right: 0.06rem;
}
</style>