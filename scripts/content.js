chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_scan_button") {
    console.log("Fetching Prices from CoinGecko");
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.coingecko.com/api/v3/exchange_rates", true);
    req.onload = onResponseReceived;
    req.send(null);
    function onResponseReceived() {
      let requestJSON = JSON.parse(req.response);
      let valueArray = requestJSON.rates;
      console.log("Rate Fetched");
      sendResponse({ data: valueArray, success: true });
    }
  }
});
