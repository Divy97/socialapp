const express = require("express");
const app = express();

const PORT = 4000 || process.env.PORT;

app.use("/", (req, res) => {
  res.send("<h1>HELLO LCO</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
