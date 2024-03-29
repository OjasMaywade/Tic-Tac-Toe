let clicked = 0;
let win_o = 0;
let win_x = 0;
let ties = 0;
let result;

let matrix = [, , ,];
for(j=0;j<=2;j++){
   matrix[j] = [, , ,];
}

// basically we have to create a storage system which will store the response from the users and then compare it to get the result.
// use mathematics array m and n terms to compare the matrix element
// problem with the previous matrix was because of the id of the box
for(i=0;i<=8;i++){
    document.querySelectorAll(".boxes>div>div")[i].addEventListener("click", function(event){
        let bId= event.target.id;
        let col = event.target.classList;
        let row = event.target.parentNode.className;
        if(clicked%2==0 && matrix[row][col[0]] == null){
        document.querySelectorAll(".boxes>div>div")[bId].classList.add("o-symbol");
        matrix[row][col[0]]=("o");
        clicked++;
        }else if(clicked%2!=0 && matrix[row][col[0]] == null){
        document.querySelectorAll(".boxes>div>div")[bId].classList.add("x-symbol");
        matrix[row][col[0]]=("x");
        clicked++;
        }
    
        checkWin();
        checkTie();
        /*Add code to put O or X in the boxes alternatively (Done) and add animation to show hows turn it is.. */
        /* Improve the code So the user can avoid clicking to occupied box and losing their turn (Done)*/
    })
}

function checkWin(){
    for(m=0;m<=2;m++){
        if(matrix[m][0] != null || matrix[m][1] != null || matrix[m][2] != null ){
            if(matrix[m][0]===matrix[m][1] && matrix[m][1]===matrix[m][2]){
                updateScore(m,n=0);
                result=true;
                popUp()
            }
        }if(matrix[0][m] != null || matrix[1][m] != null || matrix[2][m] != null ){
          if(matrix[0][m]===matrix[1][m] && matrix[1][m]===matrix[2][m]){
            updateScore(0,m);
            result=true;
            popUp()
            }
        } if(matrix[0][0] != null || matrix[1][1] != null || matrix[2][2] != null ){
            if(matrix[0][0]===matrix[1][1] && matrix[1][1]===matrix[2][2]){
            //let m=1, n = 1;
            updateScore(1,1);
            result=true;
            popUp()
            }
        } if(matrix[0][2] != null || matrix[1][1] != null || matrix[2][1] != null ){
           if(matrix[0][2]===matrix[1][1] && matrix[1][1]===matrix[2][0]){
            //let m=1, n = 1;
            updateScore(1,1);
            result=true;
            popUp()
           }
        }
    } 
}  

function checkTie(){
  for(m=0;m<=2;m++){
        if(matrix[m][0] != null && matrix[m][1] != null && matrix[m][2] != null ){
            if(matrix[m][0]!==matrix[m][1] || matrix[m][1]!==matrix[m][2]){ 
                if(matrix[0][m] != null && matrix[1][m] != null && matrix[2][m] != null ){
                    if(matrix[0][m]!==matrix[1][m] || matrix[1][m]===matrix[2][m]){
                        if(matrix[0][0] != null && matrix[1][1] != null && matrix[2][2] != null ){
                            if(matrix[0][0]!==matrix[1][1] || matrix[1][1]!==matrix[2][2]){
                                if(matrix[0][2] != null && matrix[1][1] != null && matrix[2][1] != null ){
                                    if(matrix[0][2]!==matrix[1][1] || matrix[1][1]!==matrix[2][0]){
                                        ties++;
                                        document.querySelector(".pop-up").classList.add("pop-win");
                                        document.querySelector("#main").classList.add("blur");
                                        document.querySelector(".ties>h6").innerHTML = ties;
                                        document.querySelector(".pop-up>p").innerHTML = "Tie";
                                        popUp();
                                        m=2;
                                    }
                                }  
                            }
                        }      
                    } 
         
                }
            }
        } 
    }
}
/*Write code for checking ties (done)*/
/* Add a pop up which displays the results (done)*/


function updateScore(m,n){
    if(matrix[m][n]==="x"){
        win_x++;
        document.querySelector("#main").classList.add("blur");
        document.querySelector(".pop-up").classList.add("pop-win");
        document.querySelector(".pop-up>p").innerHTML = "Player-1 Wins";
        document.querySelector(".player-1>h6").innerHTML = win_x + " Win";
    }else if(matrix[m][n]==="o"){
        win_o++;
        document.querySelector("#main").classList.add("blur");
        document.querySelector(".pop-up").classList.add("pop-win");
        document.querySelector(".pop-up>p").innerHTML = "Player-2 Wins";
        document.querySelector(".player-2>h6").innerHTML = win_o + " Win";
    }
}
   
/* Replace the 1 from the innerHTML manipulation and substitude it with some variable which keeps the count of numbers of wins (done) */
function popUp(){
document.querySelector(".play-again").addEventListener("click", function(){
    matrix = [, , ,];
    for(j=0;j<=2;j++){
   matrix[j] = [, , ,];
}
    for(i=0;i<=8;i++){
        document.querySelectorAll(".boxes>div>div")[i].classList.remove("o-symbol");
        document.querySelectorAll(".boxes>div>div")[i].classList.remove("x-symbol");
        }
        document.querySelector("#main").classList.remove("blur");
        document.querySelector(".pop-up").classList.remove("pop-win");
        clicked=0;
});
}
document.querySelector("button").addEventListener("click", function(){
   document.querySelector(".dropdown-content").classList.toggle("dropdown-click")

   /* Add functionality to the item inside the dropdown so, that they can provide the necessary function */
    
})

document.querySelector(".reset").addEventListener("click", function(){
    matrix = [, , ,];
    for(j=0;j<=2;j++){
   matrix[j] = [, , ,];
}
    for(i=0;i<=8;i++){
        document.querySelectorAll(".boxes>div>div")[i].classList.remove("o-symbol");
        document.querySelectorAll(".boxes>div>div")[i].classList.remove("x-symbol");
        }
        document.querySelector(".dropdown-content").classList.remove("dropdown-click");
        clicked=0;
})

document.querySelector(".new-round").addEventListener("click", function(){
    win_o = 0;
    win_x = 0;
    ties = 0;
    document.querySelector(".player-1>h6").innerHTML = win_x + " Win";
    document.querySelector(".player-2>h6").innerHTML = win_o + " Win";
    document.querySelector(".ties>h6").innerHTML = ties;
    document.querySelector(".dropdown-content").classList.remove("dropdown-click");
    if(clicked==8){clicked=0;}
})
/*write logic for deciding who won the game (done) or it is a draw (done) */
/*After deciding who won the game make a pop up and declare the result and update the result in the block below (done) */

/* 
1. Write logic for tie game (done)
2. Make chance animation and drop down animation 
3. add functionality to drowdrop menu (done)
4. Add comments to code and improve the code structure
*/

/*
1. Fix bugs for new round click (done)
*/