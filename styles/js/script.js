document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const showMoreButton = document.getElementById('showMore');
    const closeButton = document.getElementsByClassName('close')[0];

    showMoreButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

const menuButton = document.getElementById("menuButton");
const popupMenu = document.getElementById("popupMenu");

menuButton.addEventListener("click", function () {
    if (popupMenu.style.display === "block") {
        popupMenu.style.display = "none";
    } else {
        popupMenu.style.display = "block";
    }
});