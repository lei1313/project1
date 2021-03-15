var won = 0
var lost = 0
var tied = 0
var rounds = prompt("How many rounds are you going to play?")

for(i = 1; i <= rounds; i++){
    var userchoice = prompt(" Do you pick rock,paper,sicssor?(enter r,p, or s)")
    var computerChoice = Math.floor(Math.random() * 3)
    if(computerChoice == 0){
        computerChoice = "r"
        console.log(computerChoice)
    }
    else if(computerChoice == 1){
        computerChoice = "p"
    }
    else {
        computerChoice = "s"
    }
    

    if(userchoice == "r" && computerChoice =="p"){
        lost = lost +1
        alert("You lost!")
    }else if(userchoice == "p" && computerChoice =="s"){
        lost = lost +1
        alert("You lost!")
    }else if(userchoice == "s" && computerChoice =="r"){
        lost = lost +1
        alert("You lost!")
    } else if (userchoice == computerChoice){
        tied = tied + 1
        alert("You tied!")
    }else{
        won = won + 1
        alert("You won!")
    }
}
alert("You won " + won + " time(s)." + " You lost " + lost + " time(s). " +"You tied " + tied + " time(s).")
