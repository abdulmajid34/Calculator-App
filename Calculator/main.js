function insert(num) {
    $('.cal-display').val($('.cal-display').val() + num);
}
function multiply(num) {
    $('.cal-display').val($('.cal-display').val() * num);
}
function eql() {
    $('.cal-display').val(eval($('.cal-display').val()));
}
function remove() {
    $('.cal-display').val('');
}
function del() {
    value = $('.cal-display').val();
    $('.cal-display').val(value.substring(0, value.length - 1))
}