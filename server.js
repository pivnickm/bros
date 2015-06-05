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

router.route('/images')
	.get(function(req, res) {
		var images = [
			'https://aspoonfulofsuga.files.wordpress.com/2014/03/4b59915ecce0dee4bfa3f60680308695e4491ea42d23781bb3f10bd043621643.jpg?w=634',
			'http://i.imgur.com/ewvJjBR.jpg',
			'http://s2.quickmeme.com/img/e5/e59d1b66c3aa6c9bc9e4613b3fde1414d00e6da18c099b3bf5d3d9f8eaa4d26d.jpg',
			'http://s2.quickmeme.com/img/85/85b30061ca28fd8f94ffac7aa195f661d354e7bf77c6985140413b068d72eb55.jpg',
			'http://s2.quickmeme.com/img/b7/b71b8bb6a6d39a32854bcbe3dcdfd418994ab2a14ee6caa57cdb47732410a08c.jpg',
			'https://s-media-cache-ak0.pinimg.com/736x/c2/57/a7/c257a74eeb191a75082b9671dc696093.jpg',
			'http://img1.wikia.nocookie.net/__cb20140823230044/random-ness/images/6/6d/Hulk-hogan-pastamania.jpg'
		]
		res.send(images[Math.floor(Math.random()*images.length)]);
	});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);