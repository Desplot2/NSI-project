function changeStyleCoral() {
  var elements = document.getElementsByClassName('white');
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].className = 'coral';
    }
  }
}

function changeStyleWhite() {
  var elements = document.getElementsByClassName('coral');
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].className = 'white';
    }
  }
}
