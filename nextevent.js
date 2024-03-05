// Dohvatite naslove na koje želite da primenite događaje
var h2Naslov = document.querySelector('h2');
var h3Naslov = document.querySelector('h3');

// Dodajte događaj za prelazak mišem za h2 naslov
h2Naslov.addEventListener('mouseover', function () {
    // Kada miš pređe preko h2 naslova, promenite boju teksta
    h2Naslov.style.color = 'red';
});

h2Naslov.addEventListener('mouseout', function () {
    // Kada miš napusti h2 naslov, vrati boju teksta na prvobitnu vrednost
    h2Naslov.style.color = 'initial';
});

// Dodajte događaj za prelazak mišem za h3 naslov
h3Naslov.addEventListener('mouseover', function () {
    // Kada miš pređe preko h3 naslova, promenite boju teksta
    h3Naslov.style.color = 'red';
});

h3Naslov.addEventListener('mouseout', function () {
    // Kada miš napusti h3 naslov, vrati boju teksta na prvobitnu vrednost
    h3Naslov.style.color = 'initial';
});
// Dohvatite naslov u headeru na koji želite da primenite događaje
var h1Naslov = document.querySelector('h1');

// Dodajte događaj za prelazak mišem za h1 naslov
h1Naslov.addEventListener('mouseover', function () {
    // Kada miš pređe preko h1 naslova, promenite boju teksta
    h1Naslov.style.color = 'red';
});

h1Naslov.addEventListener('mouseout', function () {
    // Kada miš napusti h1 naslov, vrati boju teksta na prvobitnu vrednost
    h1Naslov.style.color = 'initial';
});
