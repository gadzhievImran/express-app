const snippets = require('../data/snippets.json');
const languages = require('../data/languages');

module.exports = {
  showAll: (req, res) => {
    res.render('list', {
      title: 'Сниппеты',
      snippets
    });
  },
  
  showOne: (req, res) => {
    const snippet = snippets.find(s => s.id === req.params.snippetId);
  
    res.render('view', {
      title: snippet.filename,
      snippet
    })
  },
  
  showSearch: (req, res) => {
  
  },
  
  showCreate: (req, res) => {
    res.render('form', {
      title: 'Новый сниппет',
      snippet: {},
      languages
    })
  },
  
  showUpdate: (req, res) => {
    const snippet = snippets.find(s => s.id === req.params.snippetId);
  
    res.render('form', {
      snippet,
      languages
    })
  },
  
  create: (req, res) => {
    // create snippet
    
    res.redirect('/snippets');
  },
  
  update: (req, res) => {
    // update snippet
    const snippet = snippets.find(s => s.id === req.params.snippetId);
    
    res.redirect(`/snippets/${snippet.id}`)
  },
  
  delete: (req, res) => {
    res.redirect('/snippets')
  }
};

// 1.21.08
