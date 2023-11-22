document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector(".video-container");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            videoContainer.classList.add("scrolled");
        } else {
            videoContainer.classList.remove("scrolled");
        }
    });
});