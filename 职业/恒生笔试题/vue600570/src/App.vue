<template>
  <div id="app">
      <header class="head">
        <div class='nav' >无限滚动加载</div>
        <div class='nav' >canvas K线图</div>
      </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}
#app {
  width:100%;
  height:100%;
  text-align: center;
}

.head{
  width:100%;
  height:50px;
  background-color:#ff6f00;
  color:rgba(255,255,255,.8);
  display: flex;
  justify-content: center;
}
.nav{
  width:100px;
  height:100%;
  padding-left:10px;
  padding-right:10px;
  line-height:50px;
}
.nav:hover{
  cursor: pointer;
  background-color:#ff7d1a;
  color:#fff;
}
</style>
