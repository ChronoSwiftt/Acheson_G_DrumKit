(() => {
  // variable stack first
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

  function removePlayingClass(event) {

    event.target.classList.remove('playing');
  }

  function playSound(event) {
    //event is the event object that gets generated when you push any keys
    // it contains all kinds of information about the event -> target ,what its called
    // where it happend in the app etc
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
          key = document.querySelector(`div[data-key="${event.keyCode}"]`);

// the ! is a test for inequality -> the expression does not work.
    if (!audio) {return} // return is a way to stop function execution

    audio.currentTime = 0;
    audio.play();

// find the div that
    key.classList.add('playing');
  }

  // listen for keyboard event, and then do something with it.
  window.addEventListener('keydown', playSound)

})();
