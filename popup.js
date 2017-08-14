document.addEventListener('DOMContentLoaded', function () {
  var query = {
    text: ''
  };
  chrome.history.search(query, function (results) {
    results.forEach(function (result) {
      console.log(result);
    });
  });
});
