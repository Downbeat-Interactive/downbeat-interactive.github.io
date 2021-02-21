 'use strict';

 class GooglePlayScraper {
   constructor(){
   }

 


  scrape(bundle){
    console.log("scraping: " + bundle);
    var url = 'https://play.google.com/store/apps/details?id='+bundle;


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

    failureCallback(){
      console.error("Failed to fetch");
    }


  }

  export {GooglePlayScraper};