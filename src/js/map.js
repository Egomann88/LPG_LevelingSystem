// onload page 
window.onload = function addCss() {

    let allClasses = [
        "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40",
        "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20",
        "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60",
        "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40",
        "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20",
        "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60",
        "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40",
        "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20",
        "mt-30", "mt-40", "mt-50", "mt-60", "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60",
        "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "mt-30", "mt-40", "mt-50", "mt-60"
    ];

    for (let i = 0; i <= 20; i++) {
        let id = 0;
        let css = 0;
        id = Math.floor((Math.random() * 20) + 1); // between 1 and 100
        css = Math.floor((Math.random() * 100) + 1); // between 1 and 100
        console.log("id", id);
        console.log("css", css);
        document.getElementById(id.toString().padStart(2, "0")).classList.add(allClasses[css - 1]);
    }
}

// functions