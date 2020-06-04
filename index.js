function btn_email() {
    location.href = "mailto:"+"henriquemelo@protonmail.com"+'?cc=';
}

function python_click() {
    window.open("python.png")
}

function btn_perfil() {

    $("#bioCard").fadeOut();
    $("#Social").fadeOut();
    $("#perfilCard").fadeIn();

}

function btn_bio() {

    $("#Social").fadeOut();
    $("#perfilCard").fadeOut();
    $("#bioCard").fadeIn();

}

function btn_social() {

    $("#perfilCard").fadeOut();
    $("#bioCard").fadeOut();
    $("#Social").fadeIn()
}
