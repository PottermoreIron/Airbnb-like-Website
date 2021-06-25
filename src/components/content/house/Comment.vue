<template>
  <div class="comment_container">
    <div class="comment_top_container">
      <div class="comment_avatar_img">
        <img src="test_img/avatar.jpg" />
      </div>
      <div class="comment_user_info">
        <div class="user_name">{{ userName }}</div>
        <div class="comment_time">{{ commentDate }}</div>
      </div>
    </div>
    <div class="comment">{{ comment }}</div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    userName: {
      type: String,
    },
    commentDate: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.comment_top_container {
  display: flex;
  align-items: center;
}
.comment_avatar_img {
  width: 48px;
  height: 48px;
}
.comment_avatar_img img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.comment_user_info {
  margin-left: 15px;
}
.user_name {
  font-size: 1.1rem;
  font-weight: bold;
}
.comment_time {
  font-size: 0.85rem;
  font-weight: normal;
}
.comment {
  margin-top: 20px;
}
</style>
