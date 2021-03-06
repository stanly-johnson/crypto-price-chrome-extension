document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('scan');
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'clicked_scan_button' }, function(response) {
      valueArray = response.data;
      btc_value = valueArray.usd.value;
      eth_value = parseFloat(btc_value / valueArray.eth.value).toFixed(4);
      xlm_value = parseFloat(btc_value / valueArray.xlm.value).toFixed(4);
      xrp_value = parseFloat(btc_value / valueArray.xrp.value).toFixed(4);
      document.getElementById('btc_rate').textContent = `1BTC = ${btc_value} USD`;
      document.getElementById('eth_rate').textContent = `1ETH = ${eth_value} USD`;
      document.getElementById('xrp_rate').textContent = `1XRP = ${xrp_value} USD`;
      document.getElementById('xlm_rate').textContent = `1XLM = ${xlm_value} USD`;
    });
  });
});
