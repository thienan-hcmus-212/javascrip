# Expressions and operators
## Primary expressions

- **this**
- function : function expression
- class : class expression
- **function\* : Generator function expression**
- **yield : Pause and resume a generator function**
- **yield\* : Delegate to another generator function or iterable object**
- **async function : async function expression** 
- **await : Pause and resume an async function and wait for the promise's resolution/rejection.**
- [] : Array initializer/literal syntax
- {} : Object initializer/literal syntax
- **/ab+c/i : Regular expression literal syntax**  
  
## Left-hand-side expressions

- **Property accessors** : `object.property and object["property"]`
- **new** : creates an instance of a constructor
- **new.targer** : refers to the constructor that was invoked by new
  ```js
  function Foo(){
    if (!new.target) { throw 'Foo() must be called with new '}
    console.log('Foo instantiated with new') 
  }
  try {
    new Foo(); //Foo instantiated with new
    Foo();    //Error Foo() must be called with new
  } catch (error) {
    console.log(error)
  }
  ```
- **import.meta** : ...
- **super** :
  - calls the parent constructor
  - Super-calling static methods
- **...obj** : Spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or (for object literals) are expected
  > Spread syntax can be use for copy array but it's just **shallow copies** - it only cover the first level of array and the rest are referenced. 
  > Therefore, it may be unsuitable for copying multi-dimensional arrays. example: **line 95**
  > `let b=[...a]`
  >
  > There are two way for **Deep copies**
  >> `let copyarray=JSON.parse(JSON.stringify(array))`
  > 
  >> `let copyarray=_.cloneDeep(numbers)`
  >
  > **Two way only work with Number, String and Object without function or Symbol**
  >
  > ***Another way is simple and more performant solution***
  >> `let copyarray = (items) => item.map(item => Array.isArray(item)? copyarray(item):item )`

  ## Unary operators

  - delete : 
  - void : 
  - typeof : 
  - `+` : 
  - `-` : 
  - `~` : bitwise NOT operator
  - `!` : logical NOT operator
  
