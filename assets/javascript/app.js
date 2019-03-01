


$(document).ready (function  (){



    var number = 905;
    var intervalId ;
    var answers = ["q1-1", "q2-2", "q3-3", "q4-2","q5-3" ];
    var userSelection = [0,0,0,0,0];
    
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

//---------------------MCQZ -------------------------------------------------
        

        $(document).on("click", ".qOptions", function(){

          var id = $(this).attr('id')
          
            if(id === "q1-1" || id==="q1-2" ||  id==="q1-3") {

                userSelection[0]= id;
            }


            if(id === "q2-1" || id==="q2-2" ||  id==="q2-3") {

                userSelection[1]= id;
            }

            if(id === "q3-1" || id==="q3-2" ||  id==="q3-3") {

                userSelection[2]= id;
            }

            if(id === "q4-1" || id==="q4-2" ||  id==="q4-3") {

                userSelection[3]= id;
            }

            if(id === "q5-1" || id==="q5-2" ||  id==="q5-3") {

                userSelection[4]= id;
            }





            


            console.log(userSelection);

        })

        function compare(){





        }



//------------------Quiz Done Section------------------------------------
        $(document).on("click", ".finishQuiz", function(){

            window.location.href = "./result.html";
            
            stop()

        })



});