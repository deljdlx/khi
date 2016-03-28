Khi.Router=function(application)
{
	this.application=application;
	this.routeCheckInterval=100;

	this.rules={};

	this.requestParameters={};
	this.anchorParameters={};
}



Khi.Router.prototype.run=function() {

	this.check();

	/*
	this.routeInterval=setInterval(
		this.check.bind(this),
		this.routeCheckInterval
	);
	*/
}




Khi.Router.prototype.getRequest=function() {
	this.requestParameters=this.getRequestParameters(document.location.toString())
	this.anchorParameters=this.getAnchorParameters(document.location.toString());

	return  {
		url: document.location.toString(),
		requestParameters : this.requestParameters,
		anchorParameters: this.anchorParameters
	}
}

Khi.Router.prototype.addRule=function (name, validator, callback) {

	var rule=new Khi.RouterRule(validator, callback);
	this.rules[name]=rule;
	return rule;
}






Khi.Router.prototype.check=function() {





	console.debug(this);


/*
	if(this.lastModule!=request.call.module) {
		this.lastModule=request.call.module;
		this.loadModule(request.call.module, request);
	}


	else if(this.lastController!=request.call.controller || this.lastMethod!=request.call.method) {

		this.lastController=request.call.controller;
		this.lastMethod=request.call.method;
		this.runAction(request.call.module, request);
	}


	this.lastController=request.call.controller;
	this.lastMethod=request.call.method;
	*/
}


Khi.Router.prototype.getAnchorParameters=function(buffer) {


	var customParameters={};

	if(!buffer.match(/#/)) {
		return customParameters;
	}


	var anchorString=buffer.replace(/.*?#(.*)/g, '$1');
	anchorString=anchorString.replace(/\?/g, '&');
	anchorString=anchorString.replace(/^&/, '');
	var parameterStrings=anchorString.split('&');

	if(parameterStrings.length) {
		for(var i=0; i<parameterStrings.length; i++) {
			var parametersData=parameterStrings[i].split('=');
			var parameterName=parametersData[0];
			var value=parametersData[1];
			customParameters[parameterName]=value;
		}
	}
	return customParameters;
}







Khi.Router.prototype.getRequestParameters=function(buffer) {


	var customParameters={};

	var url=buffer.replace(/(#.*)/g, '');

	if(url.match(/\?/)) {


		var queryString=url.replace(/.*?\?(.*)/, '$1');

		var parameterStrings=queryString.split('&');

		if(parameterStrings.length) {
			for(var i=0; i<parameterStrings.length; i++) {
				var parametersData=parameterStrings[i].split('=');
				var parameterName=parametersData[0];
				var value=parametersData[1];
				customParameters[parameterName]=value;
			}
		}
	}
	return  customParameters;
}

