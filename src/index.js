import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import $ from 'jquery';
import { stateControl, makeRed, makeBlue } from './js/state';

$("#red-button").on("click", () => {
  $("#state-div").css("background-color", stateControl(makeRed).color);
});

$("#blue-button").on("click", () => {
  $("#state-div").css("background-color", stateControl(makeBlue).color);
});

//click a button which is caught by jquery, and invokes the funtion to change state - this adds a property to state which would contain a css instruction / class name - then we run another script to poll the state in order to add css class to the div