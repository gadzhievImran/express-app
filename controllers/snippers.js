const Snippet = require('../models/snippets');

module.exports = {
  findOne: (req, res, next, id) => {
    const snippet = Snippet.findById(id);
    
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
    res.render('view', {
      title: req.snippet.filename,
      snippet: req.snippet
    })
  },
  
  showSearch: (req, res) => {
    if(!req.query.search) return res.redirect('/snippets');
    const query = req.query.search.trim().toLocaleLowerCase();
    
    const foundSnippets = snippets.filter(s =>
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
