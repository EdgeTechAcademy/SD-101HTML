function started() {
  wordCount  = document.getElementById('wordCount');
  searchWord = document.getElementById('searchWord');
}
window.onload = computeSubtotal;

let line = "that that is is that that is not is not is that it it is";

function findWord() {
  let word = searchWord.value;
  let aWord = line.split(' ');
  let foundCnt = 0;
  let notFound = 0;
  for (var i = 0; i < aWord.length; i++) {
    if (aWord[i] == word) {
      foundCnt++;
    }
    else {
      notFound++;
    }
  }
  wordCount.innerHTML = "I found " + foundCnt + " <strong>" + word + "</strong>'s<br>" +
                        "and " + notFound + " not matching";
}

function loops() {
  for (var i = 0; i < line.length; i++) {
    worCount.innerHTML += line.charAt(i) + "<BR>";
  }

}
