const express = require("express");
const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>HELLO LCO</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instagramSocial = {
    username: "divy_parekh1",
    followers: 70,
    follows: 89,
    date: Date.now(),
  };

  res.status(200).json(instagramSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "divyParekh",
    followers: 77,
    follows: 10,
    date: Date.now(),
  };

  res.status(200).json(facebookSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "Divy_Parekh",
    followers: 170,
    follows: 222,
    date: Date.now(),
  };

  res.status(200).json(linkedinSocial);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
