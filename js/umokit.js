import $ from 'cash-dom';

$(document).ready(function() {
    $('.notification .delete').on('click', function() {
        $(this).closest('.notification').remove();
    });

    $('select.pagination-select').on('change', function() {
        window.location.href = $(this).val();
    });
});
