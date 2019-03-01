




//$(document).ready(function() {

    var number = 15;
    var intervalId ;
    

        function timerRun() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        }
        timerRun();
  
        function decrement() {

        number --;
    
        $("#remainingTime").html(number);
        
        if(number === 0){
            stop();   
         }

   
    } 
         timerRun();

         function stop() {

            clearInterval(intervalId);
          }

//});