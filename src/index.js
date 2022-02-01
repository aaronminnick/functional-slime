import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import $ from 'jquery';
import { stateControl, makeRed, makeBlue, growSlime, shrinkSlime, initialSize } from './js/state';

$(() => {
  $("#slime-div").css("--height", `${stateControl(initialSize).size}px`)
});

$("#red-button").on("click", () => {
  $("#slime-div").css("background-color", stateControl(makeRed).color);
});

$("#blue-button").on("click", () => {
  $("#slime-div").css("background-color", stateControl(makeBlue).color);
});

$("#grow-button").on("click", () => {
  $("#slime-div").css("--height", `${stateControl(growSlime).size}px`);
});

$("#shrink-button").on("click", () => {
  $("#slime-div").css("--height", `${stateControl(shrinkSlime).size}px`);
});