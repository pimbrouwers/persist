# PersistJS
JavaScript Library to facilitate client-side persistence. Includes helpers for: local and session storage.

## Getting Started

### Install
`npm i --save persistjs`

### AMD Usage
```javascript
define(['../path/to/persist'], function(Persist){
    //Local Storage    
    Persist.Local.Set('someKey', { someValue: 1 });
    Persist.Local.Read('someKey');
    Persist.Local.ReadJSON('someKey');
    Persist.Local.Remove('someKey');
    Persist.Local.Push('someKey', { someValue: 1 });
    
    //Session Storage
    Persist.Session.Set('someKey', { someValue: 1 });
    Persist.Session.Read('someKey');
    Persist.Session.ReadJSON('someKey');
    Persist.Session.Remove('someKey');
    Persist.Session.Push('someKey', { someValue: 1 });
}); 
```

### Non-AMD Usage (bound to root)
```javascript
//Local Storage
PersistJS.Local.Set('someKey', { someValue: 1 });
PersistJS.Local.Read('someKey');
PersistJS.Local.ReadJSON('someKey');
PersistJS.Local.Remove('someKey');
PersistJS.Local.Push('someKey', { someValue: 1 });

//Session Storage
PersistJS.Session.Set('someKey', { someValue: 1 });
PersistJS.Session.Read('someKey');
PersistJS.Session.ReadJSON('someKey');
PersistJS.Session.Remove('someKey');
PersistJS.Session.Push('someKey', { someValue: 1 });
```
