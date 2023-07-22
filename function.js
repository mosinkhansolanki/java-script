


   function mosin() {
      console.log("hello world");
   }
   mosin();

   function evenodd(a) {
      if (a % 2 == 0) {
         console.log("even");
      } else {
         console.log("odd");
      }
   }
   evenodd(10);
   evenodd(11)
   evenodd(15)

   function loop(loop) {
      for (let i = 1; i <= 10; i++) {
         console.log(i);
      }
   }
   loop();


   function khan(a) {
      let name = "mosin";
      let age = "18";
      let subject = "node.js";
      let village = "jaipur";
      console.log(name, age, subject, village);
   }
   khan();

   let name = "mosin";
   let age = "18";
   let subject = "node.js";
   let village = "jaipur";
   //console.log(name,age,subject,village);

   console.log(`welcome this you /n
${name}
${age}
${subject}
${village}`
   );


   function sum(firstname, lastname) {

      console.log(firstname + lastname);

   }
   sum("wecode", "acdemy")


   function eat() {
      console.log("eating");

   }
   function run() {
      console.log("runing");
   }

   function sleep() {

      console.log("sleeping");

   }
   eat();
   run();
   sleep();

   function sum(a, b, c, d, e, f, g) {
      console.log(a + b + c + d + e + f + g);

   }

   sum(1, 2, 3, 4, 5, 6, 7)



   //  function add(num1,num2){
   //  return result
   //  } 
   //  let k=add(a,b);
   //  console.log(add(10,20));


   function khan(a) {
      for (let i = 1; i <= 10; i++) {
         let result = i * a
         console.log(result);
      }
      return mosin


   }
   khan(5)


   function sum(a, b) {
      console.log(a + b);
      return "wecode"

   }
   let a = sum(10, 20)
   console.log(a);

   function hello() {
      return 123;

   }
   console.log(hello());

   function evenodd(a) {
      if (a % 2 === 0) {
         console.log("even");
      } else {
         console.log("odd");
      }
   }

   evenodd(10);
   evenodd(11)
   evenodd(13)

   function evenoddd(a, b) {
      if (a % 2 == 0 && b % 2 == 1) {
         console.log("yes");
      } else {
         console.log("no");
      }
   }
   evenoddd(10, 11);
   evenoddd(18, 21)


   function table(a) {
      for (let i = 1; i <= 10; i++) {
         console.log(i * a);
      }
   }
   table(5)

   function tablee(a, b) {
      for (let i = 1; i <= b; i++) {
         console.log(i * a);
      }
   }

   tablee(5, 10)



   function tableee(a) {
      for (let i = 1; i <= a; i++) {
         if (i % 2 == 0) {
            console.log("hello world");
         } else {
            console.log("hello wecode");
         }
      }
   }
   tableee(10)


   function test(cb) {
      cb(12);

   }
   test(function (num1) {
      if (num1 % 2 == 0) {
         console.log("even");
      }
      else {
         console.log("odd");
      }

   })

   function mosin(num1, num2) {
      console.log(num1 + num2);
   }

   mosin(50, 69)

   const fun = function (num1, num2) {
      console.log(num1 + num2);
   }
   fun(69, 68)

   const fun1 = (num1, num2) => {
      console.log(num1 + num2);
   }
   fun1(69, 686)


   const allsum = function (fan) {
      fan(11);
   }

   allsum(function (num1, num2) {

      console.log(num1 + num2);

   })

   allsum(function (evenodd) {
      if (evenodd % 2 === 0) {
         console.log("even");
      }
      else {
         console.log("odd");
      }
   })

   allsum(function (table) {
      for (let i = 1; i <= table; i++) {
         console.log(i);
      }
   })


   function calculate(fn) {
      fn(120, 1000)
   }

   calculate(function sum(num1, num2) {
      console.log(num1 + num2);
   })


   calculate(function mul(num1, num2) {
      console.log(num1 * num2);
   })

   calculate(function divide(num1, num2) {
      console.log(num1 / num2);
   })

   calculate(function evenodd(num1, num2) {
      if (num1 > num2) {
         console.log("even");
      }
      else {
         console.log("odd");
      }
   })

   calculate(function maxmini(num1, num2) {
      if (num1 > num2) {
         console.log("max");
      } else {
         console.log("mini");
      }
   })




   function calculat(fn) {
      if (fn === "addtion") {
         return function (a, b) {
            return a + b
         }
      } else if (fn === "substar") {
         return function (a, b) {
            return a - b;
         }
      } else if (fn === "multi") {
         return function (a, b) {
            return a * b;
         }
      } else if (fn === "divide") {
         return function (a, b) {
            return a / b;
         }

      }

   }

   let addtion = calculat('addtion')
   console.log(addtion(2, 3));

   let substar = calculat('substar')
   console.log(substar(2, 3));

   let multi = calculat('multi')
   console.log(multi(2, 3));

   let divide = calculat('divide')
   console.log(divide(2, 3));



   function calculatt(fan) {
      fan(10, 20);
   }
   function sum(num1, num2) {
      console.log(num1 + num2);
   }
   calculatt(sum)

   function sub(num1, num2) {
      console.log(num1 - num2);
   }
   calculatt(sub)

   function mul(num1, num2) {
      console.log(num1 * num2);
   }
   calculatt(mul)

   function divi(num1, num2) {
      console.log(num1 / num2);
   }
   calculatt(divi)



   function calcul(fn) {
      fn(10, 10)
   }
   function evenodd(num1, num2) {
      if (num1 % 2 === 0 && num2 % 2 === 0) {
         console.log("even")
      }
      else {
         console.log("odd")
      }
   }
   calcul(evenodd)




   function oddeven(num1) {
      if (num1 % 2 === 1) {
         return function () {
            console.log("odd");
         }
      } else {
         return function () {
            console.log("even");
         }
      }
   }
   console.log(oddeven(11));




   function str() {
      if ("hello" == "hello") {
         return function () {
            console.log("hello");
         }
      } else {
         return function () {
            console.log("hello wolrd");
         }
      }
   }
   let ans = str();
   ans();


   //   function test(num1,cb){
   //  cb(num1);
   //   }
   //  
   // test(10,function(num1){
   //  for( let i=1;i<=10;i++){
   // console.log(i*num1);
   //  }
   // })  
   // let anss=test();
   //   ans(50)   



   function test1(str, cb) {
      cb(str)
   }

   test1("wecode", function (num1) {
      console.log(num1 + " wolrd");
   })
   test1("hello", function (num1) {
      console.log(num1 + " world");
   })


   // 
   //   setTimeout (function() {
   // console.log("hello");

   //   },2000)

   //   let hour=0;
   //   let minuts=0;
   //   let secound=0;
   //  let id= setInterval(function(){
   //  
   // ++secound;
   //   if(secound===5){
   // ++minuts;
   // secound=1;
   //  } 
   //   else if(minuts===5){
   //  ++hour;
   //  minuts=1;
   //   } else if(hour===0 || hour===5){
   //  document.write("am"+"<br>");
   //   } else if(hour===6 || hour===10){
   //   document.write("pm"+"<br>");
   // }
   //   console.log(`${hour}:${minuts}:${secound}`);
   //  
   // },1000)
   //  
   //   setTimeout(function() {
   // clearInterval(id)
// 
   //   },5000)
// 


//   const id1= setInterval(function (){
//   console.log("hello world");
   // },1000)
   // 
   // setTimeout(function(){
   // clearInterval(id)
   // },10000)
// 
   // const id2 = setInterval(function (num1, num2) {
      // if (num1 === num2) {
         // console.log(1);
         // console.log(2);
      // }
      // if (num1 === num2) {
         // console.log("==");
      // }
// 
      // if (num1 === num2) {
         // console.log(3);
         // console.log(4);
      // }
      // if (num1 === num2) {
         // console.log("===");
      // }
      // if (num1 === num2) {
         // console.log(5);
         // console.log(6);
      // }
      // if (num1 === num2) {
         // console.log("====");
      // }
      // if (num1 === num2) {
         // console.log(7);
         // console.log(8);
      // }
      // if (num1 === num2) {
         // console.log("=====");
      // }
// 
      // if (num1 === num2) {
         // console.log(9);
         // console.log(10);
      // }
      // if (num1 === num2) {
         // console.log("========");
      // }
// 
   // }, 10000)
// 
   // setTimeout(function () {
      // clearInterval(id2)
// 
   // }, 10000)
// 

   // function test(num,cb1,cb2){
      //   if(num%2===0){
         //  cb1()
         // } else{
            //  cb2()
                  // }       
   // }    
// 
      //  function even(){
         //   console.log("even");
      //  } 
// 
      //  function odd(){
         //  console.log("odd");
      //  }
// 
         // test(11,even,odd)
      //   test(10,even,odd) 
// 
         //  console.log(test);
         // 
   // 

       
         // function test(num1,num2,num3){
            //   if(num1||num2||num3){
                  // return function(){
                     //  console.log(num1+num2+num3);
                        // }
                     //  } else{
                        // return function(){
                           //  console.log("hello word");
                        // }
                     //  }
// id
         // } 
            // const srcc=(test());
               //  srcc() 

// 
         // let secound=0;
         // let minuts=0;
         // let hourse=0;
         //  
            // const id=setInterval( function(){
               //   ++secound;
               //   if(secound===5){
                  //  ++minuts;
                  // secound=0;
                  // } else if(minuts===5){
                     //  ++hourse;
                     //  minuts=0;
                  // } 
                  //  const src= hourse<=5 ? "am":"pm"
                  // 
               //  console.log(`${addzero (hourse)}:${ addzero(minuts)}:${addzero(secound)}:${src}`)
            //   
            // },1000) 
// 
            //   function addzero(add){
                  //  let timeunit=String(add)
                  //   if(timeunit.length==1){
                     // return "0".concat(timeunit)
                  //   } 
// 
                  //   return timeunit
                  //   
            //   }
// 
               // setTimeout(function(){
                  //  clearInterval(id) 
                  //  
           
               // },100000)  



              function calculatage(dateOfbirth){
                
               let curentage=2023;
                let age=curentage-dateOfbirth; 
                 return age;
              }  
               
               let dateOfbirth=2003;
               let agee=calculatage(dateOfbirth)
                console.log("my curent age",agee,"year");



                 function hii(sum){
                      if(sum%2===0){ 
                       return 1
                 }
                  else 
                   {
                     
                        return 2
                      
                 }

               } 
                
               const srcc=hii(11)
                    console.log(srcc); 