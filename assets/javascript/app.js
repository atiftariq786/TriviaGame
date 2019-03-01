


$(document).ready (function  (){



    var number = 20;
    var intervalId ;
    var answers = ["q1-1", "q2-2", "q3-3", "q4-2","q5-3" ];
    var userSelection = [0,0,0,0,0];
    var correctAns = 0;
    var incorrectAns = 0;
    var unAns = 0;
    

    $(".finalResult").hide(); 
    $(".heading-2").hide(); 
    $(".mcqz").hide(); 
    $(".timeRemaining").hide();
//-----------------------Button click section ---------------------------------------------------

        $(document).on("click", ".startQuiz", function(){

            
            
            timerRun();
            decrement();
             
            $(".startQuiz").hide(); 
            $(".mcqz").show(); 
            $(".timeRemaining").show();
    

        })
        
//------------------------ Timer Section------------------------------------------------------------
        function timerRun() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
            
  

        function decrement() {

            number --;
    
            $("#remainingTime").html(number);
        
            if(number === 0){
                stop();  
                
              //  window.location.href = "./result.html";
              $(".mcqz").hide();  
              $(".timeRemaining").hide();
              resultCount();  
              $(".finalResult").show(); 
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
            //------------------------------------------------------------------

            
//---------------------------------------------------------------------------------
               // if (number === 0 || $(".finishQuiz")=== true){
                //resultCount();

               // }

                

            console.log("User :"+ userSelection);
           console.log("correct :"+correctAns);
           console.log("unAnswer :"+ unAns);
            console.log("wrong :"+ incorrectAns);


  })
            function resultCount(){
                for(var i=0; i<userSelection.length; i++){


                    if(userSelection[i] === answers[i]){
    
                        correctAns +=1;
                  $("#countCorrect").text(correctAns);   
    
                    }
    
                    else if (userSelection[i]!== answers[i]  && userSelection[i] !== 0){
                        incorrectAns+=1;
                        $("#countWrong").text(incorrectAns);
                    }
    
                    else{
                        unAns++; 
                        $("#countMissing").text(unAns);
                    }
    
    
    
                }



            }
        



//------------------Quiz Done Section------------------------------------
        $(document).on("click", ".finishQuiz", function(){

           // window.location.href = "./result.html";
           $(".mcqz").hide(); 
            stop();
            $(".heading-2").show(); 
            $(".timeRemaining").hide();
            resultCount();           
            $(".finalResult").show(); 
            
            
        })



});