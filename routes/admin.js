const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

// /admin/add-products => GET
router.get("/add-products", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-products => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
