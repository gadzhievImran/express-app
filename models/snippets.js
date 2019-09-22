const snippets = require('../data/snippets.json');
const languages = require('../data/languages');

class Snipet {
  static find(predicate = arg => arg) {
    return snippets.filter(predicate);
  }
  
  static findById(id) {
    return snippets.find(s => s.id === id);
  }
}

Snipet.languages = languages;

module.exports = Snipet;
