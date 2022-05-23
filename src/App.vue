<template>
  <div id="app">
    <div class="vue-header">
      <div class="vue-logo">
        <img src="./assets/logo.png" height="80px" alt="logo" />
      </div>
      <div id="nav">
        <router-link class="linkSpacing" to="/">Home</router-link> |
        <router-link class="linkSpacing" to="/about">About</router-link> |
        <router-link class="linkSpacing" to="/contact">Contact</router-link> |
        <router-link class="linkSpacing" to="/Todo">Todo</router-link>
      </div>
    </div>
    <div class="vue-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #dddddd;
}

.linkSpacing {
  margin-right: 10px;
  margin-left: 10px;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: white;
    }
  }
}

.vue-header {
  display: flex;
  background-color: #42b983;
}

.vue-logo {
  width: 4%;
}
</style>
