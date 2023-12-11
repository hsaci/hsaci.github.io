//  les div sont en class pour les rassembler toutes puisqu'elles ont 
//  la même class dans une collection
let carreaux = document.querySelectorAll(".carreau");
let ColorButton = document.querySelector("#clicked");
 
// event click pour element bouton
ColorButton.addEventListener("click", setTimeout(ColorierCarreaux(),4000));
 
function ColorierCarreaux() {
	carreaux.forEach(carreau => {
        carreau.style.backgroundColor = generateRandomColor()
    });
    /*
    for (const carreau of carreaux) {
        carreau.style.backgroundColor = generateRandomColor()
    }	*/
}

// function de génération de couleur
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
 