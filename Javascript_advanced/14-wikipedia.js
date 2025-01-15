function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
  xhttp.send();
  xhttp.onload = function() {
    if (xhttp.status === 200) {
      const response = JSON.parse(xhttp.responseText);
      const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
      callback(extract);
    } else {
      console.error('Request failed with status:', xhttp.status);
    }
  }
}

function callback(data) {
  createElement(data);
}

queryWikipedia(createElement)
