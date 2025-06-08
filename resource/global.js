document.addEventListener("DOMContentLoaded", function() {
    var contextmenu = document.getElementById("contextnavmenu");
    var contextmenubtn = document.getElementById("contextmenubtn");
    var screendim = document.getElementById("dimscreen");

    if (contextmenubtn) {
        contextmenubtn.addEventListener('click', function() {
            if (contextmenu.style.display === "none") {
                contextmenu.style.display = "block";
                screendim.style.display = "block";
            } else {
                contextmenu.style.display = "none";
                screendim.style.display = "none";
            }
        });

        document.getElementById("dimscreen").addEventListener("click", function() {
            if (window.getComputedStyle(screendim).display === "block") {
                contextmenu.style.display = "none";
                screendim.style.display = "none";
            }
        });
    }
});
