
const array = [
    {
        question:"1. Who is the inventor of AI?",
        a:"Geoffrey Hinton",
        b:"Andrew Ng",
        c:"John McCarthy",
        d:"Jürgen Schmidhuber",
        result:"c"
    },{
        question:"2. Which of the following is a component of AI?",
        a:"Learning",
        b:"raining",
        c:"Designing",
        d:"Puzzling",
        result:"a"
    },{
        question:"3. Which of the following can improve the performance of an AI agent?",
        a:"Perceiving",
        b:"Learning",
        c:"Observing",
        d:"All of the above",
        result:"b"
    },{
        question:"4. General games involves ____________",
        a:"Single-agent",
        b:"Multi-agent",
        c:"Neither Single-agent nor Multi-agent",
        d:"Only Single-agent and Multi-agent",
        result:"d"
    },{
        question:"5. An intelligent robot ",
        a:"Respond to changes in its environment",
        b:"Follows instruction",
        c:"Possesses no more intelligent than a dishwasher",
        d:"All of the above",
        result:"a"
    },{
        question:"6. Which search method takes less memory?",
        a:"Depth-First Search",
        b:"Breadth-First search",
        c:"Optimal search",
        d:"Linear Search",
        result:"a"
    },{
        question:"7. A* algorithm is based on",
        a:"Breadth-First-Search",
        b:"Best-First-Search",
        c:"Depth-First –Search",
        d:"Hill climbing",
        result:"b"
    },{
        question:"8. Which is not the commonly used programming language for AI?",
        a:"Java",
        b:"LISP",
        c:"Perl",
        d:"Javascript",
        result:"c"
    },{
        question:"9. What is state space?",
        a:" The whole problem",
        b:"Your Definition to a problem",
        c:"Problem you design",
        d:"Representing your problem with variable and parameter",
        result:"d"
    },{
        question:"10. One of the leading American robotics centers is the Robotics Institute located at: ",
        a:"CMU",
        b:"MIT",
        c:"RAND",
        d:"SRI",
        result:"a"
    }
    
    
    ];
    
    
                    // #initial value
     let current = 0;
     let score = 0;
    
                       // #references#
    
    const quiz = document.getElementById('quiz');
        
    const questionE = document.getElementById('question');
    
    const opt1 = document.getElementById('opt1');
    const opt2 = document.getElementById('opt2');
    const opt3 = document.getElementById('opt3');
    const opt4 = document.getElementById('opt4');
    
    const submit = document.getElementById('submit');
        
    const Answer= document.querySelectorAll('.answer');
    
    var startquiz = document.getElementById('Start');
    
    var Startbtn = document.getElementById('startbtn');
    
    
    
                           
    
    
    
    
                             // #output
    
    
    
    
    
    function counter(){
    
    
        const currentquestion = array[current];
    
    
    
     questionE.innerHTML=currentquestion.question;
     opt1.innerHTML=currentquestion.a ;
     opt2.innerHTML=currentquestion.b ;
     opt3.innerHTML=currentquestion.c ;
     opt4.innerHTML=currentquestion.d ;
    
    
     
    }
    counter();
                     // counter
    
    
    
                      //   which option you have selected 4 out of
    
    
    const submitted = () =>{
    
     let answers;
    
    Answer.forEach((answerEL)=>{
        if(answerEL.checked){
            answers = answerEL.id;
    
        }
        
    });
    return answers;
    
    }
    
    
                    // after submit other option disable or false
    
    
    
    const deselectanswer=()=> {
    
    Answer.forEach((answerEL)=>
        answerEL.checked = false);
            
    
    }
    
    
    
    
               // submit button event
    
    
    
    submit.addEventListener('click',()=>{
    
    
         // answer safe in checkanswer
    
     const checkanswer = submitted();
    
    
               // comparing options
    
     if(checkanswer ===  array[current].result){
         score++;
     }
    
    
    
    
    current++;
    
      deselectanswer();
    
    
                   // loop for quiz and score output 
    
    
     if(current < array.length){
    
         counter();
    
     }else{
    
     
    quiz.innerHTML=
    
    
    
    `<h1>you have score ${score}/${array.length} correct answer 😊</h1>  
          <button id="reload" onclick="location.reload()">play again</button>`;
    
    
     
    
     }
          
    
    });
    
    
    
    
    function startbtn(){
    
        startquiz.classList.remove('startit');
        Startbtn.classList.add('startbtn2');
    }
    