import $ from 'cash-dom';
import zxcvbn from 'zxcvbn';

$(document).ready(function() {
    $('.notification .delete').on('click', function() {
        $(this).closest('.notification').remove();
    });

    $('select.pagination-select').on('change', function() {
        window.location.href = $(this).val();
    });
});

$('input.password-with-meter').each(function() {
    var input = $(this);
    input.on('change', function() {
        var result = zxcvbn(input.val());
        input.closest('div.field:not(.has-addons)').find('div.password-meter').removeClass().addClass('password-meter password-meter--' + result.score);
    });
})
