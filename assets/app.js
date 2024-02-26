
/* inspiration fra:
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
https://youtu.be/lfmg-EJ8gm4?si=GtQxPE1iOWop1cg0
https://devcamp.com/trails/javascript-in-the-browser/campsites/javascript-dom/guides/how-to-use-javascript-s-toggle-function
https://www.youtube.com/watch?v=-lxOIFN5hQs&ab_channel=MakeTechStuff

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

  let drinksHTML = '';

  /* Her indikeres der at denne funktion skal sker for hver af de 6 elementer i energyDrinks */
  energyDrinks.forEach(function(energyDrink, index){

  /* Her bruges .innerHTML til at tilføje til DOM. */  
  drinksEl.innerHTML += `

    <div class="drink-card">
    <h2>${energyDrink}</h2>
    <p><strong>Rating:</strong> ${ratings[index]} out of 5</p>
    </p>

    <p class="drink-contents-toggle">Drink Contents</p>

    <div class="drink-contents">
      <p>Sugar Content: ${sugarContents[index]}</p>
      <p>Caffeine Content: ${caffeineContents[index]}</p>

    </div>
  `; 

  })

  /* Her tilføjes der en event listener, til drinks-containeren i html, der lytter til clicks i den div*/
  drinksEl.addEventListener("click", function(event) {

    /* her bruges event.target til at finde den nærmeste ancestor til det element der er clicket på i det event som matcher den nævnte class, og giver den variablen */
    const drinkContentsToggle = event.target.closest(".drink-contents-toggle");

    /* her checkes det om det clickede element i event eller nogle ancestors matcher .drinkContentsToggle */
    if (drinkContentsToggle) {

      /* her bliver det fundet den næste sibling til drinkContentsToggle og giver det varaiblen drinkContents */
      const drinkContents = drinkContentsToggle.nextElementSibling;

      /* her checkes der om drinkContents display style i css er sat til none. hvis ja kører den koden under  */
      if (drinkContents.style.display === "none") {

        /* hvis drinkcontents er === none, sætter den display til block, altså viser indholdet i drinkContents */
        drinkContents.style.display = "block";

    /* hvis den if i starten af denne if else er false kører den koden under, som der skjuler drinkContents*/
    } else {
      drinkContents.style.display = "none";
    }
    }
  });

}

/* Jeg er lidt i tvivl over hvorfor det drink-card ved siden af også åbnes når der clickes på Drink Contents? Er det fordi jeg bruger display "none" og ikke hidden? eller har det noget at gøre med brugen af nextElementSibling */