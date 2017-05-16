
"use strict";

var fontPercent = 100;

function agrandir(selector) {
  fontPercent += 10;
  $(selector).css("font-size", fontPercent + "%");
}


function reduire(selector) {
  fontPercent -= 10;
  $(selector).css("font-size", fontPercent + "%");
}

function reset(selector) {
  fontPercent = 100;
  $(selector).css("font-size", fontPercent + "%");
}
