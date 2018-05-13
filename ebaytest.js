console.log("hello");


// var request = require("request");

// var options = { method: 'GET',
//   url: 'http://svcs.ebay.com/services/search/FindingService/v1?keywords=tetris',
//   headers: 
//    { 'Postman-Token': 'cb56648e-0ea8-4994-b598-868d82f69dff',
//      'Cache-Control': 'no-cache',
//      'X-EBAY-SOA-SECURITY-APPNAME': 'FuzzyJon-RetroGam-PRD-92cc9f5ed-70036e56',
//      'X-EBAY-SOA-OPERATION-NAME': 'findCompletedItems',
//      'X-EBAY-SOA-SERVICE-VERSION': '1.13.0' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });



function ebayAverage () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://svcs.ebay.com/services/search/FindingService/v1?RESPONSE-DATA-FORMAT=JSON&keywords=tetris,nes&categoryId=139973",
        "method": "GET",
        "headers": {
        "X-EBAY-SOA-SERVICE-VERSION": "1.13.0",
        "X-EBAY-SOA-OPERATION-NAME": "findCompletedItems",
        "X-EBAY-SOA-SECURITY-APPNAME": "FuzzyJon-RetroGam-PRD-92cc9f5ed-70036e56",
        "Cache-Control": "no-cache",
        "Postman-Token": "2533f0d4-46b4-4ae3-90c5-bfa1c936774a"
        }
    }
    
    $.ajax(settings).done(function (response) {
        var results = JSON.parse(response);
        // console.log(results);
        var items = results.findCompletedItemsResponse[0].searchResult[0].item;
        var priceArray = [];

        for (var i = 0; i < items.length; i++) {
            // console.log(items[i]);
            var sellingState = items[i].sellingStatus[0].sellingState;
            var sellingPrice = items[i].sellingStatus[0].currentPrice[0].__value__;
            // console.log(sellingState);
            // var sum = 0;
            if (sellingState == "EndedWithSales") {
                // console.log("true");
                // console.log(sellingPrice);
                priceArray.push(sellingPrice);
                // console.log(priceArray);
            }
        }
        console.log(priceArray);

    });
}

ebayAverage();

