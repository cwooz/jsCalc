function clickedButton() {
  document.querySelector('.container').addEventListener('click', function() {
    // console.log(this);
  });  
};

clickedButton();

// console.log('app is connected?');

const buttons = document.querySelectorAll('.container');

const buttonsArr = Array.from(buttons);
buttonsArr.forEach(cur => {
  cur.addEventListener('click', () => {
    console.log('You clicked the button!');
    console.log(cur);
  });
});

Array.from(buttons).forEach(cur => cur.addEventListener('click', () => {
  console.log('You clicked the button!!')
}));