"use strict";

Array.from(document.querySelectorAll("svg.js-calendar-graph-svg rect")).forEach((node, i) => {
  setTimeout(function () {
    setInterval(function () {
      setTimeout(setNodeColor(node, "red"), 100)
      setTimeout(setNodeColor(node, "orange"), 200)
      setTimeout(setNodeColor(node, "yellow"), 300)
      setTimeout(setNodeColor(node, "green"), 400)
      setTimeout(setNodeColor(node, "blue"), 500)
      setTimeout(setNodeColor(node, "indigo"), 600)
      setTimeout(setNodeColor(node, "violet"), 700)
    }, 800);
  }, i * 2);
});

function setNodeColor(node, color) {
  return () => node.setAttribute("fill", color)
}
