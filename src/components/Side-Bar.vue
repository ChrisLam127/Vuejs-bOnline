<template>
  <section>
    <ul>
      <li v-on:click="active = !active" :class="{ active: active }">
        <router-link to="/" :style="listStyleObject"
          ><i
            style="margin-right: 1rem; font-size: 16px"
            class="fas fa-house"
          ></i
          >Home</router-link
        >
      </li>
      <li>
        <router-link to="/billing" :style="listStyleObject"
          ><i
            style="margin-right: 1rem; font-size: 16px"
            class="fas fa-file-invoice"
          ></i>
          Billing</router-link
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Side-Bar",
  data() {
    return {
      active: false,
      activeColor: "#fff",
      listStyleObject: {
        textDecoration: "none",
        fontSize: "14px",
        color: this.activeColor,
        padding: "1rem 3rem 1rem 2rem",
        borderRadius: "10px",
      },
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";
section {
  height: calc(100vh - 100px);
  width: 20%;
  border-right: 1px solid #ccc;
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 1rem 0;
      width: 100%;
      .active {
        background: $blue;
        color: #fff;
      }
      a {
        color: #333;
      }
    }
  }
}

@media only screen and (max-width: 900px) {
  section {
    height: 70px;
    width: 100vw;
    border-bottom: 1px solid #ccc;
    ul {
      flex-direction: row;
    }
  }
}
</style>
