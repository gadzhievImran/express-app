const { randomBytes } = require('crypto');

const snippets = require('../data/snippets.json');
const languages = require('../data/languages');

class Snippet {
  static find(predicate = arg => arg) {
    return snippets.filter(predicate);
  }
  
  static findById(id) {
    return snippets.find(s => s.id === id);
  }
  
  static create(data) {
    const snippet = new Snippet({
      ...data,
      id: randomBytes(8).toString('hex'),
      createdAt: Date.now()
    });
    
    snippets.push(snippet);
    console.log(snippet, 'snippet');
    
    return Promise.resolve(snippet);
  }
  
  constructor(props) {
    Object.assign(this, Snippet.schema, props);
  }
}

Snippet.languages = languages;

Snippet.schema = {
  filename: '',
  description: '',
  language: '',
  code: '',
  time: '1.56.32'
};

module.exports = Snippet;
