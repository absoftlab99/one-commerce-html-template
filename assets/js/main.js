$( document ).ready(function() {
    $('#list_btn').on('click', function() {
        $('#list_products').css('display','block');
        $('#grid_products').css('display','none');
    })
    $('#grid_btn').on('click', function() {
        $('#grid_products').css('display','block');
        $('#list_products').css('display','none');
    })
});