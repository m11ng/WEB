const board = document.querySelector('.card-container');
const hide_btn = document.querySelector('.hide-btn');
const show_btn = document.querySelector('.show-btn');
const shuffle_btn = document.querySelector('.shuffle-btn');

// 카드를 담을 cards 배열을 만든다.
let cards = [];

// cards 배열에 카드를 넣는다.
for (let i = 0; i < 52; i++)
  cards.push(`<img src="./img/${i}.png" alt="">`);

console.dir(cards);

// show
for (let i = 0; i < 52; i++) {
  board.innerHTML += cards[i];
}

// hide
board.innerHTML = '';
for (let i = 0; i < 52; i++) {
  board.innerHTML += `<img src="./img/back.png" alt="">`;
}

// shuffle -->

// cards 배열 섞고!
// show!
