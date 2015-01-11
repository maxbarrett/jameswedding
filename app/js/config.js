require.config({
	// make components more sensible
	// expose jquery
	baseUrl: '/js/',

	paths: {
		"jquery": ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "libs/jquery/dist/jquery"]
	}
});


require(['views/main', 'jquery'], function(main, jquery){
	console.log('I am config.js');
	console.log(jquery);
});
