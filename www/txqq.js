
var exec    = require('cordova/exec'),
cordova = require('cordova');

module.exports = {
	ssoLogin:function(successCallback, errorCallback,args){
		if(args == null || args == undefined){
			args = 0;
		}
		exec(successCallback, errorCallback, "TXQQ", "ssoLogin", [args]);
	},
	logout:function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "TXQQ", "logout", []);
	},
	shareToQQ:function(successCallback, errorCallback,args){
		if(args == null || args == undefined){
			args = {};
		}
		if(args.url == null || args.url == undefined){
			args.url = "";
		}
		if(args.title == null || args.title == undefined){
			args.title = "";
		}
		if(args.description == null || args.description == undefined){
			args.description = "";
		}
		if(args.imageUrl == null || args.imageUrl == undefined){
			args.imageUrl = "";
		}
		if(args.appName == null || args.appName == undefined){
			args.appName = "";
		}
		exec(successCallback, errorCallback, "TXQQ", "shareToQQ", [args]);
	},
	shareToQzone:function(successCallback, errorCallback,args){
		if(args == null || args == undefined){
			args = {};
		}
		if(args.url == null || args.url == undefined){
			args.url = "";
		}
		if(args.title == null || args.title == undefined){
			args.title = "";
		}
		if(args.description == null || args.description == undefined){
			args.description = "";
		}
		if(args.imageUrl == null || args.imageUrl == undefined){
			args.imageUrl = [];
		}
		exec(successCallback, errorCallback, "TXQQ", "shareToQzone", [args]);
	},
	addToQQFavorites:function(successCallback, errorCallback,args){
		if(args == null || args == undefined){
			args = {};
		}
		if(args.url == null || args.url == undefined){
			args.url = "";
		}
		if(args.title == null || args.title == undefined){
			args.title = "";
		}
		if(args.description == null || args.description == undefined){
			args.description = "";
		}
		if(args.imageUrl == null || args.imageUrl == undefined){
			args.imageUrl = "";
		}
		if(args.appName == null || args.appName == undefined){
			args.appName = "";
		}
		exec(successCallback, errorCallback, "TXQQ", "addToQQFavorites", [args]);
	},
	checkClientInstalled:function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "TXQQ", "checkClientInstalled", []);
	}

};

