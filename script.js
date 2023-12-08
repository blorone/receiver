document.getElementById('host').innerText += document.domain;

window.addEventListener('message', readMsg);

function readMsg(event) {
    if (event.origin === 'http://localhost') {
        document.getElementById('msg').innerText = event.data;
    }
}
