<template>
  <div id="app">
    <topheader></topheader>
    <mainbody></mainbody>
    <buttomfooter></buttomfooter>
  </div>
</template>

<script>
import topheader from "./components/header";
import mainbody from "./components/mainbody";
import buttomfooter from "./components/footer";
export default {
  name: "App",
  components: {
    topheader,
    mainbody,
    buttomfooter
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
a,
li {
  cursor: pointer;
}
</style>
