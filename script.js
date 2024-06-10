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
    quote: 'Most people do not listen with the intent to understand; they listen with the intent to reply.',
  },
  {
    quote: `Adaptability is the compass that guides you through uncharted waters. Embrace change, for it's the forge where we are molded.`,
  },
  {
    quote: 'We often think of choice as a thing. But choice is not a thing. Our options may be things, but a choice is an action.',
  },
  {
    quote: 'Learn how to do less but better, so you can achieve the highest possible return on every precious moment of your life.',
  },
  {
    quote: 'It always seems impossible until it is done.',
  },
  {
    quote: 'Be and remain positive. Challenge your will and ego to be and stay positive.',
  },
  {
    quote: 'Ability is what you are capable of doing. Motivation determines what you do. Attitude determines how well you do it.',
  },
  {
    quote: 'I love people who make me laugh. I honestly think it is the thing I like most, to laugh. It cures a multitude of ills. It is probably the most important thing in a person.',
  },
  {
    quote: 'Lose an hour in the morning, and you will spend all day looking for it.',
  },
  {
    quote: 'Success is not built on success. It is built on failure. It is built on frustration. Sometimes it is built on catastrophe.',
  },
  {
    quote: 'Let us not look back in anger, nor forward in fear, but around in awareness.',
  },
  {
    quote: 'The greatest gift you can give your family and the world is a healthy you.',
  },
  {
    quote: 'The harder I work, the luckier I get.',
  }
];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
});

let weather = {
  apiKey: "2f7ce8c8ee403f45539962027ccae114",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed, deg } = data.wind;
    const roundedTemp = Math.round(temp);
    const directions = [
      "Northerly",
      "North Easterly",
      "Easterly",
      "South Easterly",
      "Southerly",
      "South Westerly",
      "Westerly",
      "North Westerly",
    ];
    const directionIndex = Math.floor(((deg + 22.5) % 360) / 45);
    const direction = directions[directionIndex];

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = roundedTemp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed: " + speed + "km/h   " + direction;
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search-btn").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Cape Town");
