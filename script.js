

//Timeline Page Interactive Section------------

//note: I previously used 'var', and removed it and used 'let' instead to avoid variable leaks and bugs in the long run
// This links and grabs my elements from my html that are in the class 'era-button' and 'era-content'

let buttons = document.getElementsByClassName("era-button");
let panels = document.querySelectorAll(".era-content > div");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("era-button--active");
        }

        this.classList.add("era-button--active");

        let selectedEra = this.getAttribute("data-era");

        for (let k = 0; k < panels.length; k++) {

            if (panels[k].getAttribute("data-era") === selectedEra) {
                panels[k].classList.add("era-content--active");
            } else {
                panels[k].classList.remove("era-content--active");
            }
        }
    });
}
//This removes and adds the era content, images and text on click so that only the selected era is shown on the screen 
//For my timeline, it switches between different eras and shows only the content that matches the selected button.

//Each era button detects a click using the 'EventListener' feature.
//When a button is clicked, the script adds color fill styling to the clicked button and removes it from the rest of the buttons.
//The JavaScript goes through the different panels and hides the ones that don't match the selected button, but it shows the data-era that matches the selected button.


// TIMELINE REFERENCES------------------------------------------------
// resource for removing and adding class: https://www.youtube.com/watch?v=lhLh8N9YN7E&t=108s
// javascript basics: https://www.youtube.com/watch?v=W6NZfCO5SIk&t=871s
// hide and show javascript: https://www.youtube.com/watch?v=-oQnDrNzTTA
// switchable tabs javascript: https://www.youtube.com/watch?v=Ay93z3mZuh8
// eventlisteners javascript: https://www.youtube.com/watch?v=i_8NQuEAOmg
// onclick javascript: https://www.youtube.com/watch?v=eHPLTDOAggc
// I also inspected and had a look at the cheese archive website from the previous student's project as an idea as I was doing a similar feature where info changes on the screen, thats determined by each button https://ayaka05233.github.io/cheese_archive_website/ source:Ayaka Iwaki


//MAP PAGE INTERACTIVE SECTION----------------------------------------
// 'map' matches the map id from the html, following leaflet's tutorial https://leafletjs.com/examples/quick-start/
// wrapped the leaflet code so it only runs on the map page to avoid breaking other pages 
const mapDiv = document.getElementById("map");

if (mapDiv && typeof L !== "undefined") {
  const map = L.map("map").setView([20, 0], 2);

// Adding styled map tile https://leaflet-extras.github.io/leaflet-providers/preview/#filter=CartoDB.Voyager
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20
  }
).addTo(map);

//MAP CAT BREEDS AND MARKERS------------------

const breeds = [
  {
    name: "Maine Coon",
    location: "Maine, United States",
    coords: [45.0, -69.0],
    img: "map-images/maine-coon.jpg",
    text: "Maine Coone's are adapted to survive harsh winters through their majestic, thick, coats and their large stature. These gentle giants are known for their friendliness, playfulness, and affection. "
 },
  {
    name: "Russian Blue",
    location: "Arkhangelsk, Northern Russia",
    coords: [64.54, 40.54], 
    img: "map-images/russian-blue.jpg",
    text: "Also known as Archangel cats, Russian Blues have distinctive physical traits, including a silvery-blue coat and striking green eyes. They are known to be very energetic and athletic, and their strong hind legs make them excellent jumpers and climbers. Russian Blues are intelligent, loyal, and playful creatures. "
  },
  {
    name: "Siamese",
    location: "Thailand",
    coords: [13.7563, 100.5018], 
    img: "map-images/siamese.jpg",
    text: "Siamese cats were historically considered sacred, protecting temples and often serving as companions to royal families. They're known for their striking appearance, energetic attention, and chatty, loving personality. Siamese cats make a lasting impression as the extroverts of the feline world."
  },
  {
    name: "Scottish Fold",
    location: "Scotland",
    coords: [56.0, -4.0], 
    img: "map-images/scottish-fold.jpg",
    text: "Scottish Folds are known for their easygoing, playful nature, with distinct folded ears originating in Scotland from a barn cat with naturally folded ears due to a spontaneous genetic mutation."
  },
  {
  name: "Persian",
  location: "Iran, Tehran",
  coords: [35.6892, 51.3890],
  img: "map-images/persian.jpg", 
  text: "Persian cats are among the oldest cat breeds, known for their sweet, calm personalities. Persian cats have been featured in the world's first cat show in London in 1871, and were popular breeds amongst royal families. They are known for their distinct flat faces and luxurious, long, and elegant fur coats."
},
{
  name: "Egyptian Mau",
  location: "Egypt, Cairo",
  coords: [30.0444, 31.2357],
  img: "map-images/egyptian-mau.jpg",
  text: "The Egyptian Mau originated in Ancient Egypt and was often depicted in ancient hieroglyphs, where it was closely associated with spirituality. Egyptian Mau's are known for their muscular and spotted physique and emotional intelligence. Their other distinct characteristics include notably large ears and unique vocalizations, with chirps and trills rather than typical meows. "
}
];


// This loops through the breeds and creates one Leaflet marker for each
breeds.forEach((breed) => {
  const marker = L.marker(breed.coords).addTo(map);

  // image and text bindpop up that links to html
  marker.bindPopup(`
    <div class="breed-popup">
      <img src="${breed.img}" alt="${breed.name}" class="breed-popup-img" />
      <h6 class="breed-popup-name">${breed.name}</h6>
      <p class="breed-popup-location">${breed.location}</p>
      <p class="breed-popup-text">${breed.text}</p>
    </div>
  `);
});


}-


// Note: Add mobile version for later 

//MAP REFERENCES------------------------------- 
//VAR vs CONST https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
// map markers: https://www.youtube.com/watch?v=wVnimcQsuwk&list=PLGHe6Moaz52PUNP4DtIshALDogSURIlYB
// map popups: https://www.youtube.com/watch?v=OYjFR_CGV8o&list=PLGHe6Moaz52PUNP4DtIshALDogSURIlYB&index=2
// marker icon, shadows: https://www.youtube.com/watch?v=wnsEYm9hF0o&list=PLGHe6Moaz52PUNP4DtIshALDogSURIlYB&index=3



// HAMBURGER NAV BAR TOGGLE -----------------
document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navButton || !navLinks) {
    return;
  }
  console.log("Navbar JS ready"); 
  navButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
