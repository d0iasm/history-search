setInterval(function(){
  console.log("hoge");
}, 1000);

chrome.browserAction.onClicked.addListener(getResult(''));
document.getElementById('submit').addEventListener('click', getQuery);

document.getElementById("text-input")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      document.getElementById("submit").click();
    }
  });

function getQuery(event) {
  let value = document.getElementById('text-input').value;
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



