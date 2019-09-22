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
    const snippets = Snippet.find();
    
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
    
    const foundSnippets = Snippet.find(s =>
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
      languages: Snippet.languages
    })
  },
  
  showUpdate: (req, res) => {
    res.render('form', {
      snippet: req.snippet,
      languages: Snippet.languages
    })
  },
  
  create: (req, res) => {
    Snippet.create(req.body)
      .then(() =>  res.redirect('/snippets'))
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
