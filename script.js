const textveld = document.getElementById('TextVeld');
const knoppen = document.getElementsByClassName('text');

// Laat text veld zien
zichtbaar = function(e) {
    e.preventDefault();
    textveld.innerHTML += this.innerHTML + " ";
}

for(let i=0; i <knoppen.length; i++) {
    knoppen[i].addEventListener('click', zichtbaar);
}

// verwijderd alles
function verwijderen() {
    textveld.innerHTML = "";
}
