const express = require("express");
const format = require("date-format");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>HELLO LCO</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instagramSocial = {
    username: "divy_parekh1",
    followers: 70,
    follows: 89,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instagramSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "divyParekh",
    followers: 77,
    follows: 10,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(facebookSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "Divy_Parekh",
    followers: 170,
    follows: 222,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedinSocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
