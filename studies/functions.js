/* 0 function 
*
* 
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



// 1 Scope //

/* Scope refers to where a variable can be accessed in a program. While some 
* variables can be accessed from anywhere within a program, other variables may 
* only be available in a specific context. Scope depends entirely on where a 
* variable is declared. There are 3 sccope: global block and local
*/

// 2 Closure

/* Closure is a structure composed of nested functions in such a way that 
* allows us to break through the scope chain. By breaking the scope chain, 
* closures allow access to data within inner scope that would otherwise be 
* inaccessible by outer scope.
*
*/