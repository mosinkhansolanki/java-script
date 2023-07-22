    //   Question 1
    // let str = "My name is learn javascript";
    // Split this string using space and find length.

    var str = "My name is learn javascript"
    var str1 = str.split('')

    console.log(str1);


    //   Question 2
    //   Write a program to check if a string is palindrome or not?

    var str = "mosin khan solanki";

    console.log(typeof str);




    //   Question 5
    //   Captialize first character of the String. For example


    var str = "learnjavascrpit";
    var str1 = str.replace('l', 'L')
    console.log(str, str1);

    var str = "hello";
    var str1 = str.replace('h', 'H')
    console.log(str, str1);



    // Question 6
    // In a string convert uppercase character to lowercase and vice versa.

    var str = "HeLlo";
    var str1 = str.replace('HeLlo', 'hElLO');

    console.log(str, str1);

    var str = "leArNjavaScript ";
    var str1 = str.replace('leArNjavaScript', 'LEaRnJAVAsCRIPT');

    console.log(str, str1);


    // Question 8
    // Count number of spaces in a string

    var str = "                       ";
    var str1 = str.length;

    console.log(str1);




    // Question 9
    // Print below pattern using repeat function
    // 
    // 1111111111
    // 222222222
    // 33333333
    // 4444444
    // 555555
    // 66666
    // 7777
    // 888
    // 99
    // 0







    var str = "1";
    var str1 = str.repeat(10);
    console.log(str1)

    var str = "2";
    var str1 = str.repeat(9);
    console.log(str1)

    var str = "3";
    var str1 = str.repeat(8);
    console.log(str1)

    var str = "4";
    var str1 = str.repeat(7);
    console.log(str1)

    var str = "5";
    var str1 = str.repeat(6);
    console.log(str1)

    var str = "6";
    var str1 = str.repeat(5);
    console.log(str1)

    var str = "7";
    var str1 = str.repeat(4);
    console.log(str1)

    var str = "8";
    var str1 = str.repeat(3);
    console.log(str1)

    var str = "9";
    var str1 = str.repeat(2);
    console.log(str1)

    var str = "0";
    var str1 = str.repeat(1);
    console.log(str1)



    //    Question 4
    // Write a program to reverse a string. For example:
    // 
    // Hello -> olleH
    // Bye -> eyB 



    var str = "Bye";
    var str1 = str.replace('Bye', 'eyB');
    console.log(str, str1);
    var str = "Hello ";
    var str1 = str.replace('Hello', 'olleH');
    console.log(str, str1);




    //  Question 11
    // substring vs slice vs substr

    var str = "mosinkhansolanki";
    var str1 = str.substr(3, 8)
    console.log(str1);

    var str = "mosinkhansolanki";
    var str1 = str.substring(3, 8)
    console.log(str1);

    var str = "mosinkhansolanki";
    var str1 = str.slice(3, 8)
    console.log(str1);


    //  Question 13
    // match vs search function difference

    var str = "mosinkhansolanki";
    var str1 = str.match("k")
    console.log(str1);

    var str = "mosinmkhanMsolManki";
    var str1 = str.matchAll(/m/gi)
    console.log(Array.from(str1));



    //  Question 14
    //    Take a sentence from prompt. In next question ask for a string and check if that string is present in that sentence or not
    // var str=prompt("what is your question");
    // var str1="";
    //  if(str==str1){
    //  console.log("mosin");
    //  } else{
    //  console.log("not");
    //  }




    //  Question 15
    // Take a string and if in that string anything is there other than the characters $, _, number, a-z, A_Z then remove them from the string. Don't use regex. for example 

    //var str="We%^%$Cod!@#e" 
    // var str1=prompt("what is your name")
    //    if(str==str1){
    //       console.log("We$Code");
    //    } 



    // Question 7
    // Camelize the string. for example:
    // 
    // Hello World -> helloWorld
    // my name is Sajid -> myNameIsSajid
    // learn javascript -> learnJavascript

    // var str=prompt("enter your values")
    //  
    // var str1="Hello World";
    // var str2="my name is Sajid"
    // var str3="learn javascript"
    //  
    // if( str==str1){
    //  console.log("helloWorld");
    // } else if(str==str2){
    //  console.log("myNameIsSajid");
    // } else if(str==str3){
    // console.log("learnJavascript");
    // } else{
    //  console.log("invalid");
    // }
    // 
    // 

    // $##$##$
    // $##$##
    //  $##$
    // $##
    // $
    //  


    for (let i = 1; i < 11;i++) {
       let str="";
      for (let j = 5; j <= i; j++) {
          str=str+"&"
      }  
      console.log(str);
    }


      
    var len="mosin khan solanki".length

       for(let i=1;i<len;i++){
          if(len>10){
             console.log(i);
          } else{
             console.log("no");
          }
       }



        var str="mosinkhan,solankiy";
        var str1=str.substring(0,8);
        var str2=str.substring(8)

         console.log(str1,str2);


// 
//  1  Print below pattern
// 1
// 23
// 456
// 78910
// 1112131415 

 var n=1
   for(let i=1;i<=5;i++){
       var row="";
      for(let j=1;j<=i;j++){ 
         row=row+n+' ';
         n++; 
   } 
    console.log(row);
   } 


   var str= function(a,b,c,d){
        
       var sum=(a+b+c+d);
         if(sum>100){
             return 1;
         } 
         else{
             return 2
         }
       
         
   }  

    var result=str(10,10,20,20)
        console.log(result);  


        var str=function(length,witdh){
           
          var multi=(length*witdh)
            return multi
        } 
         var resentlenght=5;
         var resentwitdh=100;
          var result=str(resentlenght,resentwitdh)
           console.log(result);
      
       
 
// 
//  
   // 
//  var age=prompt("enter your age plese")
//   
//   if(age<=17){
   //  alert("Sorry, you must be at least 18 years old to access this website")
//   } else if(age<=30 || age<=18){
      //   alert("Are you sure you want to proceed?")
   // } else if(age==age){
      //  alert("Action canceled");
// 
   // } else{ 
      //   prompt( alert(age.replace()))
   // }  
// 
// 
   //   var number=prompt("enter your first number")
   //   var number1=prompt("enter your second number")
   //   var number2=prompt("enter your third number")     
// 
   //   var avrage=(number*number1*number2);
   //   
      // alert(avrage)
   //  
// 
// 
      // 
   // 
    
    
   
   // Question: Write a JavaScript program that prompts the user to enter a sentence. The program should perform the following operations:
// Use the toLowerCase function to convert the sentence to lowercase.
// Use the replace function to replace all spaces with dashes ("-") in the modified sentence.
// Use the slice function to extract a substring from the 2nd to the 6th character (inclusive) of the modified and replaced sentence.
// Use the startsWith function to check if the extracted substring starts with the letter "a".
// Display the result of the check using an alert box.

//   var str=prompt("Enter a sentence")
   //  var str1=str.toLowerCase();
   //  var str2=str.replace(str,'khan')
   //  var str3=str.slice(2,8)
   //  var str4=str.substring(2, 6)
   //   
   //  console.log(str,str2);
// 
    var age= prompt("enter your age")
     var country=prompt("Enter your country of residence")
     if(age<18){
        console.log("Sorry, you must be at least 18 years old.");
     } else if(age>=18 && country==="usa"){
          console.log("display Welcome! Enjoy your stay in the USA");
     } else if(age>=18 && country==="uk"){
           console.log("Welcome! Enjoy your stay in the UK.");
     } else{
      console.log("Welcome! Enjoy your stay.");
     }


  