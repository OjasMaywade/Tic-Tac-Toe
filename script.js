let clicked = 0;

let matrix = [, , ,];
for(j=0;j<=2;j++){
   matrix[j] = [, , ,];
}

// basically we have to create a storage system which will store the response from the users and then compare it to get the result.
//use mathematics array m and n terms to compare the matrix element
// problem with the previous matrix was because of the id of the box
for(i=0;i<=8;i++){
    document.querySelectorAll(".boxes>div>div")[i].addEventListener("click", function(event){
        let bId= event.target.id;
        let col = event.target.className;
        let row = event.target.parentNode.className;
        if(clicked%2==0){
        document.querySelectorAll(".boxes>div>div")[bId].classList.add("o-symbol");
        matrix[row][col]=("o");
        }else{
        document.querySelectorAll(".boxes>div>div")[bId].classList.add("x-symbol");
        matrix[row][col]=("x");
        }
        clicked++;
        
    
        /*Add code to put O or X in the boxes alternatively and add animation to show hows turn it is.. */
    })
}
/*
for(m=0;m<=2;m++){
    if(matrix[m][0]===matrix[m][1] && matrix[m][1]===matrix[m][2]){
        alert("Wins");
    }
}
    /*for(n=0;n<=2;n++){
        if(matrix[0][n]===matrix[1][n] && matrix[1][n]===matrix[2][n]){
            alert("Wins");
        }
    }*/


    

document.querySelector("button").addEventListener("click", function(){
   document.querySelector(".dropdown-content").classList.toggle("dropdown-click")
    
})




/*write logic for deciding who won the game or it is a draw */
/*After deciding who won the game make a pop up and declare the result and update the result in the block below */

