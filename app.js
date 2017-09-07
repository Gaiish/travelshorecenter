var express = require('express');
var hbs = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res)=>{
  res.render('home');
});

app.get('/destinations', (req, res)=>{
  res.render('destinations');
});

app.get('/packages', (req, res)=>{
  res.render('packages');
})

app.get('/about', (req, res)=>{
  res.render('about');
});

app.get('/book', (req, res)=>{
  res.render('book')
});

app.get('/community', (req, res)=>{
  res.render('community')
});

app.get('/inspiration', (req, res)=>{
  res.render('inspiration')
});

app.get('/sustainability', (req, res)=>{
  res.render('sustainability')
});

app.listen(app.get('port'), ()=>{
  console.log('Server started');
})
