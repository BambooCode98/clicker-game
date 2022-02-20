const scoreBox = document.querySelector('.score');
const clickArea = document.querySelector('.clicker-box');
const body = document.querySelector('body');
let score = 0;




clickArea.addEventListener('click', function() {
  score++;
  scoreBox.innerHTML = score;

  if(score === 10) {
    const treeBox = document.createElement('div');
    const treeText = document.createElement('p');
    body.append(treeBox);
    treeBox.append(treeText);
    treeText.textContent = "Tree";
    treeBox.classList.add('tree');
    treeText.classList.add('tree-text');
    clickArea.addEventListener('click', function() {
      score * 0.1;
    })
  }
})