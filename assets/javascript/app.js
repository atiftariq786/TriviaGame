


$(document).ready (function  (){



    var number = 15;
    var intervalId ;
    
//-----------------------Button click section ---------------------------------------------------

        $(document).on("click", ".startQuiz", function(){

            window.location.href = "./quiz.html";
            
            timerRun();
            decrement();

        })
//------------------------ Timer Section------------------------------------------------------------
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
                window.location.href = "./result.html";
            }

   
        } 
         
        function stop() {

            clearInterval(intervalId);
        }

//------------------Quiz Done Section------------------------------------
        $(document).on("click", ".finishQuiz", function(){

            window.location.href = "./result.html";
            
            stop()

        })



});