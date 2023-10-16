function showCategorie() {
    const show = document.querySelector('.categorie-option');
    show.classList.toggle('categorie-option-show');
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
