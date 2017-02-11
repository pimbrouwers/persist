# PersistJS
JavaScript Library to facilitate client-side persistence. Includes helpers for: local and session storage.

### AMD Usage
```javascript
define(['../path/to/persist'], function(Persist){
    //Local Storage
    Persist.Local.Set('someKey', { someValue: 1 });
    Persist.Local.Read('someKey');
    Persist.Local.ReadJSON('someKey');
    Persist.Local.Remove('someKey');
    
    //Session Storage
    Persist.Session.Set('someKey', { someValue: 1 });
    Persist.Session.Read('someKey');
    Persist.Session.ReadJSON('someKey');
    Persist.Session.Remove('someKey');
}); 
```

### Non-AMD Usage (bound to root)
```javascript
//Local Storage
PersistJS.Local.Set('someKey', { someValue: 1 });
PersistJS.Local.Read('someKey');
Persist.Local.ReadJSON('someKey');
PersistJS.Local.Remove('someKey');

//Session Storage
PersistJS.Session.Set('someKey', { someValue: 1 });
PersistJS.Session.Read('someKey');
Persist.Session.ReadJSON('someKey');
PersistJS.Session.Remove('someKey');
```
