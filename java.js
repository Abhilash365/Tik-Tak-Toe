let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let winmsg=document.querySelector("#msg");
let windiv=document.querySelector(".win");
let turnO=true;
let wEl;
let count=0;
let play=0;
let newg=document.querySelector(".newgame");
//winning patterns

const wins=[[0,1,2],[0,3,6],[0,4,8]
             ,[1,4,7],[2,5,8],[2,4,6],
             [3,4,5],[6,7,8]];

   
            boxes.forEach((b)=>{
            b.addEventListener("click",()=>{
                console.log("clicked");
                count++;
                console.log("c:",count);
            if(turnO){
                b.innerHTML="O";
                turnO=false;
                
            }
                else{
                    b.innerHTML="X";
                    turnO=true;
                }
           b.disabled=true;
            check();
           
          
            })
           
             })
           
//checking function

             const check=()=>{
                for(p of wins){
                  let ps0=boxes[p[0]].innerHTML;
                  let ps1=boxes[p[1]].innerHTML;
                  let ps2=boxes[p[2]].innerHTML;
                  if(ps0!=0 && ps1!=0 && ps2!=0){
                    if(ps0==ps1 && ps2==ps1){
                        console.log("winner");
                     disablebtns();
                     wEl=ps0;
                     showwinner();
                    }   
                  }
                 if(count==9){

                    winmsg.innerHTML=`DRAW`;
                windiv.classList.remove("hide");

                 }

                }
             }
//show func
             const showwinner=()=>{
              
                winmsg.innerHTML=`Winner:${wEl}`;
                windiv.classList.remove("hide");
                
             }
//reset game
          reset.addEventListener("click",()=>{
            enablebtns();
            windiv.classList.add("hide");
            // play();
            count=0;
            xodet();
          })
             
   //diable after winner

             const disablebtns=()=>{
                for(a of boxes){
                    a.disabled=true;
                }
             }

             
             const enablebtns=()=>{
                for(a of boxes){
                    a.disabled=false;
                    a.innerText="";
                    
                }
             }
      //newgame
      
      newg.addEventListener("click",()=>{
        enablebtns();
        windiv.classList.add("hide");
        play++;
      xodet();
      count=0;
      })

const xodet=()=>{
    if(play%2!=0){
        turnO=false;
       }
       else{
        turnO=true;
       }
}
      