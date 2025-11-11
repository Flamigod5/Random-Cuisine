document.addEventListener("DOMContentLoaded", function () {
const entries = [
  { text: "Chopstick Vietnames Cuisine", image: "chopstick-vietnames-cuisine" },
  { text: "GK Yeero's", image: "gk-yeeros" },
  { text: "Guzman Y Gomez", image: "guzman-y-gomez" },
  { text: "Jim's Malaysian", image: "jims-malaysian" },
  { text: "Johnny Gio's", image: "johnny-gios" },
  { text: "Kingsway Curry", image: "kingsway-curry" },
  { text: "Kuroneko", image: "kuroneko" },
  { text: "Petra Lebanese Cuisine", image: "petra-lebanese-cuisine" },
  { text: "Somewhere Completely New", image: "somewhere-completely-new" },
  { text: "Vitaly Italian Restraunt", image: "vitaly-italian-restraunt" }
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
