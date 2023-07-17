window.addEventListener('DOMContentLoaded', (event) => {
    // Problem 1
    document.querySelectorAll("figure").forEach(element => {
        element.classList.add("one-third");
    });

    // Problem 2
    document.querySelector("footer").addEventListener('click', function() {
        this.remove();
    });

    // Problem 3: Hide the 5th figure when it is double clicked
    let fifthFigure = document.querySelectorAll("figure")[4];
    fifthFigure.addEventListener('dblclick', function() {
        this.style.visibility = "hidden";
    });

    // Problem 4
    let firstCaption = document.querySelector("figure figcaption");
    let originalFont = window.getComputedStyle(firstCaption).fontFamily;

    firstCaption.addEventListener('mouseover', function() {
        this.style.fontFamily = "Cursive";
    });

    firstCaption.addEventListener('mouseout', function() {
        this.style.fontFamily = originalFont;
    });

    // Problem 5
    firstCaption.setAttribute('tabindex', '0');
    firstCaption.addEventListener('focus', function() {
        this.style.fontFamily = "Cursive";
    });

    firstCaption.addEventListener('blur', function() {
        this.style.fontFamily = "Times";
    });
});
