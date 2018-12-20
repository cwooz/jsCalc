function clickedButton() {
  document.querySelector('.container').addEventListener('click', function() {
    console.log(this);
  });  
};

clickedButton();

// console.log('app is connected?');