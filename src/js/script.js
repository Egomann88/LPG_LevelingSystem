// onload

// lädt den Header auf jeder Seite
window.onload = async function loadHeader() {

    console.log("helllo");
    $('#Header').load('./header.html'); // immer der ausgeführten file ausgehen
}

// functions