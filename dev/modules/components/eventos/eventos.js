$(function() {
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $("#datepicker").datepicker({
        stepMonths: 0
    });
});