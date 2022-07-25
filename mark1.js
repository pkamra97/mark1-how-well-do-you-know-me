// Input process for program
// Mark-1 how well do you know me
var rs= require('readline-sync')
var name =rs.question('Welcome to the Quizmania please enter your name ')
//intialising score for player
var score=0
console.log("-----------------------------")
console.log("Hey ",name," let's get started with the quiz ")
console.log("-----------------------------")
console.log('please confirm your name ',name,"\n")
var ans = rs.question("if this is your name enter yes otherwise no ")

//checking username
if(ans==="yes")
{
  
  console.log("let's begin")
  console.log("for every right answer you will get a +1 for wrong 0")
  console.log("-----------------------------")

}

else{
  name=rs.question("please enter your name again ")
  console.log("Hello ",name," let's start the quiz")
  console.log("for every right answer you will get a +1 for wrong ans 0")
  console.log("-----------------------------")
}
// creating play function for question and answer

function play(ques, ans)
{
  var answer = rs.question(ques," ")

  if(answer.toUpperCase() === ans.toUpperCase())
  {
    console.log("Right answer")
    score++
  }
  else { console.log("Better luck next time") }

  console.log("current score", score)
  console.log("---------------------")
  
}

// creating array of objects 

var options =[ { question:"In which city prateek lives\n A.Noida \n B.Bangalore \n C.Karnal \n", answer:"C"},
              {question:"Prateek's fav food \n A.Biryani\n B.Pasta\nC.Burger \n",
               answer:"A"
              },
              {question:"which place is prateek's favourite \n A.Himachal\nB.Uttarakhand\nC.Sikkim\n",answer:"B"
              },
              {
                question:"fav sport \n A.Cricket\nB.Football\nC.Volleyball\n",
                answer:"A"
              },
              {
                question:"fav OTT platform \n A.Prime video \nB.Disney Hotstar\n C.Netflix \n", answer:"C"
              },
              {
                question:"fav series \nA.starnger things\n B.Money heist\nC.Altered carbon\n",answer:"B"
              }
]
//looping through the array and passing values to function each for each ques

for(var i=0;i<options.length;i++)
  {
    //var cur_val= options[i]
    //passing object values in function
    play(options[i].question,options[i].answer)
  }

console.log("Your final score is ", score)

// array of high scores

var high_score=[{ player:"leonard",score:0}, {player:"Sheldon",score:4}]

if(score>high_score[high_score.length-1].score)
{
  high_score.push({player:name,score:score})
  console.log(high_score[high_score.length-1].player,"::",high_score[high_score.length-1].score)
  console.log("Congrat's you scored a new High Score ",name," send us a screenshot of your high score")
  
  
}
else{
  
  console.log("Current High score ",high_score[high_score.length-1].player,":",high_score[high_score.length-1].score )

}


