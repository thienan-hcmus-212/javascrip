// var a = {};

// Object.defineProperty(a, 'prop',{
//     //value: 1,
//     //writable: true,
//     get() {
//         return value*2;
//     },
//     set(newValue) {value=newValue+1;},
//     configurable: false,
//     enumerable: false,
//   });

//   //a.prop=2;
//   console.log(a.prop);




// var obj = {};
// var descriptor = Object.create(null); // no inherited properties
// descriptor.value = 'static';

// // not enumerable, not configurable, not writable as defaults
// Object.defineProperty(obj, 'key', descriptor);

// // being explicit
// Object.defineProperty(obj, 'key', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 'static'
// });

// // recycling same object
// function withValue(value) {
//   var d = withValue.d || (
//     withValue.d = {
//       enumerable: false,
//       writable: false,
//       configurable: false,
//       value: value
//     }
//   );

//   // avoiding duplicate operation for assigning value
//   if (d.value !== value) d.value = value;

//   return d;
// }
// // ... and ...
// Object.defineProperty(obj, 'key', withValue('static'));

// // if freeze is available, prevents adding or
// // removing the object prototype properties
// // (value, get, set, enumerable, writable, configurable)
// (Object.freeze || Object)(Object.prototype);



// var o = {}; // Creates a new object

// Object.defineProperty(o, 'a', {
//   value: 37,
//   writable: false
// });

// console.log(o.a); // logs 37
// o.a = 25; // No error thrown
// // (it would throw in strict mode,
// // even if the value had been the same)
// console.log(o.a); // logs 37. The assignment didn't work.

// // strict mode
// (function() {
//   'use strict';
//   var o = {};
//   Object.defineProperty(o, 'b', {
//     value: 2,
//     writable: false
//   });
//   o.b = 3; // throws TypeError: "b" is read-only
//   return o.b; // returns 2 without the line above
// }());