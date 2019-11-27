<template>
  <div class="search">
    <el-input
      class="search_frame"
      prefix-icon="el-icon-search"
      v-model="message"
      placeholder="请输入内容"
      clearable
    />
    <span class="serch_btn">收索</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  props: {
    searchProblem: {
      type: Function,
      default: function() {}
    }
  },
  watch: {
    message(newval) {
      this.searchProblem(newval);
    }
  }
};
</script>
<style  scoped>
.search {
  padding: 0.2rem 0.14rem;
  display: flex;
  align-items: center;
  background: #f2f2f2;
}
.search_frame {
  flex: 1;
}
.serch_btn {
  margin-left: 0.1rem;
  color: #3f70ff;
  font-size: 0.18rem;
  cursor: pointer;
}
</style>