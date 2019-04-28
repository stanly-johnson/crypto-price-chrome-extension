chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_scan_button") {
    console.log("Fetching Prices from CoinGecko");
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.coingecko.com/api/v3/exchange_rates", true);
    req.onload = onResponseReceived;
    req.send();
    async function onResponseReceived() {
      let requestJSON = await JSON.parse(req.response);
      let valueArray = requestJSON.rates;
      console.log(valueArray);
      console.log("Rate Fetched");
      sendResponse({ data: valueArray, success: true });
    }
    return true;
  }
});
