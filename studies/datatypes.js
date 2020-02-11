/*
*
* 0 Datatypes
*
* Data types is pretty the type of data that can be stored and change within the 
* code. It is the value in every code They fall into 3 categories: simple, complex, 
* and special. 
*/

/* 1. Strings
*
* a simple data type
*
* It is use to represent a value of a bunch of characters together but it has to be in "" or
* '' quotes (one of the other).
*
*/

  var edEddEddy = "TV show";
  console.log(edEddEddy);
  
  var userName = 'igitstjlmc';
  console.log(userName);
  
  var tvShowIAmWatchig = "Gintama";
  console.log(tvShowIAmWatchig);
  
/* 2 Numbers
* 
* a simple data type
* 
* It is use to represent a value in numbers
*
*/  

   var age = 27;
   console.log(age);
   
   var testScore = 100;
   console.log(testScore);
   
   var firstGenPokemon = 151;
   console.log(firstGenPokemon);
   
/* 3 Boolean
*
* a simple data type
*
* It is use to represent a value using true or false
*
*/

  var wantToPassOperationSpark = true;
  console.log(wantToPassOperationSpark);
  
  var likeParade = false;
  console.log(likeParade);
  
  var wantToGetPay = true;
  console.log(wantToGetPay);
 
/* 4 Array
*
* a complex data type
*
* It is use to represent a multiple values in single variable. Each value 
* (also called an element) in an array has a number position, known as its index,
* and it may contain data of any data type-numbers, strings, booleans, functions, 
* objects, and even other arrays. The array index starts from 0.
*
* It is always in [] and each values is seperateded with a common.
*
*/

   var names = ["Michael", 'Gon', "Zero", 'igitstjlmc'];
   
   var numbers = [4, 26, 1992];
   console.log(numbers);
   
   var arrayExample = [" Destory", 100, false, names];
   console.log(arrayExample);
   
/* 5 Object
* 
* complex data type
* 
* It is use to represent a store collection of data. It contains properties, 
* defined as a key-value pair. A property key is always a string, but the
* value can be any data type, like strings, numbers, booleans, arrays, function 
* and other objects. Object do do not have index.
*
* It in always in {}.
*
*/

    var aboutMe ={
        // Everything in black that is below this a key //
        name: "Lawrence",
        age: "27",
        hometown: "New Orleans",
        school: true
        
    };
    
    console.log(aboutMe);

    var codeGeass ={
        episodes: 50,
        languages: "Japanese",
        show: true
        
        
    };
    
    console.log(codeGeass);

/* 6 function 
*
* a complex data type
*
* It is use like in math it a code can be reuse that take an input and return an 
* new data value output. A function need to have 4 parts: name, parameter(s), 
* the function body (which is the code) and the returning statement. It can be 
* stored in variables, objects, and arrays.
*
*/

 function add(num1, num2){
     return num1 + num2;
 } 
 
 function times(num1){
     return num1 * 5;
     
 }
 
/* Right now we are defining the function but, to get a value you have to call
* it. To call it use the function and put the value in the () parentheses.
*
*/

  add(5, 5);
  
  times(5);

/* 7 Undefined
*
* a special data type
*
* It a data type that give you undefined. If a variable has been declared but,
* has not been assigned a value the value is undefined.
*
*/ 

   var a;
   console.log(a);
   
   var b;
   console.log(b);
   
   var undefind;
   console.log(undefind);
   
/* 8 Null
*
* a special data type
*
* It a data type that give one value and it is null. Null has no value. It is 
* not 0 or something empty it just nothing.
*
*/

 var willBeNull = null;
 console.log(willBeNull);
 
 var nothing = null;
 console.log(nothing);
 
 var z = null;
 console.log(z);
 
/* 9 NaN
*
* a special data type 
*
* It a data type that give a value that is not a number. It the value when you 
* use two different data in a mathematical operation. 
*
*/

  isNaN('jamming'/5);
  
  isNaN('zero');

/* 10 Infinity and -Infinity
*
* a special data type
*
* Just a value of Infinity
*
*/

 
 var alert=(27 / 0);
 console.log(alert);
   
  var alerts=(-27 / 0);
  console.log(alerts);
   
/* There main different between simple and complex data types is that simple
* data type that has 1 value while complex data have more then one value. The
* special are also simple data type. The simple type are by value while the 
* complex are  by reference.1
*
*/
