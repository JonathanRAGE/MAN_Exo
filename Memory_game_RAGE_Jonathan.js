
  const img1 = '1_carte.png';
  const img2 = '2_carte.png';
  const img3 = '3_carte.png';
  const img4 = '4_carte.png';
  const img5 = '5_carte.png';
  const img6 = '6_carte.png';


  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  const boardEl = document.querySelector('.board');
  const movesEl = document.getElementById('moves');
  const foundEl = document.getElementById('found');
  const messageEl = document.getElementById('message');
  const restartBtn = document.getElementById('restart');

  let deck = [];
  let first = null, second = null;
  let lock = false;
  let moves = 0, found = 0;

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildDeck(){
  const pair = images.concat(images);
  deck = shuffle(pair.map((src, i) => ({ id: i, src })));
}

function renderBoard(){
  if(!boardEl) return;
  boardEl.innerHTML = '';
  deck.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.dataset.src = card.src;

    const inner = document.createElement('div');
    inner.className = 'inner';

    const front = document.createElement('div');
    front.className = 'face front';
    const img = document.createElement('img');
    img.src = card.src;
    img.alt = 'carte';
    front.appendChild(img);

    const back = document.createElement('div');
    back.className = 'face back';
    back.textContent = '?';

    inner.appendChild(front);
    inner.appendChild(back);
    cardEl.appendChild(inner);

    cardEl.addEventListener('click', () => onCardClick(cardEl));
    cardEl.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); onCardClick(cardEl); }
    });

    boardEl.appendChild(cardEl);
  });
}

function onCardClick(el){
  if(lock) return;
  if(el === first) return;
  if(el.classList.contains('matched')) return;

  el.classList.add('flipped');

  if(!first){
    first = el;
    return;
  }

  second = el;
  moves++;
  updateMoves();
  checkMatch();
}

function checkMatch(){
  if(first.dataset.src === second.dataset.src){
    first.classList.add('matched');
    second.classList.add('matched');
    found++;
    updateFound();
    resetSelection();
    if(found === images.length){
      if(messageEl) messageEl.textContent = `Bravo ! Tu as trouvé toutes les carte en ${moves} coups.`;
    }
  } else {
    lock = true;
    setTimeout(() => {
      first.classList.remove('flipped');
      second.classList.remove('flipped');
      resetSelection();
    }, 800);
  }
}

function resetSelection(){
  [first, second] = [null, null];
  lock = false;
}

function updateMoves(){ if(movesEl) movesEl.textContent = moves; }
function updateFound(){ if(foundEl) foundEl.textContent = found; }

function start(){
  moves = 0; found = 0;
  if(movesEl) movesEl.textContent = moves;
  if(foundEl) foundEl.textContent = found;
  if(messageEl) messageEl.textContent = '';
  buildDeck();
  renderBoard();
}

if(restartBtn) restartBtn.addEventListener('click', start);

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
