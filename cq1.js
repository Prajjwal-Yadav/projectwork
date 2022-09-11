var currentQue=-1;
const n=10; // no of questions
const myQuestions = [
  {
    question: "1. What does CSS stand for?",
    answers: {
      a: "Cascading Style Sheets",      
      b: "Computer Style Sheets",
      c: "Creative Style Sheets",
      d: "Colorful Style Sheets",
      
     
    },
    correctAnswer: "a"
  },
  {
    question: "2.What is the correct HTML for referring to an external style sheet?  ",
    answers: {
      a: "< style src=\"mystyle.css\" >",
      b: "< stylesheet>mystyle.css</stylesheet >",
      c: "< link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\" >",  
    },
    correctAnswer: "c"
  },
  {
    question: "3.Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: {
      a: "In the < head > section ",
      b: "In the <body> section ",
      c: "At the end of the document",
      },
    correctAnswer: "a"
  },
  {
    question: "4.Which HTML tag is used to define an internal style sheet?",
    answers: {
      a: "< script >",
      b: "< css >",
      c: "< style >",
      
    },
    correctAnswer: "c"
  },
  {
    question: "5.Which is the correct CSS syntax?",
    answers: {
      a: "body {color: black;}" ,      
      b: "{body:color=black;}" ,
      c: "{body;color:black;}" ,
      d: "body:color=black;" ,
      
    },
    correctAnswer: "a"
  },
  {
    question: "6.How do you insert a comment in a CSS file?",
    answers: {
      a: "// this is a comment",
      b: " 'this is a comment",
      c: "// this is a comment //",
      d: "/* this is a comment */",
       },
    correctAnswer: "d"
  },
  {
    question: "7.Which CSS property controls the text size?",
    answers: {
      a: "font-size ",   
      b: "text-size",
      c: "text-style",
      d: "font-style",
      },
    correctAnswer: "a"
  },
  {
    question: "8.What is the correct CSS syntax for making all the <p> elements bold?",
    answers: {
      a: "< p style=\"font-size:bold;\" >",
      b: "< p style=\"text-size:bold;\" >",
      c: "p {font-weight:bold;} ",   
      d: "p {text-size:bold;}",
       
      
    },
    correctAnswer: "c"
  },
  {
    question: "9.Which property is used to change the font of an element?",
    answers: {
      a: "font-family",     
      b: "font-style",
      c: "font-weight",
       },
    correctAnswer: "a"
  },
  {
    question: "10.How do you make the text bold?",
    answers: {
     a: "font:bold;",
     b:  "font-weight:bold;",    
     c:  "style:bold;",

    },
    correctAnswer: "b"
  },
];
 
//document.getElementById("demo").innerText=myQuestions[0].answers.a;


//const id=[a, b, c, d];
 
function disp()
{
    currentQue=(currentQue+1)%n;
  document.getElementById("q").innerText=myQuestions[currentQue].question;
  const opt=[];
   document.getElementById("n").innerHTML= (currentQue+1) +" out of "+(n);
   for( j in myQuestions[currentQue].answers)
  {
opt.push(`<label>
       <input type="radio" class="optClass" name="${currentQue}" value="${j}">
        ${j}:
        ${myQuestions[currentQue].answers[j]}<br/>
     </label>`);
document.getElementById("o").innerHTML=opt.join(" ");
  }//for loop

}


(disp());

/*function dispPrev()
{
  i=(i+n-1)%n;
  i=(i+n-1)%n;
  disp();
}


const prevButton=document.getElementById("prev");
prevButton.addEventListener("click", dispPrev);

let txt="";
var k=myQuestions.length;

document.getElementById("o").innerText=k;

var txt;
for( j in myQuestions[2].answers)
txt = j ;

document.getElementById("o").innerText=txt;*/

function resultDisp()
{
   var x = document.getElementById("myRadio").value;
 
}
function displayRadioValue() {
         document.getElementById("rest").innerHTML = "in fun i=  "+ currentQue;
            var ele = document.getElementsByName(`${currentQue}`);
              var praj="";
            for(k = 0; k < ele.length; k++) {
               praj+= ele[k].value+" ";
               
               
               
               
                if(ele[k].checked)
                    {    //document.getElementById("demo").innerHTML = "submitted ans is "+ele[i].value;
                        if(ele[k].value==myQuestions[currentQue].correctAnswer)
                            document.getElementById("rests").innerHTML = "Correct Answer "+ele[k].value;
                        else document.getElementById("rests").innerHTML = "wrong answer \n correct Answer:"+myQuestions[currentQue].correctAnswer;

                    }
   // document.getElementById("demo").innerHTML = "praj :"+praj;
               // document.getElementById("demo").innerHTML = "Gender: "+ele[i].value;
            }
        }