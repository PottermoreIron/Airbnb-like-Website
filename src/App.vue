<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@import "assets/css/base.css";
#app {
  height: 100%;
}
</style>
