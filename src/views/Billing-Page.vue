<template>
  <section class="container">
    <section class="title">
      <h2>Billing</h2>
      <p>Overview of Your accounts</p>
    </section>
    <AccountComp />
    <PaymentComp />
    <TableComp />
    <PaginationComp />
  </section>
</template>

<script>
import TableComp from "@/components/Table-Comp.vue";
import PaymentComp from "@/components/Payment-Comp.vue";
import AccountComp from "../components/Account-Comp.vue";
import PaginationComp from "@/components/Pagination-Comp.vue";
export default {
  name: "Billing-Page",
  components: { TableComp, PaymentComp, AccountComp, PaginationComp },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.container {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;

  .title {
    flex: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-left: 1.5rem;

    h2 {
    }

    p {
      font-size: 12px;
      margin-top: 0.5rem;
    }
  }
}

@media only screen and (max-width: 900px) {
  .container {
    width: 100%;

    .title {
    }
  }
}
</style>
