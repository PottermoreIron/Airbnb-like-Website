<template>
  <div class="per_show_bar">
    <div class="per_show_bar_tital"><b>已完成的订单</b></div>
    <!----------------------- 表格 ------------------------->
    <div class="per_show_bar_table">
      <el-table :data="thisData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.purchaseStart }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="用户" width="180">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                {{ scope.row.purchaseUser }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="hotel" label="酒店" width="180" sortable>
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference">
                {{ scope.row.purchaseHotel }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" width="180" sortable>
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference">
                {{ scope.row.purchasePrice }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="star" label="评分" width="180" sortable>
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference">
                {{ scope.row.purchaseStar }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-s-order"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-------------------------- 分页 ---------------------------->
      <el-pagination
        background=""
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="7"
        layout="total, prev, pager, next"
        :total="purchaseTotal"
        style="margin-top: 20px"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="订单详情"
      :visible.sync="centerDialogVisible"
      width="550px"
      center
      @opened="opened"
      destroy-on-close="true"
    >
      <ShowPurInfor ref="showPurInfor" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ShowPurInfor from "./showcase/ShowPurInfor.vue";
export default {
  name: "CompletedPurchaseBar",
  components: { ShowPurInfor },
  data() {
    return {
      centerDialogVisible: false,
      purchaseTotal: 0,
      x: this.row,
      thisData: [],
    };
  },
  created() {
    this.$axios
      .get("/userManager/showUserPastPurchase", {
        params: {
          id: this.$parent.id,
        },
      })
      .then((res) => {
        this.thisData = res.data.data;
        this.purchaseTotal = res.data.data.length;
      });
  },
  methods: {
    // 对话框回调opened
    opened() {
      this.$refs.showPurInfor.open(this.x);
    },

    handleEdit(index, row) {
      this.centerDialogVisible = true;
      this.x = row;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.per_show_bar {
  height: 700px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
}
.per_show_bar_tital {
  height: 50px;
  width: 100%;
  background-color: white;
  text-align: left;
  line-height: 50px;
  font-size: 1.5rem;
  color: black;
  padding-left: 50px;
  margin-top: 10px;
}
.per_show_bar_table {
  border-radius: 10px;
  border: 1px solid #dddddd;
  padding: 30px;
  margin-top: 30px;
  width: 1060px;
  background-color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
