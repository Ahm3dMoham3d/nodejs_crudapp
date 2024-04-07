const express = require("express");
const router = express.Router();
const query = require("./conn");

// get req
router.get("/", (req, res) => {
  query.execute("select * from products", (err, data) => {
    if (err) {
      res.json({ message: `error/n `, err });
    }
    res.json({ msg: `success`, data });
  });
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  query.execute(
    `select * from products WHERE id = ${productId}`,
    (err, data) => {
      if (err) {
        res.json({ message: `error/n `, err });
      }
      res.json({ msg: `success`, data });
    }
  );
});

// post req
router.post("/", (req, res) => {
  const { name, price, qty } = req.body;
  query.execute(`insert into products(name,price,qty) 
          values('${name}','${price}','${qty}')`);
  res.json({ message: "product added sucssefully" });
});

router.delete("/:id", (req, res) => {
  const productId = req.params.id;
  query.execute(
    `DELETE FROM products WHERE id = ${productId}`,
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "Product deleted successfully" });
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const productId = req.params.id;
  const { name, price, qty } = req.body;
  query.execute(
    `UPDATE products SET name = '${name}', price = '${price}', qty = '${qty}' WHERE id = ${productId}`,
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "Product updated successfully" });
      }
    }
  );
});

module.exports = router;
