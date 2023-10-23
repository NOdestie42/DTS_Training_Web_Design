function showCategorie() {
    const show = document.querySelector('.categorie-option');
    show.classList.toggle('categorie-option-show');
}

function openNavSide() {
    if (window.screen.width <= 1129 && window.screen.width >= 768) {
        document.querySelector(".dts-sidebar-side").style.width = "44%";
    }
    else if (window.screen.width <= 760) {
        document.querySelector(".dts-sidebar-side").style.width = "96%";
    }
}
function hideNavSide() {
    document.querySelector(".dts-sidebar-side").style.width = "0%";
}

window.onclick = function (event) {
    if (!event.target.matches('.select-icon')) {
        var dropdowns = document.getElementsByClassName("categorie-option");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('categorie-option-show')) {
                openDropdown.classList.remove('categorie-option-show');
            }
        }
    }
}
