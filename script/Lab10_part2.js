 var topPosition = 200;

 var leftPosition = -200;

 //var dest_x = screen.width;
 //var x = 0;
 //var interval = 5;


 function runPuppy() {


     var puppy = document.getElementById("puppy");


     puppy.style.left = leftPosition + "px";
     puppy.style.top = topPosition + "px";
     leftPosition += 50;
     topPosition += 10;

     //  x = x + interval;
     if (leftPosition >= screen.availWidth) {
         leftPosition = -200;

     }
     if (topPosition >= 600) {
         topPosition = 200;
     }
  
  
 //function runPuppy() {


 //    var puppy = document.getElementById("puppy");

 //    if (x < dest_x) {
 //        puppy.style.left = x + "px";
 //        x = x + interval;

//     }



     // add
     // if it reaches the screen end(you can check with screen.availwidth)
 //}
