var boolImageCycle = true;
var random;
var nPlayerWins = 0;
var nCpuWins = 0;

window.onload = function() {
    setInterval(changeCompChoice, 1000);
};


function changeCompChoice() {

    if (boolImageCycle) {
        random = Math.round(Math.random() * 4 + 1, 0);
        imgCpuChoice.src = getImagePath(random);
    }
}

function playerChose(playerNum) {


}

function playAgain(){


}

function getImagePath(num){

      switch (num) {
          case 1:
              return "./images/rock.jpg";
          case 2:
              return "./images/paper.jpg";
          case 3:
              return "./images/scissors.jpg";
          case 4:
              return "./images/lizard.jpg";
          case 5:
              return "./images/spock.jpg";
      }
}
