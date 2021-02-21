'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GooglePlayScraper = function () {
  function GooglePlayScraper() {
    _classCallCheck(this, GooglePlayScraper);
  }

  _createClass(GooglePlayScraper, [{
    key: 'scrape',
    value: function scrape(bundle) {
      console.log("scraping: " + bundle);
      var url = 'https://play.google.com/store/apps/details?id=' + bundle;

      fetch(url).then(function (response) {
        // The API call was successful!
        return response.json();
      }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
      }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
      });
    }
  }, {
    key: 'failureCallback',
    value: function failureCallback() {
      console.error("Failed to fetch");
    }
  }]);

  return GooglePlayScraper;
}();

export { GooglePlayScraper };