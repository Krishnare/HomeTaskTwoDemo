import requestCall from '../js/fetchData.js';

const newsCategory = "bbc-news";
const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;

//onload selectBox
const sourceUrl =
  "https://newsapi.org/v2/sources?apiKey=720c0314e8b2423eb7e1ffca5a1eeeb1";

//On change load
const sourceSelectBox = document.getElementById("newsSource");
sourceSelectBox.onchange = function() {
    const newsCategory = this.value;
    const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
    requestCall.getRequest(url);
  };
requestCall.apiSourceFetcher(sourceUrl);
requestCall.getRequest(url);