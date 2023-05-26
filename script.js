"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".GameBody").style.backgroundColor = "#00FF00";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".GameBody").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

const topButton = document.getElementById("Top_Button");

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelector(".cta").addEventListener("click", function () {
  var button = document.querySelector(".cta");
  button.innerText = "robswan41@gmail.com";
});

const quotes = [
  {
    quote: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
    writer: `Colin Powell`,
  },
  {
    quote: `"Whenever you find yourself on the side of the majority, it is time to pause and reflect."`,
    writer: `Mark Twain`,
  },
  {
    quote: `"If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion."`,
    writer: `Elon Musk`,
  },
  {
    quote: `"There is only one boss. The customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else."`,
    writer: `Sam Walton`,
  },
  {
    quote: `"A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well."`,
    writer: `Jeff Bezos`,
  },
  {
    quote: `“The most valuable businesses of coming decades will be built by entrepreneurs who seek to empower people rather than try to make them obsolete.”`,
    writer: `Peter Thiel`,
  },
  {
    quote: `“To move, you need mission and maintenance. Mission only, you'll break down. Maintenance only, you'll go nowhere. Both are critical in movement - we need to know when to push and when to fix.”`,
    writer: `Rob Oscroft Swan`,
  },
  {
    quote: `“There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
    writer: `Colin Powell`,
  },
];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;

  writer.innerHTML = quotes[random].writer;
});
