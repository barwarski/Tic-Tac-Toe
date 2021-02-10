document.addEventListener("DOMContentLoaded", () => {
      const player1 ="You"
      const player2 = "Mee"
      var current_player = player2
      var coord 
      var field = new Array(9)
      
      document.getElementById("grid1").addEventListener("click",player)
      document.getElementById("grid2").addEventListener("click",player)
      document.getElementById("grid3").addEventListener("click",player)
      document.getElementById("grid4").addEventListener("click",player)
      document.getElementById("grid5").addEventListener("click",player)
      document.getElementById("grid6").addEventListener("click",player)
      document.getElementById("grid7").addEventListener("click",player)
      document.getElementById("grid8").addEventListener("click",player)
      document.getElementById("grid9").addEventListener("click",player)
      
      function player(event){
        document.querySelector("h1").innerHTML=("Current player: " + current_player)
       if (current_player == player1){
            document.getElementById(event.target.id).style.backgroundColor = "white"
            document.getElementById(event.target.id).style.backgroundImage = "url('cross.png')"
            current_player = player2
            document.getElementById(event.target.id).removeEventListener("click",player)
            coord = event.target.id.split("")
            coordinaten_eintragen(coord[4],player1)
        }
        else if(current_player != player1){
          document.getElementById(event.target.id).style.backgroundColor = "white"
          document.getElementById(event.target.id).style.backgroundImage= "url('circle.png')"
          current_player = player1
          document.getElementById(event.target.id).removeEventListener("click",player)
          coord = event.target.id.split("")
          coordinaten_eintragen(coord[4],player2)
        }
      }

      function coordinaten_eintragen(x,p){
        --x
          if(p == player1){
            field[x] = 1
          }else if(p == player2){
            field[x] = 2
        }
        check_winner()
        checkifempty()
      }
      function checkifempty(){
        if (counter == 9){
          alert("Unentschieden ")
          window.open("main_tictactoe.html","_self")
        }
        var counter = 0
        for(var a=0; a<9; a++){
          if(field[a] == 1 || field[a] == 2){
            counter++;
          }
        }
      }

      function check_winner(){
        if(((field[0] === field[1] && field[1] === field[2] && field[2] === 1 ) || (field[3]==field[4] && field[4]==field[5] && field[5]== 1) || (field[6]==field[7] && field[7]==field[8] && field[8]== 1) || (field[0] == field[3] && field[3]== field[6] && field[6]== 1) || (field[1]==field[4] && field[4]==field[7] && field[7]== 1) || (field[2]==field[5] && field[5]==field[8] && field[8]== 1) || (field[0]==field[4] && field[4]==field[8] && field[8]== 1))){
          alert("Gewinner ist " +player1)
          window.open("main_tictactoe.html","_self")
        }else if(((field[0] === field[1] && field[1] === field[2] && field[2] === 2 ) || (field[3]==field[4] && field[4]==field[5] && field[5]== 2) || (field[6]==field[7] && field[7]==field[8] && field[8]== 2) || (field[0] == field[3] && field[3]== field[6] && field[6]== 2) || (field[1]==field[4] && field[4]==field[7] && field[7]== 2) || (field[2]==field[5] && field[5]==field[8] && field[8]== 2) || (field[0]==field[4] && field[4]==field[8] && field[8]== 2))){
          alert("Gewinner ist " +player2)
          window.open("main_tictactoe.html","_self")
        }
      }
    }
  )
