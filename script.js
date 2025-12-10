

//Timeline Page Interactive Section............................................

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
// resource for removing and adding class: https://www.youtube.com/watch?v=lhLh8N9YN7E&t=108s
// javascript basics: https://www.youtube.com/watch?v=W6NZfCO5SIk&t=871s
// hide and show javascript: https://www.youtube.com/watch?v=-oQnDrNzTTA
// switchable tabs javascript: https://www.youtube.com/watch?v=Ay93z3mZuh8
// eventlisteners javascript: https://www.youtube.com/watch?v=i_8NQuEAOmg
// onclick javascript: https://www.youtube.com/watch?v=eHPLTDOAggc
// I also inspected and had a look at the cheese archive website from the previous student's project as an idea as I was doing a similar feature where info changes on the screen, thats determined by each button https://ayaka05233.github.io/cheese_archive_website/ source:Ayaka Iwaki