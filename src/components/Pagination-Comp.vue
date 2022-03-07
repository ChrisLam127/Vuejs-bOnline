<template>
  <div class="pagination">
    <span class="prev">Previous</span>
    <span class="middle">1</span>
    <span class="middle">...</span>
    <span class="middle">3</span>
    <span class="middle">4</span>
    <span class="middle active">5</span>
    <span class="middle">15</span>
    <span class="middle">16</span>
    <span class="middle">...</span>
    <span class="middle">26</span>
    <span class="prev">Next</span>
  </div>
</template>

<script>
export default {
  name: "Pagination-Comp",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  span {
    margin: 0 0.5rem;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    &.active {
      background: $blue;
    }
  }
  .prev {
    color: $blue;
    border: none;
  }
}
</style>
