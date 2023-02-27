$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
});


function openModal() {
    var instance = M.Modal.getInstance($('#modal'));
    instance.open();
}

function openNav(){
    var instance = M.Sidenav.getInstance($('.sidenav'));
    instance.open();
}