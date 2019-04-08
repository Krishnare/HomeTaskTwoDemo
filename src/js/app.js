import requestCall from "../js/fetchData.js";

"use strict"
const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
let newsCategory = "bbc-news";
let url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;

//OnChange load
const sourceSelectBox = document.getElementById("newsSource");
sourceSelectBox.addEventListener("change", event => {
  newsCategory = event.target.value;
  url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
  requestCall.getRequest(url);
});

//onload selectBox
const sourceUrl =
  "https://newsapi.org/v2/sources?apiKey=720c0314e8b2423eb7e1ffca5a1eeeb1";
requestCall.apiSourceFetcher(sourceUrl);

requestCall.getRequest(url);
