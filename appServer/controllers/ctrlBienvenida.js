var request = require('request');

var apiOptions = {server : "http://localhost:3000"
};


if (process.env.NODE_ENV === 'production') {
apiOptions.server = "http://localhost:3000";
}

console.log('Server now running in'+process.env.NODE_ENV);


//separar render home
 var renderPaginaInicio = function (req, res){
    res.render('index', { title: 'Bienvenidos al Universo' });
   };   

module.exports.index = function(req, res) {
    renderPaginaInicio(req, res);
}
