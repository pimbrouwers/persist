/*
	Persist JS 0.0.3
    Author: Pim Brouwers
	License: MIT	
*/
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = (root.PersistJS = factory());
    } else {
        root.PersistJS = factory();
    }
}(this, function () {
    function Persist(){
        var self = this;
        
        self.Local = {
            Set: self.setLocal,
            Read: self.readLocal,
            ReadJSON: self.readJSONLocal,
            Remove: self.removeLocal
        };

        self.Session = {
            Set: self.setSession,
            Read: self.readSession,
            ReadJSON: self.readJSONSession,
            Remove: self.removeSession
        };
    };

    /**
    * Local Storage Hooks
    */
    Persist.prototype.setLocal = function (key, data) {
        if (key && data) {
            var data = JSON.stringify(data);

            if (typeof (Storage) !== "undefined") {
                window.localStorage.setItem(key, data);
            }
        }
    };

    Persist.prototype.readLocal =  function (key) {
        if (window.localStorage[key]) {
            return JSON.parse(window.localStorage[key]);
        }
    };

    Persist.prototype.readJSONLocal =  function(key) {
        if (window.localStorage[key]) {
            return window.localStorage[key];
        }
    };

    Persist.prototype.removeLocal = function (key, callback) {
        if (window.localStorage[key]) {
            window.localStorage.removeItem(key);
            if (callback) callback();
        }
        else
            if (callback) callback();
    };


    /**
    * Session Storage Hooks
    */
    Persist.prototype.setSession = function (key, data) {
            if (key && data) {
                var data = JSON.stringify(data);

                if (typeof (Storage) !== "undefined") {
                    window.sessionStorage.setItem(key, data);
                }
            }
        };

    Persist.prototype.readSession = function (key) {
        if (window.sessionStorage[key]) {
            return JSON.parse(window.sessionStorage[key]);
        }
    };

    Persist.prototype.readJSONSession =  function(key) {
        if (window.sessionStorage[key]) {
            return window.sessionStorage[key];
        }
    };

    Persist.prototype.removeSession = function (key, callback) {
        if (window.sessionStorage[key]) {
            window.sessionStorage.removeItem(key);
            if (callback) callback();
        }
        else
            if (callback) callback();

    };

    return new Persist();
}));

