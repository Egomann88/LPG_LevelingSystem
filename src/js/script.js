/**
 * @author Justin Urbanek
 * @copyright any reuse or personal use is prohibited
 */

// onload

// lädt den Header auf jeder Seite
/* window.onload = async function loadHeader() {

} */

window.onload = function init() {
  this.loadHeader();
}

// functions


// https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
// Fetching HTML the modern Javascript way

/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

/**
 * loads the Header
 */
async function loadHeader() {
  const contentDiv = document.getElementById("Header");
  contentDiv.innerHTML = await fetchHtmlAsText("header.html");
}