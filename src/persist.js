/*
	Persist JS 0.0.2
	license: MIT	
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
    var PersistJS = {};

    /**
    * Local Storage Hooks
    */
    PersistJS.Local = {
        Set: function (key, data) {
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
        Remove: function (key, callback) {
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
        Set: function (key, data) {
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
        Remove: function (key, callback) {
            if (window.sessionStorage[key]) {
                window.sessionStorage.removeItem(key);
                if (callback) callback();
            }
            else
                if (callback) callback();

        }
    };

    return PersistJS;
}));

