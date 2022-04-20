/**
 * @author Justin Urbanek
 * @copyright any reuse or personal use is prohibited
 */

// onload page

/**
 * When the pages loads, random css-Classes will be given to the map Containers.<br />
 * @async functions loads async to site 
 * Creates an array, with all css, which shall be used.<br />
 * a for-loop run 20 times inwhich two rnd number will be generated.<br />
 * @rndClasses array which all css classes.<br />
 * @id id the id off the Map Containers.<br />
 * @css css will be the insertet class.<br />
 */
window.onload = function insertCssClasses() {


    // import classes from @style.css and @map.css
    let rndClasses = [
        "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60", "animate-pulse", "mt-10", "mt-20", "mt-30",
        "mt-40", "mt-50", "mt-60",
    ];

    for (let i = 0; i <= 20; i++) {
        let id = Math.floor((Math.random() * 20) + 1); // between 1 and 20
        let css = Math.floor((Math.random() * 13) + 1); // between 1 and 13
        document.getElementById(id.toString().padStart(2, "0")).classList.add(rndClasses[css - 1]);
    }
}

// functions