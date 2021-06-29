/**
 * Creates a paragraph element
 * @param {String} data Data toc reate a document body
 */
function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data.currentTarget.response;
    document.body.appendChild(paragraph);
  }

  /**
   * Make a Query on wikipedia
   * @param {Function} callback Function that create the document
   */
function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open(
        'GET',
        'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    );
    request.onload = callback;
    request.send();
}

queryWikipedia(createElement);
