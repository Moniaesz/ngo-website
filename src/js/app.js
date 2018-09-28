document.addEventListener("DOMContentLoaded", function() {

    const header = document.getElementsByTagName("header")[0];
    const menu = header.getElementsByClassName("menu")[0];
    function showOverlay() {
        header.classList.toggle("overlay");
    }

    console.log(menu);
    console.log(header);

    header.add

    menu.addEventListener("click", function() {
        console.log('click');
        showOverlay();
    });

});