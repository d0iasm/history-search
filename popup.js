document.addEventListener('DOMContentLoaded', function () {
  var query = {
	  text: ''
  };
  chrome.history.search(query, function (results) {
	  console.table(results);
  });
});
