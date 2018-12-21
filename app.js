function clickedButton() {
  document.querySelector('.container').addEventListener('click', function() {
    // console.log(this);
  });  
};

clickedButton();

// console.log('app is connected?');

const buttons = document.querySelectorAll('.container');

// const buttonsArr = Array.from(buttons);
// buttonsArr.forEach(cur => {
//   cur.addEventListener('click', () => {
//     console.log('You clicked the button!');
//     console.log(cur);
//   });
// });

Array.from(buttons).forEach(cur => cur.addEventListener('click', () => {
  // console.log('You clicked the button!!')

  // ('.item-header').innerHTML
}));



const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // console.log('you clicked a button!!!')

    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      console.log('number key!');
      if (displayedNum === '0') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide' 
    ) {
      console.log('operator key!');
    }

    if (action === 'decimal') {
      console.log('decimal key');
      display.textContent = displayedNum + '.'
    }

    if (action === 'clear') {
      console.log('clear key!');
    }

    if (action === 'calculate') {
      console.log('calculate key!');
    }


  }
});