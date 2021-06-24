<template>
  <div class="per_show_bar">
    <InformationCard ref="InforCard" />
    <ChangeMes v-if="changeBar" />
  </div>
</template>

<script>
import InformationCard from "./showcase/InformationCard.vue";
import ChangeMes from "./showcase/ChangeMes.vue";
export default {
  name: "PerInformationBar",
  components: { InformationCard, ChangeMes },
  data() {
    return {
      changeBar: true,
    };
  },
  methods: {
    submitInformation() {},
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
