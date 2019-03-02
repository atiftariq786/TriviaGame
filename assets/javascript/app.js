


$(document).ready (function  (){



    var number = 60;
    var intervalId ;
    var answers = ["q1-1", "q2-2", "q3-3", "q4-2","q5-3" ];
    var userSelection = [0,0,0,0,0];
    var correctAns = 0;
    var incorrectAns = 0;
    var unAns = 0;
    
//-----------------------Hide/Show contents ---------------------------------------------------
    $(".animation-2").show();
    $(".animation-1").show(); 
    $(".animation-3").hide();
    $(".animation-4").hide();
    $(".animation-5").hide();


    $(".finalResult").hide(); 
    $(".heading-2").hide(); 
    $(".mcqz").hide(); 
    $(".timeRemaining").hide();
//---------------------Start Button click section ----------------------------------------------

        $(document).on("click", ".startQuiz", function(){
    
            timerRun();
            decrement();
             
            $(".startQuiz").hide(); 
            $(".mcqz").show(); 
            $(".timeRemaining").show();
            $(".animation-2").hide();
            $(".animation-1").hide(); 
            $(".animation-3").show();
            $(".animation-4").hide();
            $(".animation-5").show();

        })
        
//------------------------ Timer Section---------------------------------------------------------
        function timerRun() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
            
  

        function decrement() {

            number --;
    
            $("#remainingTime").html(number);
        
            if(number === 0){

              stop();  
              $(".mcqz").hide();  
              $(".timeRemaining").hide();
              resultCount();  
              $(".finalResult").show(); 
              $(".heading-2").show(); 
              $(".animation-4").show();
              $(".animation-5").hide();
            }

   
        } 
         
        function stop() {

            clearInterval(intervalId);
        }

//---------------------MCQZ Question & Answers--------------------------------------------------
        

        $(document).on("click", ".qOptions", function(){

          var id = $(this).attr('id')

            if(id === "q1-1" || id==="q1-2" ||  id==="q1-3") {

                userSelection[0]= id;
                    $("#q1-1").css("color","grey");
                    $("#q1-2").css("color","grey");
                    $("#q1-3").css("color","grey");
                    $(this).css("color", "blue");            
        
            }


            if(id === "q2-1" || id==="q2-2" ||  id==="q2-3") {

                userSelection[1]= id;
                $("#q2-1").css("color","grey");
                $("#q2-2").css("color","grey");
                $("#q2-3").css("color","grey");
                $(this).css("color", "blue");

            }

            if(id === "q3-1" || id==="q3-2" ||  id==="q3-3") {

                userSelection[2]= id;
                $("#q3-1").css("color","grey");
                $("#q3-2").css("color","grey");
                $("#q3-3").css("color","grey");
                $(this).css("color", "blue");


            }

            if(id === "q4-1" || id==="q4-2" ||  id==="q4-3") {

                userSelection[3]= id;
                $("#q4-1").css("color","grey");
                $("#q4-2").css("color","grey");
                $("#q4-3").css("color","grey");
                $(this).css("color", "blue");

            }

            if(id === "q5-1" || id==="q5-2" ||  id==="q5-3") {

                userSelection[4]= id;
                $("#q5-1").css("color","grey");
                $("#q5-2").css("color","grey");
                $("#q5-3").css("color","grey");
                $(this).css("color", "blue");
            }
    

  })
//---------------------Result Counting Section-------------------------------------------------   


            function resultCount(){

                correctAns = 0;
                    incorrectAns = 0;
                    unAns = 0; 

                for(var i=0; i<userSelection.length; i++){

                    

                    if(userSelection[i] === answers[i]){
    
                        correctAns +=1;
                    }
                    
                    else if (userSelection[i]!== answers[i]  && userSelection[i] !== 0){
                        incorrectAns+=1;
                        
                    }
    
                    else{
                        unAns++; 
                        
                    } 
        
                }
                    
                $("#countCorrect").text(correctAns);  
                $("#countWrong").text(incorrectAns);
                $("#countMissing").text(unAns);


            }      
//------------------Quiz Done Section------------------------------------
       
        $(document).on("click", ".finishQuiz", function(){
           
            $(".mcqz").hide(); 
            stop();
            $(".heading-2").show(); 
            $(".timeRemaining").hide();
            resultCount();           
            $(".finalResult").show(); 
            $(".animation-4").show();
            $(".animation-5").hide();
            
        })



});