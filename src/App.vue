<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/zhibo">直播</router-link> |
    <router-link to="/huifang">回放</router-link> |
    <router-link to="/video">video</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
