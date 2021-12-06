var counter = 75;

var initCountdown = function(){
    
      
        
        var countdown = function(){
            
            
            counter--;
            console.log(counter);
            if(counter === 0){
                clearInterval(startCountdown);

            };
        };
    

    var startCountdown = setInterval(countdown, 1000);
};


var question1 = function(){
    var counterEl = document.querySelector("#timer");

    var timerEl = document.createElement("p");
    timerEl.textContent = "Timer:" + counter;
    timerEl.setAttribute("id" ,"data-timer1");
    counterEl.appendChild(timerEl);

    var headherEl = document.querySelector("#question");
    var introQuizEL =  document.createElement("h2");
    introQuizEL.textContent = "Commonly used data types DO Not Include:";
    introQuizEL.setAttribute("id","data-header1");
        

    headherEl.appendChild(introQuizEL);
    
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "1. Strings";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question1");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 1");
        counter = counter - 10;
        question2();

        var answearEl = document.querySelector("#answear");

        var responseEl = document.createElement("p");
        responseEl.textContent = "Incorrect!";
        responseEl.setAttribute("id" ,"data-answear");
        answearEl.appendChild(responseEl);
    });
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "2. booleans";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question2");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 2");
        question2();
        var answearEl = document.querySelector("#answear");

        var responseEl = document.createElement("p");
        responseEl.textContent = "Correct!";
        responseEl.setAttribute("id" ,"data-answear");
        answearEl.appendChild(responseEl);
    });
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "3. alerts";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question3");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 3");
        counter = counter - 10;
        question2();
        var answearEl = document.querySelector("#answear");

        var responseEl = document.createElement("p");
        responseEl.textContent = "Incorrect!";
        responseEl.setAttribute("id" ,"data-answear");
        answearEl.appendChild(responseEl);
    });

    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "4. numbers";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question4");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 4");
        counter = counter - 10;
        question2();
        var answearEl = document.querySelector("#answear");

        var responseEl = document.createElement("p");
        responseEl.textContent = "Incorrect!";
        responseEl.setAttribute("id" ,"data-answear");
        answearEl.appendChild(responseEl);
    });


;}

var question2 = function(){
    var elimHeader = document.getElementById("data-header1");
    elimHeader.remove();
    var elimP = document.getElementById("data-timer1");
    elimP.remove();
    var elimBtn = document.getElementById("btn-question1")
    elimBtn.remove();
    var elimBtn = document.getElementById("btn-question2")
    elimBtn.remove();
    var elimBtn = document.getElementById("btn-question3")
    elimBtn.remove();
    var elimBtn = document.getElementById("btn-question4")
    elimBtn.remove();
    // var elimP2 = document.getElementById("data-answear");
    // elimP2.remove();

    var counterEl = document.querySelector("#timer");

    var timerEl = document.createElement("p");
    timerEl.textContent = "Timer:" + counter;
    timerEl.setAttribute("id" ,"data-timer1");
    counterEl.appendChild(timerEl);

    var headherEl = document.querySelector("#question");
    var introQuizEL =  document.createElement("h2");
    introQuizEL.textContent = "The condition in an if/else statemen is enclosed with __________";
    introQuizEL.setAttribute("id","data-header1");
        

    headherEl.appendChild(introQuizEL);
    
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "1. quotes";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question1");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 1");
        counter = counter - 10;
        question3();
    });
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "2. curly brackets";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question2");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 2");
        counter = counter - 10;
        question3();
    });
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "3. parentesis";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question3");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 3");
        
        question3();
    });

    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "4. square brackets";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question4");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 4");
        counter = counter - 10;
        question3();
    });






};

var question3 = function(){
    var elimHeader = document.getElementById("data-header1");
    elimHeader.remove();
    var elimP = document.getElementById("data-timer1");
    elimP.remove();
    var elimBtn = document.getElementById("btn-question1")
    elimBtn.remove();
    var elimBtn = document.getElementById("btn-question2")
    elimBtn.remove();
    var elimBtn = document.getElementById("btn-question3")
    elimBtn.remove();
    var elimBtn = document.getElementById("btn-question4")
    elimBtn.remove();

    var counterEl = document.querySelector("#timer");

    var timerEl = document.createElement("p");
    timerEl.textContent = "Timer:" + counter;
    timerEl.setAttribute("id" ,"data-timer1");
    counterEl.appendChild(timerEl);

    var headherEl = document.querySelector("#question");
    var introQuizEL =  document.createElement("h2");
    introQuizEL.textContent = "Arrays in Javascript can be used to store __________";
    introQuizEL.setAttribute("id","data-header1");
        

    headherEl.appendChild(introQuizEL);
    
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "1. numberts and strings";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question1");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 1");
        counter = counter - 10;
        question4();
    });
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "2. other arrays";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question2");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 2");
        counter = counter - 10;
        question4();
    });
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "3. booleans";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question3");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 3");
        counter = counter - 10;
        question4();
    });

    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "4. all of the above";
    startButtonEl.className = "btn start-btn";
    startButtonEl.setAttribute("id", "btn-question4");

    
    introButtonEl.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", function(){
        // alert("button clicked 4");

        question4();
    });



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
        question1();
      });





};



// Starting the program
Start();
