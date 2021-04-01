# Object
- ***Object.setPrototypeOf()*** : ...
  - read [how modern JavaScript engines optimize property accesses](https://mathiasbynens.be/notes/prototypes) 
- Object.defineProperty() : 
  ```js
  Object.defineProperty(this, 'prop',{
    configurable: true,
    enumerable: false,
    
    writable: true, //
    value: 1, //

    //get() {return value;},
    //set(newValue) {value=newVale;}
  });
  ```
  ```js
  // if freeze is available, prevents adding or
  // removing the object prototype properties
  // (value, get, set, enumerable, writable, configurable)
  (Object.freeze || Object)(Object.prototype);
  ```




[1] : https://mathiasbynens.be/notes/prototypes