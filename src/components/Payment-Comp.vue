<template>
  <main class="payment">
    <div class="left">
      <div class="left-title">
        <h4>Payment details</h4>
        <p>View details of your next invoice and payment method</p>
      </div>
      <div class="body">
        <div v-for="user in userData" :key="user.account_id">
          <h5 v-if="user.account_id === 291123">
            Next invoice: {{ user.next_invoice_date }}
          </h5>
        </div>
        <div class="balance">
          <div class="current">
            <h5>Current balance</h5>
            <div v-for="user in userData" :key="user.account_id">
              <div v-if="user.account_id === 291123" class="amount">
                £{{ user.balance }}
              </div>
            </div>
            <div class="icon">
              <i class="fa-solid fa-lock"></i>
              <span>
                This is a secure 256-bit SSL encrypted payment. You're
                safe.</span
              >
            </div>
            <button>Pay Now</button>
          </div>
          <div class="method">
            <h5>Payment method Annual</h5>

            <div class="icon">
              <i class="fas fa-lightbulb"></i>
              <span
                ><b>Guide:</b> to manage your payments more easily, we recommend
                switching to Direct Debit.</span
              >
            </div>
            <button>Switch to Direct Debit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="listTitle">
        <h5>My products</h5>
        <p>All your product at a glance</p>
      </div>
      <ul>
        <li class="list">
          <i class="fas fa-phone faIcon"></i> VoIP - 902903445
        </li>
        <li class="list">
          <i class="fa-solid fa-tower-broadcast faIcon"></i> Fiber - SW29BE
        </li>
        <li class="list">
          <i class="fas fa-laptop faIcon"></i> Website - www.website.com
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Data from "../../src/Data.json";
export default {
  name: "Payment-Comp",
  data() {
    return {
      userData: Data,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.payment {
  flex: 30%;
  background: rgb(223, 223, 223);
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  .left {
    flex: 55%;
    height: 100%;
    background: #fff;
    border-radius: 10px;

    box-shadow: 1px 1px 15px -4px rgba(0, 0, 0, 0.45);
    -webkit-box-shadow: 1px 1px 15px -4px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 1px 1px 15px -4px rgba(0, 0, 0, 0.45);

    .left-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 70px;
      padding-left: 1rem;
      border-bottom: 1px solid #ccc;

      h4 {
        font-size: 14px;
      }

      p {
        font-size: 11px;
        color: #888;
      }
    }
    .body {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h5 {
        font-size: 12px;
        margin-left: 1.5rem;
      }
      .balance {
        display: flex;
        justify-content: space-around;

        .current {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: start;
          background: rgba(218, 218, 216, 0.582);
          padding: 0.8rem;
          margin-right: 0.5rem;
          margin-left: 1rem;
          border-radius: 10px;
          height: 200px;
          border: 1px solid rgba(209, 209, 209, 0.9);

          h5 {
            font-size: 12px;
            margin-bottom: 10px;
          }

          .amount {
            font-size: 22px;
            font-weight: bold;
            color: #555;
          }
          .icon {
            color: #444;
            display: flex;
            margin: 0.5rem 0;

            i {
              padding: 0 10px;
            }

            span {
              font-size: 10px;
              line-height: 15px;
              color: #888;
            }
          }
        }

        .method {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          background: rgba(218, 218, 216, 0.4);
          padding: 0.5rem;
          margin-left: 0.5rem;
          margin-right: 1rem;
          border-radius: 10px;
          border: 1px solid rgba(209, 209, 209, 0.9);

          h5 {
            font-size: 12px;
            margin-bottom: 20px;
          }

          .icon {
            color: #444;
            display: flex;

            i {
              padding: 0 10px;
              color: rgb(28, 202, 28);
            }

            span {
              font-size: 10px;
              line-height: 15px;
              color: #888;

              b {
                color: rgb(28, 202, 28);
              }
            }
          }
        }
      }
    }
  }

  .right {
    flex: 25%;
    background: #fff;
    margin-left: 1rem;
    border-radius: 10px;

    box-shadow: 1px 1px 15px -4px rgba(0, 0, 0, 0.45);
    -webkit-box-shadow: 1px 1px 15px -4px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 1px 1px 15px -4px rgba(0, 0, 0, 0.45);

    .listTitle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 70px;
      padding-left: 1rem;
      border-bottom: 1px solid #ccc;

      p {
        font-size: 10px;
        margin-top: 0.5rem;
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .list {
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        width: 100%;
        font-size: 10px;

        i {
          font-size: 14px;
          margin: 0 0.7rem;
        }
        h5 {
          font-weight: 700;
        }
        p {
          font-size: 10px;
          color: #888;
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .payment {
    flex: auto;
    flex-direction: column;
    padding: 1rem 0;

    .left {
      flex: 55%;
      height: 100%;
      width: 100%;
    }

    .right {
      flex: auto;
      margin-left: 0;
    }
  }
}
</style>
