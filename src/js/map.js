// onload page 
window.onload = function insertCssClasses() {

    let rndClasses = [
        "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60"
    ];

    for (let i = 0; i <= 20; i++) {
        let id = Math.floor((Math.random() * 20) + 1); // between 1 and 20
        let css = Math.floor((Math.random() * 6) + 1); // between 1 and 6
        document.getElementById(id.toString().padStart(2, "0")).classList.add(rndClasses[css - 1]);
    }
}

// functions