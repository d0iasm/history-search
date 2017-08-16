document.addEventListener('DOMContentLoaded', function () {
  var ul = document.querySelector('#history-list');
  var html = '';
  var query = {
    text: '',
    maxResults: 15
  };
  chrome.history.search(query, function (results) {
    results.forEach(function (result) {
      html += '<li>' +
        '<a href="' + result.url + '" target="_blank">' +
        result.title +
        '</a>' +
        '</li>';
    });
    ul.innerHTML = html;
  });
});
