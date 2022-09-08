const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const PORT = 8000;

const app = express();

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((err) => {
    console.error(err);
  });
