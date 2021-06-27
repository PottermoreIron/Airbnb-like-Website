<template>
  <div class="per_show_bar">
    <InformationCard ref="inforCard" @changmes="changMes" />
    <ChangeMes
      ref="changeMes"
      @exitchangebar="exitChangeBar"
      v-if="changeBar"
    />
  </div>
</template>

<script>
import bus from "@/utils/bus.js";
import InformationCard from "./showcase/InformationCard.vue";
import ChangeMes from "./showcase/ChangeMes.vue";
export default {
  name: "PerInformationBar",
  components: { InformationCard, ChangeMes },
  data() {
    return {
      user: [],
      id: 1,
      changeBar: false,
    };
  },
  created() {
    this.id = this.$parent.id;
    this.$axios
      .get("/userManager/getUserById", {
        params: {
          id: this.id,
        },
      })
      .then((res) => {
        this.user = res.data.data;
        this.$refs.inforCard.updateTable();
        this.emitUser();
      });
  },
  methods: {
    updateTable() {
      this.id = this.$parent.id;
      this.$axios
        .get("/userManager/getUserById", {
          params: {
            id: this.id,
          },
        })
        .then((res) => {
          this.user = res.data.data;
          console.log(this.user);
          this.$refs.inforCard.updateTable();
          this.emitUser();
        });
    },
    emitUser() {
      bus.$emit("emiting", "http://localhost:8080/" + this.user.userPic);
    },
    changMes() {
      this.changeBar = !this.changeBar;
    },
    exitChangeBar() {
      this.changeBar = false;
      this.emitUser();
    },
  },
};
</script>

<style scoped>
.per_show_bar {
  margin-top: 50px;
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
