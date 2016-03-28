Khi.Router=function(application)
{
	this.application=application;
	this.routeCheckInterval=100;
}



Khi.Router.prototype.run=function() {

	this.check(this);

	/*
	this.routeInterval=setInterval(
		this.check.bind(this),
		this.routeCheckInterval
	);
	*/
}




Khi.Router.prototype.check=function() {


	var request=this.getParameters(document.location.toString())
	console.debug(request);


	var request=this.getClientParameters(document.location.toString());
	console.debug(request);


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

Khi.Router.prototype.getClientParameters=function(buffer) {

	var parametersBuffer=buffer.replace(/.*?#(.*)/g, '$1');
	//var parametersBuffer=buffer.replace(/(.*?)#.*/g, '$1');
	//var parametersBuffer=buffer;


	parametersBuffer=parametersBuffer.replace(/^&/, '');

	var callParametersBuffer=parametersBuffer.replace(/(.*?)\?.*/, '$1');
	var userParametersBuffer=parametersBuffer.replace(/.*?\?(.*)/, '$1');


	var parametersBuffers=callParametersBuffer.split('&');
	var parameters={};

	for(var i=0; i<parametersBuffers.length; i++) {
		var userParameters=parametersBuffers[i].split('=');
		parameters[userParameters[0]]=userParameters[1];
	}

	var parametersBuffers=userParametersBuffer.split('&');
	var customParameters={};

	for(var i=0; i<parametersBuffers.length; i++) {
		var userParameters=parametersBuffers[i].split('=');
		customParameters[userParameters[0]]=userParameters[1];
	}

	return {
		parameters: customParameters
	};
}


Khi.Router.prototype.getParameters=function(buffer) {

	//var parametersBuffer=buffer.replace(/.*?#(.*)/g, '$1');


	var parametersBuffer=buffer.replace(/(.*?)#.*/g, '$1');

	//var parametersBuffer=buffer;


	parametersBuffer=parametersBuffer.replace(/^&/, '');

	var callParametersBuffer=parametersBuffer.replace(/(.*?)\?.*/, '$1');
	var userParametersBuffer=parametersBuffer.replace(/.*?\?(.*)/, '$1');


	var parametersBuffers=callParametersBuffer.split('&');
	var parameters={};

	for(var i=0; i<parametersBuffers.length; i++) {
		var userParameters=parametersBuffers[i].split('=');
		parameters[userParameters[0]]=userParameters[1];
	}

	var parametersBuffers=userParametersBuffer.split('&');
	var customParameters={};

	for(var i=0; i<parametersBuffers.length; i++) {
		var userParameters=parametersBuffers[i].split('=');
		customParameters[userParameters[0]]=userParameters[1];
	}

	return {
		parameters: customParameters
	};
}

