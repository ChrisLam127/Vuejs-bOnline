<template>
  <section class="accounts">
    <template v-for="user in userData" :key="user.account_id">
      <div
        v-on:click="first()"
        :style="isActive ? accountStyleObject : normalStyleObject"
        :class="{ active: isActive }"
        v-if="user.account_id === 291123"
      >
        <h3>Macrotel Phone <span>Active</span></h3>
        <p>Account ID : {{ user.account_id }}</p>
      </div>
      <div
        v-on:click="second()"
        :style="isActive2 ? accountStyleObject : normalStyleObject"
        :class="{ active: isActive2 }"
        v-if="user.account_id === 291123"
      >
        <h3>Mobis Valium <span>Active</span></h3>
        <p>Account ID : {{ user.account_id }}</p>
      </div>
      <div
        v-on:click="third()"
        :style="isActive3 ? accountStyleObject : normalStyleObject"
        :class="{ active: isActive3 }"
        v-if="user.account_id === 291123"
      >
        <h3>Jereme Hunt 3 <span>Active</span></h3>
        <p>Account ID : {{ user.account_id }}</p>
      </div>
    </template>
  </section>
</template>
<script>
import Data from "../../src/Data.json";
export default {
  name: "Account-Comp",
  data() {
    return {
      userData: Data,
      isActive: true,
      isActive2: false,
      isActive3: false,
      normalStyleObject: {
        width: "250px",
        height: "80px",
        marginLeft: "0.5rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        paddingLeft: "0.5rem",
        border: "1px solid #ccc",
        background: "#fff",
        cursor: "pointer",
      },
      accountStyleObject: {
        width: "250px",
        height: "80px",
        marginLeft: "0.5rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        paddingLeft: "0.5rem",
        cursor: "pointer",
      },
    };
  },
  methods: {
    first() {
      this.isActive = true;
      this.isActive2 = false;
      this.isActive3 = false;
    },
    second() {
      this.isActive2 = true;
      this.isActive = false;
      this.isActive3 = false;
    },
    third() {
      this.isActive3 = true;
      this.isActive = false;
      this.isActive2 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.accounts {
  flex: 5%;
  display: flex;
  align-items: center;
  // background: rgba(218, 218, 216, 0.582);
  background: #dcdcdc;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1rem 1.5rem;
  div {
    transition: all 0.3s ease;
    h3 {
      font-size: 14px;
      color: $blue;
      margin-bottom: 0.5rem;

      span {
        font-size: 10px;
        padding: 5px 10px;
        margin-left: 10px;
        border-radius: 10px;
        color: rgb(28, 202, 28);
        background: #fff;
      }
    }

    p {
      font-size: 12px;
      color: #333;
      font-weight: 500;
    }
    &.active {
      border: 1px solid $blue;
      background: rgba(166, 184, 233, 0.4);
    }

    &:hover {
      box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.45);
      -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.45);
      -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.45);
    }
  }
}

@media only screen and (max-width: 900px) {
  .accounts {
    padding: 1rem 0;
    div {
      h3 {
        font-size: 10px;
        color: $blue;
        margin-bottom: 0.5rem;

        span {
          font-size: 8px;
          padding: 3px 5px;
          margin-left: 0;
        }
      }

      p {
        font-size: 8px;
      }
    }
  }
}
</style>
