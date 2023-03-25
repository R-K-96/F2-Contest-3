
var puppeteer = require("puppeteer");

async function extractData() {

    var browser = await puppeteer.launch({ headless: false});

    var page = await browser.newPage();

    await page.goto("https://www.github.com/trending");


    // await page.waitForSelector('.col-9 color-fg-muted my-1 pr-4'); // It is waiting for this element to be present in dom tree

    // All your business logic to extract data goes here
    var popular_repos = await page.evaluate(function () {
      // First we are accessing all repos element using class  and then converting them in array
    //   var reposElements = Array.from(document.querySelector('.text-normal'));
        var reposElements = Array.from(document.getElementsByClassName('col-9 color-fg-muted my-1 pr-4'));
        var repoName = Array.from(document.querySelector(".text-normal"));
 
      var repos = [];
      var repoNameArr = [];
 
      reposElements.forEach(function (repo) {
        repos.push(repo.innerText);
      });
      repoName.forEach(function (repoN) {
        repoNameArr.push(repoN.innerText);
      });

      return repoNameArr;
});

console.log("Repos are", popular_repos);
}


extractData();