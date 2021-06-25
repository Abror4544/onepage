$(function () {
    function returnStep(value) {
        var step;
        if (value < 10 && value > 0) {
            step = 20;
        } else if (value > 10 && value < 40) {
            step = 20;
        } else if (value > 20 && value < 60) {
            step = 50;
        } else if (value > 60 && value < 99) {
            step = 100;
        } else {
            step = 0;
        }
        return step;
    }
    $('input[name="polzun"]').on("input change", function () {
        var currentValue = $(this).val();
        var step = returnStep(currentValue);
        $(this).attr('step', step);
    });

});