let screen = document.getElementById('screen')

function calculate(input) {
    screen.value += input;
}

function result() {
    let res = eval(screen.value);
    document.getElementById('screen').value = res
}

function delLastDigit() {
    screen.value = screen.value.slice(0, -1)

}

function clrScreen() {
    screen.value = ""
}


