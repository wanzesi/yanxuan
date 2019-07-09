<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/index">index</router-link> 
      <router-link to="/category">category</router-link>
    </div>
  </div>
</template>

<style>
#app {
  
  width: 100%;
  height: 100%;
  /* position: relative; */
  overflow: hidden;
}
#nav {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  /* padding: 30px; */
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
}

#nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #2c3e50;
  font-size: 0.16rem;
  /* padding: .14rem 0; */
  height: 0.44rem;
  background: lightblue;
  width: 100%;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.page{
  width: 100%;
  position: absolute;
  bottom: 0.44rem;
  left: 0;
  top: 0;
  background: pink;

}
</style>
