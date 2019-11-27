<template>
  <div class="header">
    <slot name="back"></slot>
    <span>{{ title }}</span>
    <slot name="right_info"></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "返回"
    }
  }
};
</script>
<style  scoped>
.header {
  padding: 0.2rem 0.1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}
.header img {
  width: 0.18rem;
  height: 0.18rem;
}
.header span {
  padding-left: 0.1rem;
  font-size: 0.18rem;
  flex: 1;
}
</style>