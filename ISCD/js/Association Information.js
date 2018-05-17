window.onload = function () {
    let close = document.getElementById('close');
    let onLine = document.getElementById('onLine');
    let information = document.getElementById('information');

    information.onclick = function () {
        information.style.display = 'none';
        onLine.style.display = 'block';
    }
    close.onclick = function () {
        information.style.display = 'block';
        onLine.style.display = 'none';
    }
}