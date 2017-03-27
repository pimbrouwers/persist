/*
	Persist JS 0.0.4
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
    function Persist() {
        var self = this;

        self.Local = {
            Clear: self.clearLocal,
            Push: self.pushLocal,
            Set: self.setLocal,
            Read: self.readLocal,
            ReadJSON: self.readJSONLocal,
            Remove: self.removeLocal
        };

        self.Session = {
            Clear: self.clearSession,
            Push: self.pushSession,
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
        if (typeof key !== 'undefined' &&
            key !== null && 
            typeof data !== 'undefined' &&
            data !== null) 
        {
            var data = JSON.stringify(data);

            if (typeof (Storage) !== "undefined") {
                window.localStorage.setItem(key, data);
            }
        }
    };

    Persist.prototype.readLocal = function (key) {
        if (window.localStorage[key]) {
            return JSON.parse(window.localStorage[key]);
        }
    };

    Persist.prototype.readJSONLocal = function (key) {
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

    Persist.prototype.clearLocal = function(){
        if(window.localStorage) {
            window.localStorage.clear();
        }
    };

    Persist.prototype.pushLocal = function (key, data){
        var self = this;

        (typeof key !== 'undefined' &&
            key !== null && 
            typeof data !== 'undefined' &&
            data !== null) 
        {
            var ary = [];
            ary = self.Read(key);

            if(ary && ary.constructor === Array){
                ary.push(data);                
            }
            else if (typeof ary === 'undefined' || ary === null){
                ary = [data];
            }

            self.Set(key, ary);
        }
    };

    /**
    * Session Storage Hooks
    */
    Persist.prototype.setSession = function (key, data) {
        (typeof key !== 'undefined' &&
            key !== null && 
            typeof data !== 'undefined' &&
            data !== null) 
        {
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

    Persist.prototype.readJSONSession = function (key) {
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

    Persist.prototype.clearSession = function(){
        if(window.sessionStorage) {
            window.sessionStorage.clear();
        }
    };

    Persist.prototype.pushSession = function (key, data){
        var self = this;

        (typeof key !== 'undefined' &&
            key !== null && 
            typeof data !== 'undefined' &&
            data !== null) 
        {
            var ary = [];
            ary = self.Read(key);

            if(ary && ary.constructor === Array){
                ary.push(data);                
            }
            else if (typeof ary === 'undefined' || ary === null){
                ary = [data];
            }

            self.Set(key, ary);
        }
    };

    return new Persist();
}));

