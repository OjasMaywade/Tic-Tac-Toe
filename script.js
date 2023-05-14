for(i=0;i<=8;i++){
    document.querySelectorAll(".box")[i].addEventListener("click", function(event){
        var u = event.target.id;
        console.log(u);
        document.querySelectorAll(".box")[u].classList.add("o-symbol");
        
        /*Add code to put O or X in the boxes alternatively and add animation to show hows turn it is.. */
    })
}
    

document.querySelector(".btn").addEventListener("click", function(){
    alert("Got Clicked");
   // document.querySelector("#dropdown-content").classList.add("dropdown-content-click")
    
})




/*write logic for deciding who won the game or it is a draw */
/*After deciding who won the game make a pop up and declare the result and update the result in the block below */

