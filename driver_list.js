const btns = document.querySelectorAll(".book-btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.href = "./payment.html";
        console.log("clicked");
    }); 
});