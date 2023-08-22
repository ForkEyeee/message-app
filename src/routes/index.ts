const express = require("express");
const router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
/* GET home page. */

router.get("/", function (req: any, res: any, next: any) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

router.get("/new", function (req: any, res: any, next: any) {
  res.render("index", { title: "Express" });
});

module.exports = { router, messages };
