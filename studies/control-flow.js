/* 
*
* 0 Control Flow
*
* Control Flow is how you make the flow of your code. It will look for a code
* that is a statement true. The best way for this to work is an if-else if- else
* and switch (conditional statement)
*
*/

/* 1. If 
*
* The first part the conitional statemnet is if the value of it is true it will 
* run this code. You can only have one if statement.
*
*/

 var location = "Louisiana";
 
 if(location === "Louisiana"){
     console.log("the South");
 }
 
/* 2 Else If
*
* If the first part of the of the code is false then the code will go to the 
* next code of the conditionl statement. This is the else if part. You can have 
* as many as else if statement in the code
*
*/

  var live = "Mississippi";
  
  if(live === "Louisiana"){
   console.log("I have not live there");
  
   
  } else if (live === "Texas"){
   console.log("want to go there");
  
   
  } else if (live === "Utah"){
   console.log("the mountain");
  
   
  } else if (live === "Mississippi"){
   console.log(" you got it right ");
  }
  
 /* 3 Else
 * If all of the code fail then the code will  use the last code which is the
 * Else statement. This is the backup if anything goes wrong. You can only have
 *one 
 *
 */
 
   var whereIWantToLive = "Japan";
   
   if(whereIWantToLive === "United States"){
    console.log("I already lived there");
   
    } else if (whereIWantToLive === "Peru"){
    console.log(" I would to see");
   
    } else{
     console.log( "You don't know me");
    }
    
  /* 4 Switch
  *
  * Switch case statement is also used for decision making purposes. It’s a 
  * multi-way branch statement and in some cases switch case statement is more 
  *convenient over if-else statements, like when we want to test a variable for
  * hundred different values and according to those values we want to execute 
  * some statement, for this switch-case will be more efficient and fast method 
  * then the if-else.
  *
  */
  
  var day = 4;
switch (day) {
case 1:
document.write(“Monday”);
break;
case 2:
document.write(“Tuesday”);
break;
case 3:
document.write(“Wednesday”);
break;
case 4:
document.write(“Thursday”);
break;
case 5:
document.write(“Friday”);
break;
case 6:
document.write(“Saturday”);
break;
case 7:
document.write(“Sunday”);
break;
default:
document.write(“Not a Day!”);
}