var express = require('express'),
	port = process.env.PORT || 8080,
	app = express(),
	router = express.Router();

router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});

router.route('/text/:gruffness')
	.get(function(req, res) {
		var gruff = Math.abs(parseInt(req.params.gruffness)) || 10;
		if(gruff >= 0) {
			res.send("Hello br"+ Array(gruff + 1).join("o") + "ther!");
		}/* else if (){

		}*/
	});

router.route('/text')
	.get(function(req, res) {
		var sayings = [
			'I fear no man, no beast or evil, brother.',
			'What you gonna do, brother?!',
			'Hulkamania is running wild, Brother',
			'God created the Heavens, he created the earth! He created all the Hulkamaniacs! Then, he created a set of 24-inch pythons, brother!',
			'Well let me tell you something, brother!',
			'Hell yeah, brother!',
			'Amen, brother'
		];
		res.send(sayings[Math.floor(Math.random()*sayings.length)]);
	});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);