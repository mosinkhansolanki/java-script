
  
//  Q 1. Check if the array is sorted in ascending order.

  var array=["apple","orange","mango","graps","banana"]
       
      console.log(array);
      console.log(array.sort());


// Q 2. Check if the array is sorted in descending order.


// 3. Concat two Arrays but without using concat function

var array=["apple","orange","mango","graps","banana"]

var array1=[10,20,30,40,50]

 console.log(array+array1);



//  Q 4. Count the total number of odd numbers in the array

var array=[10,20,30,3,50,5,6,9,11,15,32]
  sum=array;
  for(let i=0;i<array.length;i++)
   if(array[i]%2===1){
     sum+array[i]
     console.log(array[i]);

   }

   console.log(sum);


//    Q 5. Count the total number of even numbers in the array


var array=[10,20,30,3,50,5,6,9,11,15,32]
  sum=array;
  for(let i=0;i<array.length;i++)
   if(array[i]%2===0){
     sum+array[i]
     console.log(array[i]);

   }

   console.log(sum);


//  Q 6. Create a new Array from existing Array using push function
var array1=[]
console.log(array1.push(10,20,30,40,50,60,70));
  console.log(array1);


// Q 8. Find the largest word in the Array

var array=[10,20,30,3,80,5,6,9,11,15,32]
    var miximum=array[0]
    for(let i=0;i<array.length;i++){
         if(array[i]>miximum){
            miximum=array[i]
         }
    }
     console.log(miximum);
   
//  Q 9. Create an array of names and sort it using a sort function (do it for practice then we will discuss in the class)
  
   var array=["akram","karamat","javed","mosin","hakim"]
    console.log(array);
    console.log(array.sort());


    //  Q 10. Create an empty Array

// Now perform the below actions

// Push 3 numbers
// Unshift 3 numbers
// Pop 2 numbers
// Push 1 number
// Unshift 1 number
// Shift 2 numbers
// Now check the result and match

 
  var array=[];
  
  console.log(array.push(10,20,30));
  console.log(array.unshift(1,2,4));
  console.log(array.pop());
  console.log(array.pop());
  console.log(array.unshift(70));
  console.log(array.shift());

  console.log(array);
  
