// spin functions, one bar at a time
function spinFirst() {
  let first = Math.floor(Math.random() * 6);

  if (first === 0) {
    document.getElementById("img1").src = "assets/8ball.jpeg";
  } else if (first === 1) {
    document.getElementById("img1").src = "assets/clover.jpg";
  } else if (first === 2) {
    document.getElementById("img1").src = "assets/crown.png";
  } else if (first === 3) {
    document.getElementById("img1").src = "assets/fire.jpg";
  } else if (first === 4) {
    document.getElementById("img1").src = "assets/rainbow.png";
  } else if (first === 5) {
    document.getElementById("img1").src = "assets/trophy.jpeg";
  }
  console.log(`first is ${first}`);
  return first;
}

function spinSecond() {
  let second = Math.floor(Math.random() * 6);

  if (second === 0) {
    document.getElementById("img2").src = "assets/8ball.jpeg";
  } else if (second === 1) {
    document.getElementById("img2").src = "assets/clover.jpg";
  } else if (second === 2) {
    document.getElementById("img2").src = "assets/crown.png";
  } else if (second === 3) {
    document.getElementById("img2").src = "assets/fire.jpg";
  } else if (second === 4) {
    document.getElementById("img2").src = "assets/rainbow.png";
  } else if (second === 5) {
    document.getElementById("img2").src = "assets/trophy.jpeg";
  }
  console.log(`second is ${second}`);
  return second;
}

function spinThird() {
  let third = Math.floor(Math.random() * 6);

  if (third === 0) {
    document.getElementById("img3").src = "assets/8ball.jpeg";
  } else if (third === 1) {
    document.getElementById("img3").src = "assets/clover.jpg";
  } else if (third === 2) {
    document.getElementById("img3").src = "assets/crown.png";
  } else if (third === 3) {
    document.getElementById("img3").src = "assets/fire.jpg";
  } else if (third === 4) {
    document.getElementById("img3").src = "assets/rainbow.png";
  } else if (third === 5) {
    document.getElementById("img3").src = "assets/trophy.jpeg";
  }
  console.log(`third is ${third}`);
  return third;
}

function giveReward() {
  outcome = [first, second, third];
  console.log(`outcome is ${outcome}`);
  if ((first === second) === third) {
    let bigReward = creditsPlayingPerGame * 50;
    CURRENT_CREDITS += creditsPlayingPerGame * 50;
    return bigReward;
  } else if (first === second || second === third || first === third) {
    let littleReward = creditsPlayingPerGame * 5;
    CURRENT_CREDITS += creditsPlayingPerGame * 5;
    return littleReward;
  } else {
    let wrecked = creditsPlayingPerGame * -1;
    return wrecked;
  }
}

// variables
let first_bar = spinFirst();
let second_bar = spinSecond();
let third_bar = spinThird();
let CURRENT_CREDITS = 0;
let addCredits = 0;
let cashOutCredits = 0;
let result = 0;
let creditsPlayingPerGame = 1;

let increaseCreditsBtn = document.querySelector("#increaseBtn");
let decreaseCreditsBtn = document.querySelector("#decreaseBtn");
let addCreditsBtn = document.querySelector("#addMoreBtn");
let cashOutCreditsBtn = document.querySelector("#cashOutBtn");
let playBtn = document.querySelector("#playBtn");
let creditsCell = document.querySelector("#credits");
let playingCell = document.querySelector("#playing");
let lastCell = document.querySelector("#last");

// add more credits to remaining credits
function add100() {
  CURRENT_CREDITS += 100;
  creditsCell.textContent = `${CURRENT_CREDITS}`;
}

addCreditsBtn.addEventListener("click", add100);

// display results from last game
function displayResults(reward) {
  lastCell.textContent = reward;
}

// cashout remaining credits
function cashOutAll() {
  CURRENT_CREDITS = 0;
  creditsCell.textContent = `${CURRENT_CREDITS}`;
}

cashOutCreditsBtn.addEventListener("click", cashOutAll);

// increase credits per play
function increaseNextPlay() {
  creditsPlayingPerGame += 1;
  playingCell.textContent = `${creditsPlayingPerGame}`;
}

increaseCreditsBtn.addEventListener("click", increaseNextPlay);

// decrease credits per play
function decreaseNextPlay() {
  if (creditsPlayingPerGame > 0) {
    creditsPlayingPerGame -= 1;
    playingCell.textContent = `${creditsPlayingPerGame}`;
  }
}

decreaseCreditsBtn.addEventListener("click", decreaseNextPlay);

// press play button
function playGame() {
  if (creditsPlayingPerGame > CURRENT_CREDITS) {
    alert(
      "Not enough credits to play.  Add more credits, or in some instances decrease credits per spin, to continue."
    );
  } else {
    first = spinFirst();
    second = spinSecond();
    third = spinThird();
    const reward = giveReward();
    if (CURRENT_CREDITS > 0) {
      CURRENT_CREDITS -= creditsPlayingPerGame;
    }
    displayResults(reward);
  }
  creditsCell.textContent = `${CURRENT_CREDITS}`;
}

playBtn.addEventListener("click", playGame);

//comment
