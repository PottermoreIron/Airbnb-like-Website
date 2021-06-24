<template>
  <div>
    <PerNavTop />
    <PerInformationBar />
  </div>
</template>

<script>
import PerNavTop from "../components/content/personalinformation/PerNavTop.vue";
import PerInformationBar from "../components/content/personalinformation/PerInformationBar.vue";
export default {
  name: "PersonalInformation",
  components: { PerNavTop, PerInformationBar },
  data() {
    return {
      userName: "",
    };
  },
};
</script>

<style></style>
