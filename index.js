// Libs
const express = require("express");
const cors = require("cors");

// consts
const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

// server
app.listen(port, () => console.log(`server is running on port ${port}`));

app.use("/products", require("./routes"));
