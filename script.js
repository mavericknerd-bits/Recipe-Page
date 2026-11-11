function showTip() {
    const tip = document.getElementById("tipBox");

    if (tip.style.display === "block") {
        tip.style.display = "none";
    } else {
        tip.style.display = "block";
    }
}