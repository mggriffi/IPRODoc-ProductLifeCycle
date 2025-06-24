(function () {
	var regExp = new RegExp(".*(\/Content\/).*"),
		protocol = window.location.protocol,
		host = window.location.host,
		path = window.location.pathname;
	
	if (window == window.top &&
		(protocol == 'http:' || protocol == 'https:') &&
	regExp.test(path) ){
	
		var pathParts = path.split('/');
		var helpDirectory = pathParts[2];
		var newPathParts = pathParts.splice(4);
		
		var newPath = '';

		for (var i = 0; i < newPathParts.length; i++) {
			newPath += newPathParts[i];
			if (i != newPathParts.length - 1) {
				newPath += '/';
			}
		}
		
		var newUrl = protocol + '//' + host + '/help/' + helpDirectory + '#' + newPath;

		window.location.replace(newUrl);
	}
})();