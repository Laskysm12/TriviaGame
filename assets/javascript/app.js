window.onload = function() {
  var stopwatch = {
    time: 60,
    clockRunning: true,

    count: function() {
      stopwatch.time--;

      // if time == 0 ...
      if (stopwatch.time === 0) {
        clearInterval(stopwatch.intervalId);
      }

      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);

      $("#display").text(converted);
    },

    timeConverter: function(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }

      return minutes + ":" + seconds;
    }
  }

  stopwatch.intervalId = setInterval(stopwatch.count, 1000);

  function handleClick() {         
    var amountCorrect = 0;          
    for(var i = 1; i <= 45; i++) {
      var radios = document.getElementsByName('group'+i);
      for(var j = 0; j < radios.length; j++) {
        var radio = radios[j];
        if(radio.value == "correct" && radio.checked) {
          amountCorrect++;
        }
      }
    }                   
    alert("Correct Responses: " + amountCorrect);
  }
};