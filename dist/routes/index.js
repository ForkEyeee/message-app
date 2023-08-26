"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
router.post("/new", function (req, res, next) {
    messages.push({
        text: req.body.messageText,
        user: req.body.authorText,
        added: new Date(),
    });
    res.redirect("/");
    console.log(messages);
});
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {
        title: "Mini Messageboard",
        messages: messages,
    });
    console.log(messages);
});
router.get("/new", function (req, res, next) {
    res.render("form", { title: "Add New" });
    console.log(req.body);
});
module.exports = { router, messages };
