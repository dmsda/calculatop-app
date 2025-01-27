let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function hapus() {
    display.value = display.value.slice(0, -1);
}

function tambah() {
    display.value += '+';
}

function kurang() {
    display.value += '-';
}

function kali() {
    display.value += '*';
}

function bagi() {
    display.value += '/';
}

function hasil() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

document.querySelectorAll('.tombol1, .tombol2, .tombol3, .tombol4, .tombol5, .tombol6, .tombol7, .tombol8, .tombol9, .tombol0').forEach(button => {
    button.addEventListener('click', function() {
        display.value += this.innerText;
    });
});