const handOptions = {
  rock: "./images/icon-rock.svg",
  paper: "./images/icon-paper.svg",
  scissors: "./images/icon-scissors.svg",
};

const outlineOptions = {
  rock: "rock-outline",
  paper: "paper-outline",
  scissors: "scissors-outline",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  console.log("User hand is ", hand);
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  //   User picked hand
  var outline = document.getElementById("userPickOutline");
  outline.classList.remove(".paper-outline");
  outline.classList.add(outlineOptions[hand]);
  document.getElementById("userPickImg").src = handOptions[hand];

  let cpHand = pickComputerHand();
  referee(hand, cpHand);
};

const pickComputerHand = () => {
  // computer hand
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * 3)];

  console.log("Computer hand is ", cpHand);
  //   computer picked hand
  var outline = document.getElementById("computerPickOutline");
  outline.classList.remove(".scissors-outline");
  outline.classList.add(outlineOptions[cpHand]);
  document.getElementById("computerPickImg").src = handOptions[cpHand];

  return cpHand;
};
// blue is paper, yellow is scissors, red is rock
const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("You lose!");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("You win!");
    setScore(SCORE + 1);
  }
  if (userHand === cpHand) {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("You win!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("You lose!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("You lose!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("You win!");
    setScore(SCORE + 1);
  }
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
    SCORE = score
  document.querySelector(".score h1").innerText = score;
};

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}