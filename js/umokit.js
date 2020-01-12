document.addEventListener('DOMContentLoaded', function() {
    (document.querySelectorAll('.notification .delete') || []).forEach(function($delete) {
        $notification = $delete.parentNode;
        $delete.addEventListener('click', function() {
            $notification.parentNode.removeChild($notification);
        });
    });

    (document.querySelectorAll('select.pagination-select') || []).forEach(function($select) {
        $select.addEventListener('change', function() {
            window.location.href = $select.value;
        });
    });
});
