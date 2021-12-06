



var Start = function(){
    var headherEl = document.querySelector("#question");


    var introQuizEL =  document.createElement("h2");
    introQuizEL.textContent = "Coding Quiz Challenge";
    // introQuizEL;

    var introTextEl = document.createElement("p");
    introTextEl.textContent = "Try to answear the following code-related questions with the time limit. Keep in mind that incorrect answears will penalize your score/time by ten seconds!";
    // introTextEl;
    

    headherEl.appendChild(introQuizEL);
    headherEl.appendChild(introTextEl);
    
    var introButtonEl = document.querySelector("#buttons");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz";
    startButtonEl.className = "btn start-btn";
    
    introButtonEl.appendChild(startButtonEl);





};




Start();
