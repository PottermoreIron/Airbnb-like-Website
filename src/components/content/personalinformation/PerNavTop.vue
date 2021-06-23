<template>
  <div class="per_nav_top_bar">
    <img
      src="../../../static/test_img/assistant.jpg"
      class="per_nav_top_bar_headpic"
    />
  </div>
</template>

<script>
export default {
  name: "PerNavTop",
  data() {
    return {};
  },
};
</script>

<style scoped>
.per_nav_top_bar {
  height: 100px;
  width: 100%;
  border: 2px solid rgba(175, 175, 175, 0.404);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.per_nav_top_bar_headpic {
  height: 40px;
  width: 40px;
  margin: 40px;
  border-radius: 100%;
  border: 1px solid rgb(175, 175, 175);
}
</style>
