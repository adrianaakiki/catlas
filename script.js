

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
const map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: false
}).setView([20, 0], 2); 


// Adding styled map tile https://leaflet-extras.github.io/leaflet-providers/preview/#filter=CartoDB.Voyager
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
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
    text: "description."
 },
  {
    name: "Russian Blue",
    location: "Arkhangelsk, Northern Russia",
    coords: [64.54, 40.54], 
    img: "map-images/russian-blue.jpg",
    text: "description."
  },
  {
    name: "Siamese",
    location: "Thailand",
    coords: [13.7563, 100.5018], 
    img: "map-images/siamese.jpg",
    text: "description"
  },
  {
    name: "Scottish Fold",
    location: "Scotland",
    coords: [56.0, -4.0], 
    img: "map-images/scottish-fold.jpg",
    text: "description."
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




// Note: Add mobile version for later 

//MAP REFERENCES------------------------------- 
//VAR vs CONST https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
// map markers: https://www.youtube.com/watch?v=wVnimcQsuwk&list=PLGHe6Moaz52PUNP4DtIshALDogSURIlYB
// map popups: https://www.youtube.com/watch?v=OYjFR_CGV8o&list=PLGHe6Moaz52PUNP4DtIshALDogSURIlYB&index=2
// marker icon, shadows: https://www.youtube.com/watch?v=wnsEYm9hF0o&list=PLGHe6Moaz52PUNP4DtIshALDogSURIlYB&index=3
