"use strict";

var _fetchData = _interopRequireDefault(require("../js/fetchData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

"use strict";

const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
let newsCategory = "bbc-news";
let url = "https://newsapi.org/v1/articles?source=".concat(newsCategory, "&apiKey=").concat(apiKey); //OnChange load

const sourceSelectBox = document.getElementById("newsSource");
sourceSelectBox.addEventListener("change", event => {
  newsCategory = event.target.value;
  url = "https://newsapi.org/v1/articles?source=".concat(newsCategory, "&apiKey=").concat(apiKey);

  _fetchData.default.getRequest(url);
}); //onload selectBox

const sourceUrl = "https://newsapi.org/v2/sources?apiKey=720c0314e8b2423eb7e1ffca5a1eeeb1";

_fetchData.default.apiSourceFetcher(sourceUrl);

_fetchData.default.getRequest(url);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class RequestService {
  getRequest(url) {
    return _asyncToGenerator(function* () {
      const newsData = yield fetch(url).then(data => data.json()).catch(err => newsSource.articlesProvider(err));
      newsSource.articlesProvider(newsData);
    })();
  }

  apiSourceFetcher(url) {
    return _asyncToGenerator(function* () {
      const newsSourceSelect = yield fetch(url).then(source => source.json()).catch(error => newsSource.newsSourceChannel(error));
      newsSource.newsSourceChannel(newsSourceSelect.sources);
    })();
  }

}

class newsSourceProvider extends RequestService {
  articlesProvider(data) {
    const elementId = document.getElementById("newsDetails");
    let returnHtml = "",
        uniqueVal = [];

    if (data.status === "error") {
      returnHtml = "<div id=\"error\">".concat(data.message, "</div>");
    } else {
      data.articles.map((_ref, index) => {
        let author = _ref.author,
            title = _ref.title,
            description = _ref.description,
            publishedAt = _ref.publishedAt,
            url = _ref.url,
            urlToImage = _ref.urlToImage;
        uniqueVal = index === 0 ? "<h1>".concat(author, "</h1>") : "";
        returnHtml += "".concat(uniqueVal, "<div class=\"newsTitle\">").concat(title, "</div><div class=\"newsDescription\">").concat(description, "</div><div class=\"publishDate\">").concat(publishedAt, "</div><div class=\"imageContainer\"><a href=\"").concat(url, "\" target=\"_blank\"><img src=").concat(urlToImage, " /></a></div>");
      });
    }

    elementId.innerHTML = returnHtml;
  }

  newsSourceChannel(data) {
    const sourceSelectBox = document.getElementById("newsSource");
    data.map((_ref2, index) => {
      let id = _ref2.id;
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }

}

const requestCall = new RequestService();
const newsSource = new newsSourceProvider();
var _default = requestCall;
exports.default = _default;
