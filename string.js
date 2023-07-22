   var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str1=str.length;
    
    
     console.log(str+"<br>")
      console.log(str1,); 


      var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str1=str.slice(2,);
 
 
     console.log(str+"<br>")
      console.log(str1,);
  

   var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var str1=str.substring(-15,5)
   console.log(str+"<br>")
  console.log(str1,);
   

  var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.substr(-10)
 console.log(str)
console.log(str1,);  


    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str1=str.replace('A','mosin')
    console.log(str)
    console.log(str1,);


    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str1=str.replaceAll('ABCDE','abcde')
    console.log(str)
     console.log(str1,);
    

     var str="abcdefghijklmno";
     var str1=str.toUpperCase()
     console.log(str)
     console.log(str1,);
    


     var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var str1=str.toLowerCase()
console.log(str)
 console.log(str1); 


 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.concat('mosin')
console.log(str)
 console.log(str1,);



 var str="    ABCDEFGHIJKLMNOPQRSTUVWXYZ         ";
var str1=str.trim().length
console.log(str)
 console.log(str1,); 


 var str="          ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.trimStart().length
console.log(str)
 console.log(str1,); 




 var str=" ABCDEFGHIJKLMNOPQRSTUVWXYZ            ";
var str1=str.trimEnd() .length
console.log(str)
 console.log(str1,);


 var str="0";
var str1=str.padStart(5,'x')
console.log(str)
 console.log(str1,);
  

 var str="x";
var str1=str.padEnd(5,'0')
console.log(str)
 console.log(str1,);


 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.charAt('19')
console.log(str)
 console.log(str1,);

 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.charCodeAt('')
console.log(str)
 console.log(str1,);
  

 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.split('U')
console.log(str)
 console.log(str1);

 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.indexOf('Z')
console.log(str)
 console.log(str1,);

 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.lastIndexOf('R')
console.log(str)
 console.log(str1,);


 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.search('P')
console.log(str)
 console.log(str1,);


 var str="ABCDEFGHIJKLMNOPKQRSkTUVWXYZ";
var str1=str.match('k')
console.log(str)
 console.log(str1,);

 var str="ABCDEFGHIJKLMNkOPkQRSTUVKWXkYZ";
var str1=str.matchAll(/k/gi)
console.log(str)
 console.log(Array.from(str1));


 
 
 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.includes('MOAIN')
console.log(str)
 console.log(str1,);


 
 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.startsWith('A')
console.log(str)
 console.log(str1,);


 
 var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str1=str.endsWith('Z')
console.log(str)
 console.log(str1,);
   
   
 var name="mosin ";
 var age="19";
 var sub="javascript"

   console.log(
     `welcome ${name}${age} ${sub}`);



     var str="x"; 
     var str1=str.repeat(6)
     console.log(str)
     console.log(str1,);  


     var str="mosinkhan"
    var str1=str.split('')
   console.log(str)
   console.log(str1);
     

    //  var str=prompt("what is your question plese")
      //  console.log(str);
      //  if(str.includes('academy ')){
        //  console.log("yes");
      //  }else{
          // console.log("no");
          // console.log(str.concat('academy'));
      //  } 
// 
      // 
      //  
    //  
      //  var str=prompt("what is your question plese")
      //  console.log(str);
      //  if(str.indexOf()){
        //  console.log("odd ");
      //  }else{
          // console.log("even");
          // 
      //  } 

        var number="8306587092";

        var str=number.substring(5)
         console.log(str.padEnd(10,"*"));



         var number="8306587092";
        var str=number.substring(0,3)
         var str1=number.substring(10,8)
         console.log(str,str1);
         console.log(str+str1.padStart(9,"*"));   
        
        //  var number=prompt("what is your question plese")
        var str=number.repeat(5)
        console.log(str); 

      var str="";
        for(let i=0;i<=5;i++){
           str+str.number;
        }
        console.log(str);
 

      var str="mosinmosinmoinmm";
       var str1=str.split('');
       console.log(str1);

       let count=0;
        for (let value of str1){
            if(value==="s"){
              count++;
            }
        } 
        console.log(count);



        var str="8306587092";
        var str1=str.substring(0,3)
        var str2=str.substring(10,8).padEnd(4,'*')



        console.log(str1,str2.padEnd(0,'*'));
        console.log(str1+str2.padStart(7,"*"));
         
         

      
       

