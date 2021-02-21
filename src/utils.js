 'use strict';

 class GooglePlayScraper {
   constructor(){
   }

 


  scrape(bundle){
    console.log("scraping: " + bundle);
    var url = 'https://play.google.com/store/apps/details?id='+bundle;


    $.ajax({
      type: "get",
      url: "https://www-opensocial.googleusercontent.com/api/people/jacksonsdean/@self",
      contentType: "application/json; charset=utf-8",
      data: {},
      success: function (result) {
        image = result.entry.thumbnailUrl;
        name = result.entry.displayName;
      },
      error: function () {
      }
    });
    
    
    
  }

    failureCallback(){
      console.error("Failed to fetch");
    }


  }

  export {GooglePlayScraper};