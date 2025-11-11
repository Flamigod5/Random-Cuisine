document.addEventListener("DOMContentLoaded", function () {
const entries = [
  { text: "Chopstick Vietnames Cuisine", image: "images/chopstick-vietnames-cuisine.jpeg" },
  { text: "GK Yeero's", image: "images/gk-yeeros.jpg" },
  { text: "Guzman Y Gomez", image: "images/guzman-y-gomez.png" },
  { text: "Jim's Malaysian", image: "images/jims-malaysian.jpg" },
  { text: "Johnny Gio's", image: "images/johnny-gios.jpeg" },
  { text: "Kingsway Curry", image: "images/kingsway-curry.jpg" },
  { text: "Kuroneko", image: "images/kuroneko.jpg" },
  { text: "Petra Lebanese Cuisine", image: "images/petra-lebanese-cuisine.jpeg" },
  { text: "Vitaly Italian Restraunt", image: "images/vitaly-italian-restraunt.jpg" },
  
  { text: "Somewhere Completely New", image: "images/somewhere-completely-new.gif" },
  { text: "Crik's rotting body", image: "images/criks-dead-body.png"}
  
];

  const button = document.getElementById("revealButton");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", function () {
    const randomEntry = entries[Math.floor(Math.random() * entries.length)];

    resultDiv.innerHTML = `
      <p>${randomEntry.text}</p>
      <img src="${randomEntry.image}" alt="insert chopsticks image" width="300">
    `;
  });
});
