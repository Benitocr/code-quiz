var counter = 10;

var initCountdown = function(){
    
      
        
        var countdown = function(){
            
            var headherEl = document.querySelector("#question");
            var introQuizEL =  document.createElement("h2");
            introQuizEL.textContent = "Commonly used data types DO Not Include:";
                

            headherEl.appendChild(introQuizEL);
            
            
            var introButtonEl = document.querySelector("#buttons");
            var startButtonEl = document.createElement("button");
            startButtonEl.textContent = "1. Strings";
            startButtonEl.className = "btn start-btn";
            startButtonEl.setAttribute("data-answer-id", counter);

            
            introButtonEl.appendChild(startButtonEl);
            startButtonEl.addEventListener("click", function(){
                alert("button clicked");
            });
            counter--;
            console.log(counter);
            if(counter === 0){
                clearInterval(startCountdown);

            };
        };
    

    var startCountdown = setInterval(countdown, 1000);
};

// Function to start the Quiz
var Start = function(){
    var headherEl = document.querySelector("#question");


    var introQuizEL =  document.createElement("h2");
    introQuizEL.textContent = "Coding Quiz Challenge";
    introQuizEL.setAttribute("id", "data-intro");
    // introQuizEL;

    var introTextEl = document.createElement("p");
    introTextEl.textContent = "Try to answear the following code-related questions with the time limit. Keep in mind that incorrect answears will penalize your score/time by ten seconds!";
    introTextEl.setAttribute("id" ,"data-p");
    // introTextEl;
    

    headherEl.appendChild(introQuizEL);
    headherEl.appendChild(introTextEl);
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "data-intro-btn")
    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function() {
        var elimHeader = document.getElementById("data-intro");
        elimHeader.remove();
        var elimP = document.getElementById("data-p");
        elimP.remove();
        var elimBtn = document.getElementById("data-intro-btn")
        elimBtn.remove();
        
        
        initCountdown();
      });





};



// Starting the program
Start();
