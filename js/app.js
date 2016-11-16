var points = 0,
    gameInProgress = false;

// button click
$('button').click(function() {
  gameInProgress = true;
  // start game
      // if game in progress: don't start new game
      // else start new game
  setInterval(function() {          // does this have to have a name
    animateHole( randomNumber() );  // in order to call clearInterval() ?
  }, 500); // speed of play
  startTime();
});

// return 1-3 at random
function randomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

// animate random div
function animateHole(num) {
  $('.mole').addClass('selected').removeClass('animated tada');
  $('#mole' + num).addClass('animated tada').removeClass('selected');
}

// timer
var time = 10;                  // sets game duration

function timer() {
  if (time > 0) {
    time -= 1;
    $('#time').text('time remaining: ' + time);
  }  // html element needed here
  else { gameOver();
       }          // make game over function 
  // console.log(time);
}
// timer countdown
var startTime = function() {
  setInterval(function() {
    timer();
  }, 1000); 
}
// scoring
$(document).on('click', '.animated', function() {
  points += 1;
  $('#score').text('score: ' + points);
  console.log(points);
});