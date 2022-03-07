<template>
  <nav class="navbar">
    <div class="navbar-left">
      <div class="logo-container">
        <a href="https://www.bonline.com/" target="_blanc">
          <img
            class="logo"
            src="https://assets-global.website-files.com/608a9a94f3d2f96ef8bbe85a/60eec3dc9dc518c0c21d42c9_bOnline%20logo%20DARK.svg"
            alt="logo"
        /></a>
      </div>
      <div class="icon">
        <i class="fas fa-bell"></i>
        <span></span>
      </div>
    </div>
    <span></span>
    <div class="navbar-right">
      <div class="navbar-img">
        <img src="../assets/pic-3.png" alt="" />
      </div>
      <div class="details" v-for="user in userData" :key="user.account_id">
        <h3 v-if="user.first_name === 'Lynda'">
          {{ user.first_name }} {{ user.last_name }}
        </h3>
        <p v-if="user.first_name === 'Lynda'">{{ user.email_address }}</p>
      </div>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </nav>
</template>

<script>
import Data from "../../src/Data.json";
export default {
  name: "Nav-Bar",
  data() {
    return {
      userData: Data,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
.navbar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #bbb;

  .navbar-left {
    flex: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 2rem;

    .logo-container {
      width: 100px;
    }

    .icon {
      position: relative;
      font-size: 18px;
      color: #383838;

      span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $blue;
        position: absolute;
        top: -5px;
        right: -2px;
      }
    }
  }
  span {
    height: 90px;
    width: 1px;
    background: #ccc;
    margin: 0 0rem 0 3rem;
  }
  .navbar-right {
    flex: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-right: 0;

    .navbar-img {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .details {
      text-align: start;
      margin: 0 1rem;

      h3 {
        font-weight: 700;
      }

      p {
        color: $blue;
        font-size: 12px;
      }
    }
    i {
      cursor: pointer;
      margin-left: 0.5rem;
      width: 10px;
    }
  }
}

@media only screen and (max-width: 750px) {
  .navbar {
    .navbar-left {
      flex: 80%;
    }
    .navbar-right {
      flex: 20%;
      .navbar-img {
        width: 35px;
        height: 35px;
      }

      .details {
        display: none;
      }
    }
  }
}
</style>
