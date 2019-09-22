const snippets = require('../data/snippets.json');
const languages = require('../data/languages');

class Snipet {
  static find(predicate) {
    return snippets.filter(predicate);
  }
  
  static findById() {
    return snippets.find(s => s.id === id);
  }
}

module.exports = Snipet;
