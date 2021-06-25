<template>
  <div class="pagination" v-if="total > pageSize">
    <el-pagination
      :pageSize="pageSize"
      :total="total"
      layout="prev,pager,next"
      v-bind="$attrs"
      v-on="$listeners"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: ["total", "pageSize"],
  name: "Pagination",
};
</script>

<style scoped>
.pagination {
  text-align: right;
}
.el-pagination {
  display: flex;
  align-items: center;
}
.el-pagination ::v-deep .btn-prev,
.el-pagination ::v-deep .btn-next,
.el-pagination ::v-deep li {
  color: rgb(0, 132, 137);
  line-height: 35px;
}
.el-pagination ::v-deep li {
  font-weight: normal;
  font-size: 0.9rem !important;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.el-pagination ::v-deep button:disabled {
  color: darkgray;
}
.el-pagination ::v-deep li {
  font-size: 0.8rem;
  color: rgb(0, 108, 112);
}
.el-pagination ::v-deep li:hover {
  text-decoration: underline;
  color: rgb(0, 108, 112);
}
.el-pagination ::v-deep .active {
  background-color: rgb(0, 132, 137) !important;
  color: rgb(255, 255, 255);
}
.el-pagination ::v-deep .active:hover {
  background-color: rgb(0, 132, 137) !important;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
</style>
