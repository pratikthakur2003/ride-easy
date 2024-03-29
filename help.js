const helpSections = document.querySelectorAll(".help-section");

helpSections.forEach((helpSection) => {
    helpSection.addEventListener("click", () => {
        helpSection.classList.toggle("active");
        helpSection.querySelector(".answer").classList.toggle("active-p");
        helpSection.querySelector("span").classList.toggle("active-span");
    })
})
