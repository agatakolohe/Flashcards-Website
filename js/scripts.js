$(document).ready(function() {
  $(".clickable-javascript").click(function() {
    $("#javascript-showing").slideToggle();
  });
  $(".clickable-operators").click(function() {
    $("#operators-showing").slideToggle();
  });
  $(".clickable-variables").click(function() {
    $("#variables-showing").slideToggle();
  });
  $(".clickable-variable-naming-conventions").click(function() {
    $("#variable-naming-conventions-showing").slideToggle();
  });
  $(".clickable-functions").click(function() {
    $("#functions-showing").slideToggle();
  });
  $(".clickable-methods").click(function() {
    $("#methods-showing").slideToggle();
  });
});