document.addEventListener("DOMContentLoaded", function () {
const entries = [
  { text: "Chopstick Vietnames Cuisine", image: "chopstick-vietnames-cuisine" },
  { text: "GK Yeero's", image: "gk-yeeros.jpg" },
  { text: "Guzman Y Gomez", image: "guzman-y-gomez.png" },
  { text: "Jim's Malaysian", image: "jims-malaysian.jpg" },
  { text: "Johnny Gio's", image: "johnny-gios.jpeg" },
  { text: "Kingsway Curry", image: "kingsway-curry.jpg" },
  { text: "Kuroneko", image: "kuroneko.jpg" },
  { text: "Petra Lebanese Cuisine", image: "petra-lebanese-cuisine.jpeg" },
  { text: "Vitaly Italian Restraunt", image: "vitaly-italian-restraunt.jpg" },
  
  { text: "Somewhere Completely New", image: "somewhere-completely-new.gif" }
];

  const button = document.getElementById("revealButton");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", function () {
    const randomEntry = entries[Math.floor(Math.random() * entries.length)];

    resultDiv.innerHTML = `
      <p>${randomEntry.text}</p>
      <img src="${randomEntry.image}" alt="Encounter Image" width="300">
    `;
  });
});
