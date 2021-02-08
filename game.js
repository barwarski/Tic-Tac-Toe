document.addEventListener("DOMContentLoaded", () => {
      const player1 ="You"
      const player2 = "Me"
      var current_player = player2
      var coord 
      var feld = new Array(9)
      
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
            feld[x] = 1
          }else if(p == player2){
            feld[x] = 2
        }
        gewonnen()
        checkifempty()
      }
      function checkifempty(){
        if (counter == 9){
          alert("Unentschieden ")
          window.open("main_tictactoe.html","_self")
        }
        var counter = 0
        for(var a=0; a<9; a++){
          if(feld[a] == 1 || feld[a] == 2){
            counter++;
          }
        }
      }

      function gewonnen(){
        if(((feld[0] === feld[1] && feld[1] === feld[2] && feld[2] === 1 ) || (feld[3]==feld[4] && feld[4]==feld[5] && feld[5]== 1) || (feld[6]==feld[7] && feld[7]==feld[8] && feld[8]== 1) || (feld[0] == feld[3] && feld[3]== feld[6] && feld[6]== 1) || (feld[1]==feld[4] && feld[4]==feld[7] && feld[7]== 1) || (feld[2]==feld[5] && feld[5]==feld[8] && feld[8]== 1) || (feld[0]==feld[4] && feld[4]==feld[8] && feld[8]== 1))){
          alert("Gewinner ist " +player1)
          window.open("main_tictactoe.html","_self")
        }else if(((feld[0] === feld[1] && feld[1] === feld[2] && feld[2] === 2 ) || (feld[3]==feld[4] && feld[4]==feld[5] && feld[5]== 2) || (feld[6]==feld[7] && feld[7]==feld[8] && feld[8]== 2) || (feld[0] == feld[3] && feld[3]== feld[6] && feld[6]== 2) || (feld[1]==feld[4] && feld[4]==feld[7] && feld[7]== 2) || (feld[2]==feld[5] && feld[5]==feld[8] && feld[8]== 2) || (feld[0]==feld[4] && feld[4]==feld[8] && feld[8]== 2))){
          alert("Gewinner ist " +player2)
          window.open("main_tictactoe.html","_self")
        }
      }
    }
  )