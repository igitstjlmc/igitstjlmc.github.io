/* 
* 
* 0 Loops
*
* Loops are use to run a code more than one with different value. There is a 
* loop for eact literal that you are trying to loop. The loop are for, for in 
* and while. Each will will have 3 statment the start end and to increase or 
* decrease.
*
*/

// 1 For //

/* For Loop loops look throught a block of code a number of time. It need to 
*have 3 statments start end and what to increase and decrease by.
*
* 
*/

var index;
var myArray = ["a", "b", "c"];
for (index = 0; index < myArray.length; ++index) {
    console.log(myArray[index]);
}

// 2 For In //

// For in loop use to loop a object

var myObject ={
    stuff: "toy",
    safe: true,
    howmany: 1
};

  for(var key of myObject){
      console.log(key);
      console.log(myObject[key]);
  }
  
  // 3 While Loop
  
 // while loops through a code with a  condition is true.
 
 var steps = 0;
 
 while(steps < 200){
     console.log("you can do it");
     steps++;
 }