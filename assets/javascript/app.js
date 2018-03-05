
window.onload = function() {

  // maybe have to put everything in this?

var intervalId;

// He had it set to false
var clockRunning = true;

var stopwatch = {

  time: 60,

count: function() {

  stopwatch.time--;

  var converted = stopwatch.timeCoverter(stopwatch.time);
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

};



function handleClick()
  {         
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