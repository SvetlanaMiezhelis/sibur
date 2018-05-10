$(function() {
    
    loadFormData();

    $('.form-control').change(function () {

        var key = $(this).prop('name');

        localStorage[key] = $(this).val();
    });

    $('.registration-form').submit(function (e) {

        e.preventDefault();
        
        showModal();

    })
    
});

function loadFormData() {
    
    $('.form-control').each(function () {

        var key = $(this).prop('name');

        var value = localStorage[key];

        $(this).val(value);
        
    });
    
}

function showModal() {
    
    loadModalData();
    
    $(".modal").modal();
    
}

function loadModalData() {

    $('.table-result').find('.cell-data').each(function(){

        var key = $(this).data('name');

        var value = localStorage[key];

        $(this).text(value);

    });

}