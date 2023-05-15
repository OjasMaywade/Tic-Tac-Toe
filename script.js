let clicked = 0;
let matrix = [
    [],
    [],
    []
];
for(i=0;i<=8;i++){
    document.querySelectorAll(".box")[i].addEventListener("click", function(event){
        let box_id = event.target.id;
        if(clicked%2==0){
        document.querySelectorAll(".box")[box_id].classList.add("o-symbol");
        matrix[0][box_id]=(box_id);
        }else{
        document.querySelectorAll(".box")[box_id].classList.add("x-symbol");
        }
        clicked++;
        /*Add code to put O or X in the boxes alternatively and add animation to show hows turn it is.. */
    })
}

    

document.querySelector("button").addEventListener("click", function(){
    //alert("Got Clicked");
   document.querySelector(".dropdown-content").classList.toggle("dropdown-click")
    
})




/*write logic for deciding who won the game or it is a draw */
/*After deciding who won the game make a pop up and declare the result and update the result in the block below */

