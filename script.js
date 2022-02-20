'use strict';

const scoreBox = document.querySelector('.score');
const clickArea = document.querySelector('.clicker-box');
const body = document.querySelector('.new-plants');
let score = 0;

function addOneLeaf() {
  score += 1
}

function tree() {
  score += 2
}

function flower() {
  score += 5
}

function cactus() {
  score += 15
}

function pine() {
  score += 75
}

clickArea.addEventListener('click', function() {
  addOneLeaf();
  scoreBox.innerHTML = score;

  if(score > 10) {
    tree();
  }

  if(score > 100) {
    flower();
  }

  // if(score > 500) {
  //   cactus();
  // }

  if(score > 700) {
    pine();
  }

  if(score === 10) {
    const treeBox = document.createElement('div');
    const treeText = document.createElement('p');
    body.append(treeBox);
    treeBox.append(treeText);
    treeText.textContent = "Tree: Adds an additional 2 leaves.";
    treeBox.classList.add('plant-box');
    treeText.classList.add('plant-text');
  
  }

  if(score === 100) {
    const flowerBox = document.createElement('div');
    const flowerText = document.createElement('p');
    body.append(flowerBox);
    flowerBox.append(flowerText);
    flowerText.textContent = "Flower: Adds an additional 5 leaves.";
    flowerBox.classList.add('plant-box');
    flowerText.classList.add('plant-text');
  
  }

  // if(score === 500) {
  //   const cactusBox = document.createElement('div');
  //   const cactusText = document.createElement('p');
  //   body.append(cactusBox);
  //   cactusBox.append(cactusText);
  //   cactusText.textContent = "Cactus: Adds an additional 15 leaves.";
  //   cactusBox.classList.add('plant-box');
  //   cactusText.classList.add('plant-text');
  
  // }

  if(score === 700) {
    const pineBox = document.createElement('div');
    const pineText = document.createElement('p');
    body.append(pineBox);
    pineBox.append(pineText);
    pineText.textContent = "Pine: Adds an additional 75 leaves.";
    pineBox.classList.add('plant-box');
    pineText.classList.add('plant-text');
  
  }
})