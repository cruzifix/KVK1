function LoginHandler(){
    var settings = {
		loginServiceUrl: '/tst-bin/fp/fplogin@',
		logoutServiceUrl: '/WWWSRVU/html/logout/index.html',
		logoutUser: {
			username: 'uitloggen',
			password: 'tjwmduvdk'
		}
	}
    var parentUrl = getUrlParameter('parentUrl');
    var self = this;
	
	function executeLoginRequest(url, username, password, callback){
		$.ajax(url, {
            username: username,
            password: password,
            dataType: "json",
            success: function(data){
                postMessage({
                    action: callback,
                    username: data.username,
                    success: true
                });  
            },
            error: function(jqXHR){
                postMessage({
                    action: callback,
                    response: jqXHR.responseText,
                    success: false
                });
            }
        });
	}
    
    function login(username, password, callback){
        executeLoginRequest(settings.loginServiceUrl, username, password, callback);
    }

    function logout(callback){
        if(!$.browser.msie){
            executeLoginRequest(settings.logoutServiceUrl, settings.logoutUser.username, settings.logoutUser.password, callback);
        }
        else{
            postMessage({
                action: callback,
                username: null,
                response: null,
                success: document.execCommand("ClearAuthenticationCache")
            });
        }
    }

    function getUrlParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
    }
    
    function initReceiveMessage(){
        $.receiveMessage(function(event){
            var message = JSON.parse(event.data);
            
            switch(message.action){
                case "login":
                    login(message.username, message.password, message.callback);
                    break;
                
                case "logout":
                    logout(message.callback);
                    break;
            }
        });
    }

    function postMessage(message){
        if(window.top != window){
            $.postMessage(JSON.stringify(message), parentUrl, window.parent );
        }  
    }
    
    function init(){
        if(window.top != window){
            initReceiveMessage();
        }
    }
    
    init();
}

this.loginHandler = new LoginHandler();
