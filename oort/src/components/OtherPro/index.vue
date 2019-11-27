<template>
  <div class="wrapper">
    <div class="other_question">
      <div class="title">
        <img src="@/assets/fire.png" />
        <span>热门问题</span>
      </div>
      <div class="cont" v-for="(item,index) in queList" :key="index">
        <span>{{ item }}</span>
        <img src="@/assets/arrow.png" alt />
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
      queList: [
        "如何将生活区系统通讯录导入安全区系统？",
        "如何使用讯飞输入法？",
        "警务云密码忘记了怎么办？",
        "如何创建和加入群组？",
        "如何打开综合办公应用中附件的tif图片？",
        "首页中我的应用如何对应进行排序和增删？",
        "警务云通讯录里面的单位信息不符合？",
        "首页中我的应用如何对应进行排序和增删？",
        "警务云通讯录里面的单位信息不符合？"
      ]
    };
  },
  components: {
    FeedBackBtn
  },
  activated() {
    //组件加载完时将反馈组件状态显示
    this.$store.commit("feedStatus/FEED_STATUS", { feedStatus: true });
    // this.axios
    //   .get(
    //     "http://oortcloudsmart.com:32600/ga/oortcloud-feedback/oortcloud-feedback/v1/list",
    //     { loginId: "admin" }
    //   )
    //   .then(res => {
    //     console.log(res);
    //     // var msg = res.data.msg;
    //     // if (msg === "ok") {
    //     //   this.comingList = res.data.data.comingList;
    //     //   this.isLoading = false;
    //     //   this.prevCityId = cityId;
    //     // }
    //   });
  },
  methods: {
    handleToSubmit() {
      this.$router.push("/feedback");
    }
  }
};
</script>
<style  scoped>
.wrapper {
  flex: 1;
  overflow: auto;
}
.other_question {
  padding: 0 0.1rem;
  z-index: -1;
}
.other_question .title {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  border-bottom: 1px solid #d8d8d8;
}
.other_question .title span {
  margin-left: 0.08rem;
  color: #999;
  overflow: hidden;
}
.other_question .cont {
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  border-bottom: 1px solid #d8d8d8;
}
.other_question .cont span {
  flex: 1;
  color: #1a1a1a;
  font-size: 0.18rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>