$(function () {
  var current = 2;
  var sky = document.querySelector("#image-360");
  var sky2 = document.querySelector("#back360");
  $("#slider-vertical").slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 45,
    slide: function (event, ui) {
      if (ui.value <= 25 && current !== 1) {
        transition("#1");
        current = 1;
      }
      else if (ui.value > 25 && ui.value <= 50 && current !== 2) {
        transition("#2");
        current = 2;
      }
      else if (ui.value > 50 && ui.value <= 75 && current != 3) {
        transition("#3");
        current = 3;
      }
      else if (ui.value > 75 && current !== 4) {
        transition("#4");
        current = 4;
      }
    }
  });
  $("#scene").click(function () {

    $("#modalShare").hide();
  })
  $("#share").click(function () {
    $("#modalShare").show();
    //https://aframe.io/docs/0.9.0/components/screenshot.html#methods
    var canvas = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
    $("#modalShare img").attr("src", canvas.toDataURL());

  })
//store interval here so we can clear if we change too fast
  var interval;
  function transition(next) {
    sky2.setAttribute("material", "src", next);
    //reset the opacity if we were in the middle of a transition
    sky.setAttribute("material", "opacity", 1);
    var opacity = 1.0;
    clearInterval(interval);
    interval = setInterval(function () {
      sky.setAttribute("material", "opacity", opacity);

      opacity -= 0.1;
      if (opacity <= 0) {
        clearInterval(interval);
        sky.setAttribute("material", "src", next);
        sky.setAttribute("material", "opacity", 1);
      }

    }, 50)
  }



});
