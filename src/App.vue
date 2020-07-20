<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.meg-logo {
  font-weight: bolder;
  font-size: 52px;
  display: inline-block;
  margin: 0;
  float: left;
}
.meg-logo div {
  display: inline-block;
  vertical-align: text-bottom;
}
#nav a {
  padding-top: 0;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
