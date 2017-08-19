chrome.browserAction.onClicked.addListener(getResult());
document.getElementById('submit').addEventListener('click', getQuery);

document.getElementById("text-input")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      getResult();
    }
  });

function getQuery() {
  return document.getElementById('text-input').value;
}

function getResult() {
  let ul = document.querySelector('#history-list');
  let html = '';
  let text = getQuery();
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



