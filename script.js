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
