chrome.browserAction.onClicked.addListener(getResult());
document.getElementById('submit').addEventListener('click', getQuery);

document.getElementById("text-input")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      getResult();
    }
  });

document.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 37){
    moveFocus();
  }
  if (event.keyCode == 39) {
    moveFocus();
  }
});


function getQuery() {
  console.assert(document.getElementById('text-input') != null, 'input field is none.');
  return document.getElementById('text-input').value;
}

function getResult() {
  let ul = document.getElementById('history-list');
  let html = '';
  let text = getQuery();
  let query = {
    text: text,
    maxResults: 15
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

function moveFocus() {
  var index = 0;
  var lists = document.getElementsByClassName("history-list-item");
  lists[index].firstElementChild.focus();
  console.log(lists[index].children);
}
