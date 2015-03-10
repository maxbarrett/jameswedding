require(['jquery', 'plugins/mod'], function(jquery, mod){
	'use strict';

	mod.init();

	console.log('main.js called & $.ajax = ' + typeof $.ajax);

});


