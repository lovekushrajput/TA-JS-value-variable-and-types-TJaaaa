// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("please Enter the number"));
if(num % 2==0){
  alert(`number is even`);
} else{
  alert(`number is odd`);
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt("Enter First number"));
let num2 = Number(prompt("Enter Second number"));
if(num1 < num2) {
  alert(`${num2} is greater`);
} else{
  alert(`${num1} is greater`);
}

// 3. Convert the above code using`?` terniary operator

let num1 = Number(prompt("Enter First number"));
let num2 = Number(prompt("Enter Second number"));
num1 < num2 ?
alert(`${num2} is greater`)
:
alert(`${num1} is greater`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let num = (prompt("please enter your house name"))
if(num === "Stark"){
  alert("Winter is coming")
} else if(num === "lannister"){
  alert("A lannister always pays his debt")
} else{
  alert("All men must die")
}

// 5. Convert the above code using`?` terniary operator

let num = (prompt("please enter your house name"))
  num === "Stark" ?
  alert("Winter is coming")
:
  num === "lannister" ?
  alert("A lannister always pays his debt")
:
  alert("All men must die")


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

   let num = Number(prompt("Enter month number"))
   switch(num){
     case 1:
     alert("31 days")
     break;
     case 2:
     alert("28 days")
     break;
     case 3:
     alert("31 days")
     break;
     case 4:
     alert("30 days")
     break;
     case 5:
     alert("31 days")
     break;
     case 6:
     alert("30 days")
     break;
     case 7:
     alert("31 days")
     break;
     case 8:
     alert("31 days")
     break;
     case 9:
     alert("30 days")
     break;
     case 10:
     alert("31 days")
     break;
     case 11:
     alert("30 days")
     break;
     case 12:
     alert("31 days")
     break;
     default:
     alert("invalid")  
   }

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let num = Number(prompt("salery"))
switch(num){
  case 10:
    alert("in-hand amount is 18000")
    break;
  case 20:
    alert("in hand amount is 32000")
    break;
  case 30:
    alert("in-hand amount is -35000")
    break;
    default:
     alert("invalid") 

}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let num = prompt("What is the weather like outsude")
if(num === "sunny"){
  alert("Wear a T-shirt")
} else if(num === "rainy"){
  alert("Don't forget to take your raincoat")
}else if(num === "hot"){
  alert("Get a hanky")
} else{
  alert("Not a valid input")
}
