$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
});


function openModal() {
    var instance = M.Modal.getInstance($('#modal'));
    instance.open();
}