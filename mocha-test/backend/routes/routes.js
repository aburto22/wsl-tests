const router = require("express").Router();
const generalController = require("../controllers/controller");

router
  .route("/")
  .get(generalController.getRequest)
  .post(generalController.postRequest);

module.exports = router;
