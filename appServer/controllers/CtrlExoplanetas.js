
var request = require('request');

var apiOptions = {server : "http://localhost:3000"
};


if (process.env.NODE_ENV === 'production') {
apiOptions.server = "http://localhost:3000";
}


//separa render 
var renderExoplanetas = function (req, res, responsebody){
    res.render('exoPlanetas', { title: 'Welcome exoPlanetas',exoplanetas:responsebody });
   };   


module.exports.exoPlanetas = function(req, res) {
    var requestOptions, path;
    path = "/api/exoplaneta";
    requestOptions={
      url: apiOptions.server+path,
      method:"GET",
      json:{}
    };

    request(requestOptions,
        function(err,response,body){
        if(response.statusCode===200){
            renderExoplanetas(req,res, body); 
        } 
        else{
          _showError(req, res, response.statusCode);
        }

       });
}


    //error
    var _showError=function(req,res,status){
      var title, content;
      if (status===404){
        title = "No es default, no se encuentra pagina",
        content="que pena no encuentro la page"
      }else{
        title = status+" algo esta mal",
        content="algo esta mal"
         }
         res.status(status);
         res.render('generi-text',{
          title: title,
          content:content
         });
    };
