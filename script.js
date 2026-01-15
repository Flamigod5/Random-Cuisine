document.addEventListener("DOMContentLoaded", function () {

  const entries = [
    { text: "GK Yeero's", image: "images/gk-yeeros.jpg", weight: 5 },
    { text: "Guzman Y Gomez", image: "images/guzman-y-gomez.png", weight: 5 },
    { text: "Jim's Malaysian", image: "images/jims-malaysian.jpg", weight: 5 },
    { text: "Johnny Gio's", image: "images/johnny-gios.jpeg", weight: 5 },
    { text: "Kuroneko", image: "images/kuroneko.jpg", weight: 5 },
    { text: "Petra Lebanese Cuisine", image: "images/petra-lebanese-cuisine.jpeg", weight: 5 },

    //removed
    
    //{ text: "Chopstick Vietnamese Cuisine", image: "images/chopstick-vietnamese-cuisine.jpg", weight: 5 },
    //{ text: "Vitaly Italian Restraunt", image: "images/vitaly-italian-restraunt.jpg", weight: 5 },
    //{ text: "Kingsway Curry", image: "images/kingsway-curry.jpg", weight: 5 },

    
    { text: "Somewhere Completely New", image: "images/somewhere-completely-new.gif", weight: 7 },

    
    { text: "Crik's rotting body", image: "images/criks-dead-body.png", weight: 3 },
    { text: "OctoWhopper", image: "images/octowhopper.jpg", weight: 3 },

    { text: "Golden Egg", image: "images/golden-egg.png", weight: 0.25 }
  
  ];

  // Weighted random selection function
  function weightedRandom(list) {
    const totalWeight = list.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;

    for (const item of list) {
      if (random < item.weight) {
        return item;
      }
      random -= item.weight;
    }

    return list[list.length - 1]; // fallback
  }

  const button = document.getElementById("revealButton");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", function () {
    const randomEntry = weightedRandom(entries);

    resultDiv.innerHTML = `
      <p>${randomEntry.text}</p>
      <img src="${randomEntry.image}" alt="Broken Image: ${randomEntry.text}" height="300">
    `;
  });

});
