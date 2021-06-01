const superagent = require('superagent');
function getBookData(req, res) {
  const superApi = `https://www.googleapis.com/books/v1/volumes?q=quilting`;
  superagent.get(superApi).then(data => {
    const apiData = data.body.items.map(myObject => new Books(myObject))

    console.log(apiData)
    res.send(apiData)
  });
}

class Books {
  constructor(data) {
    this.selfLink = data.selfLink;
    this.kind = data.kind;
    this.id = data.id;
    this.title = data.volumeInfo.title;
    this.subtitle = data.volumeInfo.subtitle;
    this.authors = data.volumeInfo.authors;
    this.publisher = data.volumeInfo.publisher;
    this.publishedDate = data.volumeInfo.publishedDate;
    this.description = data.volumeInfo.description;
    this.img = data.volumeInfo.imageLinks.smallThumbnail;
    this.image = data.volumeInfo.imageLinks.thumbnail;

  }
}
module.exports = getBookData;