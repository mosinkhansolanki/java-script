        // Question 1
        // Print 1 to 10 using ++ operator

        let i = 0;
        i++;
        ++i;
        i++;
        ++i;
        i++;
        ++i;
        i++;
        ++i;
        i++;
        ++i;
        console.log(i);

        //   Question 2
        // Print 10 to 1 using -- operator

        let x = 10;
        x--;
        --x;
        x--;
        --x;
        x--;
        --x;
        x--;
        --x;
        x--;
        --x;
        console.log(x);


        //  Question 3
        //  Check output of following in console
        // 
        // 1+1
        // 1+200
        // 200+"300"
        // "learnjavascript" + 400

        console.log(1 + 1);
        console.log(1 + 200);
        console.log(200 + "300");
        console.log("learnjavascript" + 400);


        // 
        //    Question 4
        // Check result of following
        // 
        // 2 === 2
        // 2 == "2"
        // 2 === +"2"
        // "learnjavascript" == "learnjavascript"
        // "LearnJavascript" == "learnjavascript"
        // 0.3 == 0.30
        // 1.0 == 1
        // 1.0 === 1  

        console.log(2 === 2);
        console.log(2 == "2");
        console.log("learnjavascript" == "learnjavascript");
        console.log(0.3 == 0.30);
        console.log(1.0 == 1);
        console.log(1.0 === 1);



        //   Question 5
        // Create 5 variables for your bank account details. It would be better if you use let, const and var all 3

        let accountnumber = "01260100013502";
        let accountholdername = "mohaseen mohammad";
        const ifsecode = "BARB0ROPARX";
        const accountname = "bank of baroda";
        const accountopnedate = "2-2-2017";

        console.log(accountnumber,);
        console.log(accountholdername);
        console.log(ifsecode);
        console.log(accountname);
        console.log(accountopnedate);

        // Question 6
        // Write any code and explain that code using multi line comment

        /* mosin khan solanki
          ajmer subject java script class timing 8 pm  */

        //   Question 7
        // Write difference between Process and Thread

        // Question 8
        // Create a variable marks and assign any number. If marks are greater than 60 then print Pass else print Fail

        let marks = 50;

        if (marks >= 60) {
            console.log("pass");
        } else {
            console.log("fail");
        }

        // Question 2
        // Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even

        let num = 31;
        let num1 = 32;

        if (num % 2 == 1 && num1 % 2 == 1) {
            console.log("odd");
        } else {
            console.log("even");
        }



        // Question 3
        //   Take 4 variables a, b, c, d and assign their values in the way mentioned below and check output: a = b b = c c = d d = a
        // 

        let a = 10;
        let b = 20;
        let c = 30;
        let d = 40;

        a = b;
        b = c;
        c = d;
        d = a;
        console.log(a, b, c, d);


        //Question 4
        //   Print 2's table using ** operator. Use any logic but it should print 2's table.


        console.log(2 ** 2);//4
        console.log(2 ** 3);//8
        console.log(2 ** 4 + 4);//20
        console.log(2 ** 5 - 5);//28
        console.log(2 ** 6 + 20); //84 


        // Question 5
        // Check output of following and validate your answers
        // 
        // 2+5*10-20**2
        // 20/5*10+10    

        console.log(2 + 5 * 10 - 20 ** 2);
        console.log(20 / 5 * 10 + 10);

        // Question 6
        // Take a number and check if number is odd or not. If number is Odd then print Yes else print No

        let number = 35;

        if (number % 2 == 0) {
            console.log('even');
        } else {
            console.log('odd');
        }


        // Question 7
        // Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print no

        let nam = 60;

        if (nam % 10 == 0 && nam % 5 == 0) {
            console.log("yes");
        } else {
            console.log("no");
        }


        //   Question 8
        // Take a number and check if number * 20 makes it 100 or not. If yes the print Yes else print No

        let nume = 5;

        if (nume* 20 === 100) {
            console.log("yes");
        } else {
            console.log("no");
        }

         
        // Question 9
// Calculate your 10th percentage and print Pass or Fail if marks are more than 70 then print Pass else print Fail

    let makes=90;
      
    if(makes>=70){
        console.log("pass");
    } else{
         console.log("fail");
    }  

    // Question 10
// Take your age and check if your age is greater than 21 then print Adult else print Minor
   
   let year=2000;
   let today=2023;
   let age=today-year;

   console.log(age);

//    Question 1
// Take two numbers and take a value which should be the sum of the two numbers plus some other number. Now findout the 3rd number.

  let k=20;
  let j=40;
   let sum=100;
    console.log(sum-(k+j));

//    
    // Question 2
// Ask the below questions:
// 
// What is your English marks in 10th?
// What is your Science marks in 10th?
// What is your Math marks in 10th?
// What is your Hindi marks in 10th?
// What is your SST marks in 10th? Now calculate percentage by taking all the 5 subjects numbers
  

// let English= Number(prompt("What is your English marks in 10th?"))
// let Science=Number(prompt("What is your Science marks in 10th?"))
// let Math=Number(prompt("What is your Math marks in 10th?"))
// let Hindi=Number(prompt("What is your Hindi marks in 10th?"))
// let sst=Number(prompt("What is your SST marks in 10th? "))
// 
// let total=English+Science+Math+Hindi+sst;
// 
//  let percentage= ( total/500)*100;
//   console.log(percentage);

  
//   Question 3
// In which century were your born? find out by asking birth year. Use Math.floor function to remove decimal portion of the century.
      
    let years=2002;
    let countery= Math.floor( years/100)+1

     console.log(countery);
     


    //  Question 4. Add 20 in your name and check value in console.
// Add true to your name and check output Add 30+"learnjavascript" and check type of the final value.

     console.log(30+"learnjavascript");
      console.log(true+" "+"learnjavascript");
        console.log("learnjavascript"+50); 

        // Create Reverse Game. Ask any question with 2 possible answers. If user selects first option then show second option in alert and vice versa.
// 
// For example: Do you drink coffee or tea? and If user says coffee then show Tea in alert and if user says tea then show coffee.
     
        // let ans=prompt("Do you drink coffee or tea")
// 
        // if(ans==="tea"){
            // console.log("coffe");
        //  } else if (ans==="cofee"){
            //  console.log("tea");
        // } else{
            // console.log("your choice");
        // }
     
     
//  Question 7
// Take city temprature. If temp is less than 10 degree then print very cold. If city temp is less than 30 and greater than equal to 10 then print cold. If temp is between 30 to 40 then print Hot. Else print Very hot
        
    // let temprature=prompt("check temprature ")
  
    //   if(temprature<10){
        // console.log("very cold");
    //   } else if(temprature<=30 && temprature>=10){
        //   console.log("cold");
    //   } else if(temprature<=40 && temprature>=30){
        // console.log("hot");
    //   } else{
        //   console.log("veryhot");
    //   } 


// Question 8.
//  Using prompt ask user about his/her age. If user is greater than 18 then show user message "Do you want to open account?" If yes click on Okay button then ask your 4 below questions
// What is your name ?
// What is your aaadhar number ?
// What is your address?
// What is your mobile number?
  
    // let ages =Number(prompt("What is your age?"))
    //   if(ages>18){
        //  let choice=("do you your account opne");
        //  if(choice){
        //    let name= prompt("What is your name ?")
            //  let aaadhar=prompt("What is your aaadhar number ?")
            //  let address=prompt("What is your address?")
            //  let mobile=prompt("What is your mobile number?")
            //   
            // console.log(name,aaadhar,address,mobile);
        // }
    //   }  

    //   Question 10. Who is most intelligent in your family? Ask 10th percentage of each family member and check who got the highest marks. If total family members are more than 4 then you can use Math.max() function
       let p=Number(prompt("What is your percentage?"));
       let p1=Number(prompt("What is your percentage?"))
       let p2=Numlet=Number(prompt("What is your percentage?"))
       let p3=Number(prompt("What is your percentage?"))
       let p4=Number(prompt("What is your percentage?"))

       let ans = Math.max(p1, p2, p3, p4);
       console.log(ans);

     