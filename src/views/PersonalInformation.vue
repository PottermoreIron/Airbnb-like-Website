<template>
  <div>
    <PerNavTop
      ref="navTop"
      @gotoper="goToPer"
      @gotocompletedpur="goToCompletedPur"
      @gotountreatedpur="goToUntreatedPur"
    />
    <PerInformationBar ref="perInf" v-if="displayBar == 1" />
    <UntreatedPurchaseBar ref="unTreatedPur" v-else-if="displayBar == 2" />
    <CompletedPurchaseBar ref="completedPur" v-else-if="displayBar == 3" />
  </div>
</template>

<script>
import PerNavTop from "../components/content/personalinformation/PerNavTop.vue";
import PerInformationBar from "../components/content/personalinformation/PerInformationBar.vue";
import UntreatedPurchaseBar from "../components/content/personalinformation/UntreatedPurchaseBar.vue";
import CompletedPurchaseBar from "../components/content/personalinformation/CompletedPurchaseBar.vue";
export default {
  name: "PersonalInformation",
  components: {
    PerNavTop,
    PerInformationBar,
    UntreatedPurchaseBar,
    CompletedPurchaseBar,
  },
  data() {
    return {
      userName: "",
      displayBar: 1,
      id: 1,
    };
  },
  methods: {
    goToPer() {
      this.displayBar = 1;
    },
    goToCompletedPur() {
      this.displayBar = 3;
    },
    goToUntreatedPur() {
      this.displayBar = 2;
    },
  },
};
</script>

<style></style>
