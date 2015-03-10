require.config({
	// make components more sensible
	// expose jquery
	baseUrl: './js/',

	paths: {
		"jquery": ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "libs/jquery/dist/jquery"]
	}
});


require(['views/main', '../../bower_components/jquery/dist/jquery.min'], function(main, jquery){
	console.log('I am config.js');
});
