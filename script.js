const riderBtn = document.getElementById("riderBtn");
const driverBtn = document.getElementById("driverBtn");
const footerSignup = document.getElementById("footer-signup-btn");
const rentalBtn = document.getElementById("rental-btn");
const rentalKnowBtn = document.getElementById("rental-know-btn");

riderBtn.addEventListener("click", () => {
    window.location.href = "./rider.html";
})

driverBtn.addEventListener("click", () => {
    window.location.href = "./driver.html";
})

footerSignup.addEventListener("click", () => {
    window.location.href = "./h.html";
})

rentalBtn.addEventListener("click", () => {
    window.location.href = "./rental.html";
})

rentalKnowBtn.addEventListener("click", () => {
    window.location.href = "./about.html";
})