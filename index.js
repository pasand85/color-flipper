// Import stylesheets
import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const clickMeButton = document.querySelector('.btn');
const hideMeButton = document.querySelector('.btn2');

const universalAnswer = document.querySelector('.answer');
const thankYou = document.querySelector('.thankYou');

const cellBtn1 = document.querySelector('.cell1');
const cellBtn2 = document.querySelector('.cell2');

const changeColorBg = document.getElementById('bgColor');
const colorBg = document.querySelector('.board');
const cell1Bg = document.querySelector('.cell1');
const cell2Bg = document.querySelector('.cell2');




clickMeButton.addEventListener('click', function() {
  universalAnswer.textContent = '42'
  thankYou.textContent = '^ Thank you :) ^'
})

hideMeButton.addEventListener('click', function() {
  universalAnswer.textContent = ' '
  thankYou.textContent = ''
})

changeColorBg.addEventListener('click', function(){
  colorBg.style.backgroundColor = getRandomColor();
  console.log(getRandomColor())
})

cellBtn1.addEventListener('click', function() {
  cell1Bg.style.backgroundColor = getRandomColor();
  console.log(getRandomColor())

})
cellBtn2.addEventListener('click', function() {
  cell2Bg.style.backgroundColor = getRandomColor();
})

function getRandomColor() {
  let r = Math.floor(Math.random() * 1000);
  let g = Math.floor(Math.random() * 1000);
  let b = Math.floor(Math.random() * 1000);
  let color = 'rgb('+r+','+g+','+b+')'
  return color
  
}