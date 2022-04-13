 var topPosition = 200;

 var leftPosition = -200;

 var dest_x = screen.width;
 var x = 0;
 var interval = 5;

 function runPuppy() {


     var puppy = document.getElementById("puppy");

     if (x < dest_x) {
         puppy.style.left = x + "px";
         x = x + interval;

     }



     // add
     // if it reaches the screen end(you can check with screen.availwidth)
 }