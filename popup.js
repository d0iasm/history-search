setInterval(function(){
  console.log("hoge");
}, 1000);

// document.addEventListener('DOMContentLoaded', getResult(''), {once: true});
chrome.browserAction.onClicked.addListener(getResult(''));
document.getElementById('history-search').addEventListener('submit', getQuery);

function getQuery() {
  let value = document.getElementById('text-input').value;
  // let ul = document.querySelector('#history-list');
  // ul.innerHTML = '<li>'+ value +'</li>';
	// alert(value);
  getResult(value);
}

function getResult(text) {
  let ul = document.querySelector('#history-list');
  let html = '';
  let query = {
    text: text,
    maxResults: 13
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
}



