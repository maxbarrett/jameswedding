require.config({
	baseUrl: './js/',

	paths: {
		// jquery: default cdn with local fallback
		jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min', '../../bower_components/jquery/dist/jquery.min']
	}
});


require(['jquery', 'views/main'], function(jquery, main){
	console.log('config.js called & $.ajax = ' + typeof $.ajax);
});
