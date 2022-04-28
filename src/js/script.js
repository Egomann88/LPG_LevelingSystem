/**
 * @author Justin Urbanek
 * @copyright any reuse or personal use is prohibited
 */

// onload

// lädt den Header auf jeder Seite
/* window.onload = async function loadHeader() {

} */

window.onload = function init() {
  this.loadPage();
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
 * tests and loads a page
 * @param {String} pageId document Id the page will be inserted in
 * @param {String} pageName complete name of the page (Standard: header) 
 */
async function loadPage(pageId = "Header", pageName = "header.html") {
  const contentDiv = document.getElementById(pageId);
  contentDiv.innerHTML = await fetchHtmlAsText(pageName);
}