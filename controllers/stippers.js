const snippets = require('../data/snippets.json');
const languages = require('../data/languages');

module.exports = {
  findOne: (req, res, next, id) => {
    const snippet = snippets.find(s => s.id === id);
    
    if(!snippet) {
      return res.redirect('/');
    }
    
    req.snippet = snippet;
    
    next();
  },
  
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
    if(!req.query.search) return res.redirect('/snippets');
    
    const query = req.query.search;
    
    const foundSnippets = snippets.find(s =>
      s.filename.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query) ||
      s.language.toLocaleLowerCase().includes(query)
    );
    
    res.render('search', {
      title: 'Результаты поиска',
      query,
      snippets: foundSnippets
    })
  },
  
  showCreate: (req, res) => {
    res.render('form', {
      title: 'Новый сниппет',
      snippet: {},
      languages
    })
  },
  
  showUpdate: (req, res) => {
    res.render('form', {
      snippet: req.snippet,
      languages
    })
  },
  
  create: (req, res) => {
    // create snippet
    
    res.redirect('/snippets');
  },
  
  update: (req, res) => {
    // update snippet
    const snippet = req.snippet;
    
    res.redirect(`/snippets/${snippet.id}`)
  },
  
  delete: (req, res) => {
    const snippet = req.snippet;
    
    res.redirect('/snippets');
  }
};

// 1.30
