"use strict";

const { div } = require("@chaff/fui-html");

exports.wrapper =
  div
    .attr("style", "display: flex; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999; background-color: rgba(0,0,0,0.5);")
    .prop("onclick", (evt) => {
      evt.target.remove();
    });