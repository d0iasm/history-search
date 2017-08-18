document.getElementById('history-search').addEventListener('submit', getQuery);
function getQuery() {
	alert("Click!");
}


document.addEventListener('DOMContentLoaded', function () {
  var ul = document.querySelector('#history-list');
  var html = '';
  var query = {
    text: '',
    maxResults: 10
  };

  chrome.history.search(query, function (results) {
    results.forEach(function (result) {
      html += '<li class="history-list-item">' +
        '<a href="' + result.url + '" target="_blank">' +
        result.title +
        '</a>' +
        '</li>';
    });
    ul.innerHTML = html;
  });
});

// function getQuery(){
// var value = document.getElementById('text-input').value;
// ul.innerHTML = '<li>'+ value +'</li>';
// }

