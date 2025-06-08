document.addEventListener("DOMContentLoaded", function() {
    var contextmenu = document.getElementById("contextnavmenu");
    var contextmenubtn = document.getElementById("contextmenubtn");

    if (contextmenubtn) { // Check if element exists
        contextmenubtn.addEventListener('click', function() {
            if (contextmenu.style.display === "none") {
                contextmenu.style.display = "block";
            } else {
                contextmenu.style.display = "none";
            }
        });
    }
});
