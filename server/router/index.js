module.exports =  (app) => {

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
    app.use('/v1/price', require('./v1/coin/price'));
    app.use('/v1/history',require('./v1/coin/history'));
  //app.use('/signin', require('./signin'));
  //app.use('/signout', require('./signout'));
  //app.use('/posts', require('./posts'));

  // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
        res.status(404).send('404');
        }
    });
  
  
};