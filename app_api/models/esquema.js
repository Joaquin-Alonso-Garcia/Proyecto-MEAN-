var mongoose = require('mongoose');


var esquemaAgujeroNegro = new mongoose.Schema({
	nombre:{type:String, required:true},
	distancia:{type:String, required:true},
	constelacion:{type:String, required:true},
	info1:{type:String, required:true},
	info2:{type:String, required:true},
	imagePath:{type:String, required:true}
});

var esquemaExoplaneta = new mongoose.Schema({
	nombre:{type:String, required:true},
	descubrimiento:{type:String, required:true},
	distancia:{type:String, required:true},
	constelacion:{type:String, required:true},
	info1:{type:String, required:true},
	info2:{type:String, required:true},
	imagepath:{type:String, required:true}
});



var esquemaQuasar = new mongoose.Schema({
	nombre:{type:String, required:true},
	distancia:{type:String, required:true},
	año:{type:String, required:true},
	constelacion:{type:String, required:true},
	declinacion:{type:String, required:true},
	info1:{type:String, required:true},
	info2:{type:String, required:true},
	imagePath:{type:String, required:true}
});


mongoose.model('Agujeros', esquemaAgujeroNegro,'CollectionAgujerosNegros');
mongoose.model('Exoplanetas', esquemaExoplaneta,'CollectionExoplanetas');
mongoose.model('Quasars', esquemaQuasar,'CollectionQuasars');