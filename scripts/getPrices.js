document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("scan");
  button.addEventListener("click", function() {
    document.getElementById("message").textContent = `Fetching prices from coingecko`;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "clicked_scan_button" }, function(response) {
        document.getElementById("message").textContent = "";
        valueArray = response.data;
        console.log(valueArray);
        btc_value = valueArray.usd.value;
        eth_value = btc_value / valueArray.eth.value;
        xlm_value = btc_value / valueArray.xlm.value;
        xrp_value = btc_value / valueArray.xrp.value;
        document.getElementById("btc_rate").textContent = `1BTC = ${btc_value} USD`;
        document.getElementById("eth_rate").textContent = `1ETH = ${eth_value} USD`;
        document.getElementById("xrp_rate").textContent = `1XRP = ${xrp_value} USD`;
        document.getElementById("xlm_rate").textContent = `1XLM = ${xlm_value} USD`;
      });
    });
  });
});
