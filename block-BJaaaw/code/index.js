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
let houseName = (prompt("please enter your house name"))
if(houseName === "Stark"){
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

   let monthName = Number(prompt("Enter month name"))
   switch (monthName) {
     case "January":
     alert("Number of day 31")
     break;
     case "Febuary":
     alert("Number of day 28")
     break;
     case "march":
     alert("Number of day 31")
     break;
     case "April":
     alert("Number of day 30")
     break;
     case "May":
     alert("Number of day 31")
     break;
     case "June":
     alert("Number of day 30")
     break;
     case "July":
     alert("Number of day 31")
     break;
     case "August":
     alert("Number of day 31")
     break;
     case "September":
     alert("Number of day 30")
     break;
     case "October":
     alert("Number of day 31")
     break;
     case "November":
     alert("Number of day 30")
     break;
     case "December":
     alert("Number of day 31")
     break;
     default:
     alert("Not a invalid input")  
   }

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let Salery = prompt("Enter your Salery");
switch (true) {
  case Salery <= 20000: {
    let taxedAmount = (Salery * 10) / 100;
    alert(`in-hand amount is ${Salery - taxedAmount}`);
    break;
}
  case Salery <= 40000: {
    let taxedAmount = (Salery * 20) / 100;
    alert(`in-hand amount is ${Salery - taxedAmount}`);
    break;
  }
  case Salery > 50000: { 
    let taxedAmount = (Salery * 30) / 100;
    alert(`in-hand amount is ${Salery - taxedAmount}`);
    break;
  }
    default:
    alert("Not a invalid input") 
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
let marks = Number(prompt("Enter your marks"));
if("marks > 100"){
  alert("Marks can't be greater than 100")
} else if(marks > 80 && marks < 100){
  alert("Grade A")
}else if(marks > 50 && marks < 80){
  alert("Grade B")
}else if(marks > 30 && marks < 50){
  alert("Grade C")
} else{
  alert("Grade D")
}

switch (true){
  case marks > 100 :
    alert("Marks can't be greater than 100")
    break;
  case marks > 80 && marks < 100:
    alert("Grade A")
    break;
  case marks > 50 && marks < 80:
    alert("Grade B")
    break;
  case marks > 30 && marks < 50:
    alert("Grade C")
    break;
    default:
    alert("Grade D")
}


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

switch (true) {
  case num === "sunny":
    alert("Wear a T-shirt")
    break;
  case num === "rainy":
    alert("Don't forget to take your raincoat")
    break;
  case num === "hot":
    alert("Get a hanky")
    break;
    default:
      alert("Not a valid input")
}