let clicked = 0;

let matrix = [, , ,];
for(j=0;j<=2;j++){
   matrix[j] = [, , ,];
}
console.log(matrix);
// Can we create a object or array that can store value of each element according to its preference
// basically we have to create a storage system which will store the response from the users and then compare it to get the result.
//use mathematics array i and j terms to compare the matrix element
// problem with the previous matrix was because of the id of the box
for(i=0;i<=8;i++){
    document.querySelectorAll(".boxes>div")[i].addEventListener("click", function(event){
        let col= event.target.id;
        let row = event.target.className;
        console.log(row);
        if(clicked%2==0){
        document.querySelectorAll(".boxes>div")[col].classList.add("o-symbol");
        matrix[row][col]=("o");
        }else{
        document.querySelectorAll(".boxes>div")[col].classList.add("x-symbol");
        matrix[row][col]=("x");
        }
        clicked++;
        console.log(matrix);
        /*Add code to put O or X in the boxes alternatively and add animation to show hows turn it is.. */
    })
}

    

document.querySelector("button").addEventListener("click", function(){
    //alert("Got Clicked");
   document.querySelector(".dropdown-content").classList.toggle("dropdown-click")
    
})




/*write logic for deciding who won the game or it is a draw */
/*After deciding who won the game make a pop up and declare the result and update the result in the block below */

