/*!
	Persist JS 0.0.1
	license: MIT	
*/
(function(window){
    'use strict';

    function init(){
        var PersistJS = {};

        /**
        * Namespace Helper
        */
        PersistJS.RegisterNamespace = function (space) {
            /// <summary>
            /// Register a javascript namespace.
            /// </summary>
            /// <param name="space" type="String">The namespace (dot-separated) to register.</param>
            /// <returns type="object">Object representing the created namespace.</returns>

            var spaces = space.split("."),
                root = window;

            for (var i = 0; i < spaces.length; i++) {
                if (typeof (root[spaces[i]]) == "undefined") {
                    root = root[spaces[i]] = {};
                } else {
                    root = root[spaces[i]];
                }
            }

            return root;
        };

        /**
        * Cookies
        */
        PersistJS.Cookies = {
            GetCookie: function (cookieName) {
                /// <summary>Gets the value of the given cookieName from the current cookies collection.</summary>
                /// <param name="cookieName" type="String">The name of the cookie to return.</param>

                // first we'll split this cookie up into name/value pairs
                // note: document.cookie only returns name=value, not the other components
                var a_all_cookies = document.cookie.split(';');
                var a_temp_cookie = '';
                var cookie_name = '';
                var cookie_value = '';
                var b_cookie_found = false; // set boolean t/f default f

                for (i = 0; i < a_all_cookies.length; i++) {
                    // now we'll split apart each name=value pair
                    a_temp_cookie = a_all_cookies[i].split('=');


                    // and trim left/right whitespace while we're at it
                    cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

                    // if the extracted name matches passed cookieName
                    if (cookie_name == cookieName) {
                        b_cookie_found = true;
                        // we need to handle case where cookie has no value but exists (no = sign, that is):
                        if (a_temp_cookie.length > 1) {
                            cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
                        }
                        // note that in cases where cookie is initialized but no value, null is returned
                        return cookie_value;
                        break;
                    }
                    a_temp_cookie = null;
                    cookie_name = '';
                }
                if (!b_cookie_found) {
                    return null;
                }
            },
            SetCookie: function(name, value, expires, path, domain, secure ) {
                /// <summary>Sets a cookie based on the name and value provided.</summary>
                /// <param name="name" type="String">The name of the cookie to set the value of.</param>
                /// <param name="value" type="String">The value of the cookie to set.</param>
                /// <param name="expires" type="Date">(Optional) The date that the cookie should expire.</param>
                /// <param name="path" type="String">(Optional) The path of the cookie.</param>
                /// <param name="domain" type="String">(Optional) The domain of the cookie.</param>
                /// <param name="secure" type="Boolean">(Optional) Whether the cookie is secure or not.</param>

                var expires_date = expires;

                document.cookie = name + "=" +escape( value ) +
                ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
                ( ( path ) ? ";path=" + path : "" ) +
                ( ( domain ) ? ";domain=" + domain : "" ) +
                ( ( secure ) ? ";secure" : "" );
            },
            DeleteCookie: function (name, path, domain, secure) {
                /// <summary>Delete a cookie based on the name provided.</summary>
                /// <param name="name" type="String">The name of the cookie to set the value of.</param>
                /// <param name="path" type="String">(Optional) The path of the cookie.</param>
                /// <param name="domain" type="String">(Optional) The domain of the cookie.</param>
                /// <param name="secure" type="Boolean">(Optional) Whether the cookie is secure or not.</param>

                if (Inkwell.GetCookie(name)) {
                    document.cookie = name + "=" + (path ? ";path=" + path : "") +
                        (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "") +
                        ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
                }
            }
        };
        
        /**
        * Local Storage Hooks
        */
        PersistJS.Local = {
        	Save: function (key, data) {
		        if (key && data) {
		            var data = JSON.stringify(data);

		            if (typeof (Storage) !== "undefined") {
		                window.localStorage.setItem(key, data);
		            }
		        }
		    },
		    Read: function (key) {
		        if (window.localStorage[key]) {
		            return JSON.parse(window.localStorage[key]);
		        }		        
		    },
		    Delete: function (key, callback) {
		        if (window.localStorage[key]) {
		            window.localStorage.removeItem(key);
		            if (callback) callback();
		        }
		        else
		            if (callback) callback();

		    }
        };

        /**
        * Session Storage Hooks
        */
        PersistJS.Session = {
        	Save: function (key, data) {
		        if (key && data) {
		            var data = JSON.stringify(data);

		            if (typeof (Storage) !== "undefined") {
		                window.sessionStorage.setItem(key, data);
		            }
		        }
		    },
		    Read: function (key) {
		        if (window.sessionStorage[key]) {
		            return JSON.parse(window.sessionStorage[key]);
		        }		        
		    },
		    Delete: function (key, callback) {
		        if (window.sessionStorage[key]) {
		            window.sessionStorage.removeItem(key);
		            if (callback) callback();
		        }
		        else
		            if (callback) callback();

		    }
        };



        return PersistJS;
    }
    //define globally if it doesn't already exist
    if(typeof(PersistJS) === 'undefined'){
        window.PersistJS = init();
    }
    else{
    	if(console && console.warn)
        	console.warn("PersistJS already defined.");
    }
})(window);
