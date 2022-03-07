<template>
  <NavBar />
  <div class="container">
    <SideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/Nav-Bar.vue";
import SideBar from "./components/Side-Bar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style lang="scss">
@import "@/assets/_shared.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family;
  button {
    color: #fff;
    background: $blue;
    border: 1px solid $blue;

    padding: 10px 15px;
    border-radius: 7px;
    margin-top: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: $blue;
      background: none;
      box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.45);
      -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.45);
      -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.45);
    }
  }
  #app {
    width: 55%;
    margin: auto;
    height: 100vh;

    .container {
      display: flex;
    }
  }
}
@media only screen and (max-width: 1500px) {
  #app {
    width: 90%;

    .container {
      display: flex;
    }
  }
}

@media only screen and (max-width: 900px) {
  #app {
    width: 100%;

    .container {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
