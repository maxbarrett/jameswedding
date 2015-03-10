require.config({
	baseUrl: './js/',

	paths: {
		// jquery: default cdn with local fallback
		jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min', '../../bower_components/jquery/dist/jquery.min']
	}
});


require(['views/main', 'jquery'], function(main, jquery){
	console.log('I am config.js');
});
