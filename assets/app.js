


/* Hvis window lokationen der bliver linked til indholder "index" bliver koden under udført  */
if(window.location.href.includes("index")){
  // Alt her inde virker kun på index.html //
  
  const drinksEl = document.querySelector(".drinks-container")

  /* Her definerers de forskellige energridrikkes oplysninger i arrays */
  
  /* De 5 variabler for energy drink navne bliver declared */
  const energyDrinks = ["Red Bull", "Faxe Kondi Booster", "Monster Energy", "CULT energy", "ONE energy drink", "Standard cup of coffee"]

  /* Her bliver de 5 ratings til hver energidrik declared */
  const ratings = [5.0, 4.8, 4.5, 4.0, 2.9, 5.0]

  /* Her bliver sukkerindholdet for de forskellige energidrikke declared */
  const sugarContents = ["25g", "55g", "55g", "49g", "30g", "0g"]

    /* Her bliver koffeinindholdet for de forskellige energidrikke declared */
  const caffeineContents = ["75mg", "160mg", "180mg", "160g", "80mg", "80g"]

  /* Her indikeres der at denne funktion skal sker for hver af de 6 elementer i energyDrinks */
  energyDrinks.forEach(function(energyDrink, index){


  /* Her bruges .innerHTML til at tilføje til DOM */  
  drinksEl.innerHTML += `

    <div class="drink-card">
    <h2>${energyDrink}</h2>
    <p><strong>Rating:</strong> ${ratings[index]} out of 5</p>
    <p><strong>Sugar Content:</strong> ${sugarContents[index]}</p>
    <p><strong>Caffeine Content:</strong> ${caffeineContents[index]}</p>
    </div>
  `; 

  })

}