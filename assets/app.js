



if(window.location.href.includes("index")){
  // Alt her inde virker kun på index.html //
  
  const drinksEl = document.querySelector(".drinks-container")

  /* Her definerers de forskellige energridrikkes oplysninger i arrays */
  
  const energyDrinks = ["Red Bull", "Faxe Kondi Booster", "Monster Energy", "CULT energy", "ONE energy drink", "Standard cup of coffee"]
  const ratings = [5.0, 4.8, 4.5, 4.0, 2.9, 5.0]
  const sugarContents = ["25g", "55g", "55g", "49g", "30g", "0g"]
  const caffeineContents = ["75mg", "160mg", "180mg", "160g", "80mg", "80g"]

  energyDrinks.forEach(function(energyDrink, index){
  drinksEl.innerHTML += `

    <div class="drink-card">
    <h2>${energyDrink}</h2>
    <p><strong>Rating:</strong> ${ratings[index]} out of 5</p>
    <p><strong>Sugar Content:</strong> ${sugarContents[index]}</p>
    <p><strong>Caffeine Content:</strong> ${caffeineContents[index]}</p>

  `; 

  })

}