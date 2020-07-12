<template>
  <div class="sinput">
    <input type="text" :placeholder="placeholder" />
    <button>
      <div class="search"></div>
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      placeholder: "阿巴阿巴阿巴阿巴阿巴"
    }
  }
}
</script>
<style lang="scss">
.sinput {
  width: 500px;
  display: flex;
  flex-direction: row;
  input {
    width: 452px;
    height: 33.33px;
    border: 1px solid #e7e7e7;
    background-color: #f5f5f5;
    color: #999;
    padding-left: 20px;
    outline: none;
  }
  button {
    width: 55px;
    height: 35.33px;
    display: flex;
    border: 0;
    justify-content: center;
    align-items: center;
    background-color: #e7e7e7;
    border: 2px solid #e7e7e7;
    outline: none;
    .search {
      width: 30px;
      height: 30px;
      background-image: url(../assets/icons.png);
      background-position: -785px -722px;
    }
    .search:hover {
      background-position: -657px -722px;
    }
  }
}
</style>