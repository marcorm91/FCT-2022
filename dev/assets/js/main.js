/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
(function(factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define(["../widgets/datepicker"], factory);
    } else {

        // Browser globals
        factory(jQuery.datepicker);
    }
})(function(datepicker) {
    "use strict";

    datepicker.regional.es = {
        closeText: "Cerrar",
        prevText: "&#x3C;Ant",
        nextText: "Sig&#x3E;",
        currentText: "Hoy",
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun",
            "jul", "ago", "sep", "oct", "nov", "dic"
        ],
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["do.", "lu.", "ma.", "mi.", "ju.", "vi.", "sá"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
        showOtherMonths: true,
        selectOtherMonths: true,
    };
    datepicker.setDefaults(datepicker.regional.es);

    return datepicker.regional.es;

});
$(function() {
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $("#datepicker").datepicker({
        stepMonths: 0
    });
});