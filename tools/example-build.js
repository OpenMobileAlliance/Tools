#!/usr/bin/env node

"use strict";
const pth = require("path");
const builder = require("./builder").Builder;
const options = {
  optimize: "none",
  name: "respec-debug",
  out: pth.join(__dirname, "../examples/respec-debug.js")
};
builder.build(options).catch(
  (err) => console.log(err.stack)
);
