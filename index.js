document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".starry-bg");

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        starContainer.appendChild(star);
    }
    
});
