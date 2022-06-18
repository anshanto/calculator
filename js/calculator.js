
function deleteMe() {
    document.getElementById('myresult').value = '';
}

function calculator(newValue) {
    document.getElementById('myresult').value += newValue;
}
function answer() {
    var a = document.getElementById('myresult').value;
    var b = eval(a);
    document.getElementById('myresult').value = b;
}