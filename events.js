// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  var divs = document.getElementsByTagName('div')
  for (var i = 0; i < divs.length-1; i++){
    divs[i].addEventListener('mouseenter', setColour);
    divs[i].addEventListener('mouseleave', setWhite);
  }
  divs[divs.length-1].addEventListener('click', setColour);
  divs[divs.length-1].addEventListener('mouseleave', setWhite);
  //one();

  // Your turn! Create a new function called `two`, then call it from here.
  //two();
  //three();
  //four();
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', setColour);

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', setWhite);
}

// CREATE FUNCTION two HERE
function two () {
  var two = document.getElementById('two');
  two.addEventListener('mouseenter', setColour);
  two.addEventListener('mouseleave', setWhite);
}

// CREATE FUNCTION three HERE
function three () {
  var three = document.getElementById('three');
  three.addEventListener('mouseenter', setColour);
  three.addEventListener('mouseleave', setWhite);
}

// CREATE FUNCTION four HERE
function four () {
  var four = document.getElementById('four');
  four.addEventListener('click', setColour);
  four.addEventListener('mouseleave', setWhite);
}

// Changes the background color of event's target
function setColour (evt) {
  evt.target.style.backgroundColor = this.getAttribute("data-colour");
}
function setWhite (evt) {
  evt.target.style.backgroundColor = 'white';
}
