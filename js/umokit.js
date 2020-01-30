import $ from 'cash-dom';

$(document).ready(function() {
    $('.notification .delete').on('click', function() {
        $(this).on('click', function() {
            $(this).parent().remove();
        });
    });

    $('select.pagination-select').on('change', function() {
        window.location.href = $(this).val();
    });
});
