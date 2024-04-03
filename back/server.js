const db = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

db.sync({ force: false }).then(() => {
  console.log("base de datos conectada");
  app.listen(3001, () => console.log(`puerto 3001`));
});
