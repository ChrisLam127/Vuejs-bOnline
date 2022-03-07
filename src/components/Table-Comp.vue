<template>
  <section class="history">
    <div class="title">
      <h2>Billing History</h2>
      <p>Choose a Billing plan to see more details</p>
    </div>
    <table class="content-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Balance</th>
          <th>Reference</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userData" :key="index">
          <td>13 Dec 2021</td>
          <td>Invoice</td>
          <td>£8.00</td>
          <td>£{{ user.balance }}</td>
          <td>{{ user.account_id }}</td>
          <td>
            <a download href=""><i class="fa-solid fa-download"></i></a>
          </td>
        </tr>
        <tr>
          <td>13 Dec 2021</td>
          <td>Invoice</td>
          <td>£8.00</td>
          <td>£45.00</td>
          <td>8993UDEJ</td>
          <td>
            <a download href=""><i class="fa-solid fa-download"></i></a>
          </td>
        </tr>
        <tr>
          <td>13 Dec 2021</td>
          <td>Invoice</td>
          <td>£8.00</td>
          <td>£45.00</td>
          <td>8993UDEJ</td>
          <td>
            <a download href=""><i class="fa-solid fa-download"></i></a>
          </td>
        </tr>
        <tr>
          <td>13 Dec 2021</td>
          <td>Invoice</td>
          <td>£8.00</td>
          <td>£45.00</td>
          <td>8993UDEJ</td>
          <td>
            <a download href=""><i class="fa-solid fa-download"></i></a>
          </td>
        </tr>
        <tr>
          <td>13 Dec 2021</td>
          <td>Invoice</td>
          <td>£8.00</td>
          <td>£45.00</td>
          <td>8993UDEJ</td>
          <td>
            <a download href=""><i class="fa-solid fa-download"></i></a>
          </td>
        </tr>
        <tr>
          <td>13 Dec 2021</td>
          <td>Invoice</td>
          <td>£8.00</td>
          <td>£45.00</td>
          <td>8993UDEJ</td>
          <td>
            <a download href=""><i class="fa-solid fa-download"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Data from "../../src/Data.json";
export default {
  name: "Table-Comp",
  data() {
    return {
      userData: Data,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.history {
  flex: 40%;
  background: rgba(218, 218, 216, 0.582);
  border: 1px solid #ccc;
  width: 100%;
  padding: 1rem 1.5rem;

  .title {
    background: #fff;
    padding: 20px;
    border-bottom: 3px solid #ccc;

    h2 {
      font-size: 15px;
    }

    p {
      font-size: 10px;
    }
  }
  .content-table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 0 25px 0;
    font-size: 0.9rem;
    min-width: 400px;
    background: #fff;

    thead {
      tr {
        text-align: left;
        font-weight: bold;
        border-bottom: 1px solid #ccc;

        th {
          padding: 15px 15px;
          font-size: 12px;
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #ccc;

        td {
          padding: 15px 15px;
          font-size: 12px;

          a {
            i {
              color: $blue;
            }
          }
        }
      }
      :last-child {
        border-bottom: none;
      }
    }
  }
}

@media only screen and (max-width: 900px) {
  .history {
    flex: auto;
    background: rgba(218, 218, 216, 0.582);
    border: 1px solid #ccc;
    width: 100%;
    padding: 1rem 0;

    .content-table {
      width: 100%;

      thead {
        tr {
          th {
            padding: 15px 6px;
            font-size: 10px;
          }
        }
      }

      tbody {
        tr {
          td {
            padding: 15px 6px;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
