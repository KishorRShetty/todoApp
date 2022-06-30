const express = require("express");
const {
  addlist,
  readAlllist,
  readOnelist,
  updateOne,
  deleteOne
} = require("../controllers/listController");

const router = express.Router();

router.route("/add").post(addlist);
router.route("/readAll").get(readAlllist);
router.route("/readOne/:id").get(readOnelist).put(updateOne).delete(deleteOne);

module.exports = router;
