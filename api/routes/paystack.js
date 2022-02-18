const router = require("express").Router();

const KEY = process.env.PAYSTACK_KEY;
const paystack = require("paystack-api")(KEY);

router.post("/payment", (req, res) => {
  paystack.customer
    .list()
    .then(function (body) {
      console.log(body);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
