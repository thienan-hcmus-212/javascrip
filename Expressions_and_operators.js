// class A{
//     constructor(){
//         console.log(new.target.name)
//     }
//   }
//   class B extends A { constructor(){super()}}
//   let a = new A() //logs "A"
//   let b = new B() //logs "B"
  



// function Foo(){
//     if (!new.target) { throw 'Foo() must be called with new '}
//     console.log('Foo instantiated with new') 
// }
// try {
//     new Foo();
//     Foo();    
// } catch (error) {
//     console.log(error)
// }




// class Rectangle {
//     constructor(height, width) {
//       this.name = 'Rectangle';
//       this.height = height;
//       this.width = width;
//     }
//     sayName() {
//       console.log('Hi, I am a ', this.name + '.');
//     }
//     get area() {
//       return this.height * this.width;
//     }
//     set area(value) {
//       this._area = value;
//     }
//   }
  
//   class Square extends Rectangle {
//     constructor(length) {
//       //this.height; // ReferenceError, super needs to be called first!
  
//       // Here, it calls the parent class's constructor with lengths
//       // provided for the Rectangle's width and height
//       super(length, length);
  
//       // Note: In derived classes, super() must be called before you
//       // can use 'this'. Leaving this out will cause a reference error.
//       this.name = 'Square';
//     }
//   }
//   let a = new Rectangle(4,3);
//   let b = new Square(4,4);
  
//   console.log(a.area);
//   console.log(a.name);
//   console.log(b.area);
//   console.log(b.name);


// function applyAndNew(constructor, args) {
//     function partial () {
//        return constructor.apply(this, args);
//     };
//     if (typeof constructor.prototype === "object") {
//        partial.prototype = Object.create(constructor.prototype);
//     }
//     return partial;
//  }
 
//  function myConstructor () {
//     console.log("arguments.length: " + arguments.length);
//     console.log(arguments);
//     this.prop1="val1";
//     this.prop2="val2";
//  };
 
//  let myArguments = ["hi", "how", "are", "you", "mr", null];
//  let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);
 
//  console.log(myConstructorWithArguments);
//  console.log(new myConstructorWithArguments);
//  //  (internal log of myConstructor):           arguments.length: 6
//  //  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
//  //  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}




// let a=[[1,2],2,[3]];
// let b=[...a];

// b[1]=3
// console.log(a);
// console.log(b);

// console.log("----")

// b[0][0]=2;
// console.log(a);
// console.log(b);