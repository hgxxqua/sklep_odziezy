document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.opacity = "0";
        
        setTimeout(() => {
            document.querySelector(".preloader").style.display = "none";
            document.querySelector(".content").style.opacity = "1";
        }, 800);
    }, 2500);
});
