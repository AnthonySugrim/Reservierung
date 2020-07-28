const router = require('express').Router();
const user = require("./user");
const availability = require("./availabilityRoute");
const reserve = require("./reservationRoute");
// '/api/user' route
router.use('/user', user);
router.use("/availability", availability);
router.use("/reserve", reserve);

// calls to '/api/ <- redundant route, for initial testing
router.route('/')
  .get((req, res) => res.json({ sample: 'data' }));

module.exports = router;
