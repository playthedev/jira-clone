let plus=document.querySelector(".fa-plus");
let main11=document.querySelector(".main");
let ticket=document.querySelector(".ticketGenerate");
let container11=document.querySelector(".container");
let flag=false;
let colorpick='black1';
const noteGenerate=()=>{
    // console.log('hello bro');
    flag=!flag;
    // console.log(flag)
    if(flag)
    ticket.style.display="flex";
    else{
    
    pink11.style.border="none"
    green11.style.border="none"
    blue11.style.border="none"
    black11.style.border="3px solid white"
    ticket.style.display="none";
    console.log(colorpick)
    container11.insertAdjacentHTML("beforeend",`
    <div class="ticketcopy">
    <div class="${colorpick}_pick"></div>
    <div class="unique">#sample_id</div>
    <div class="textterritory"></div>
    <div class="lock"><i class="fa-sharp fa-solid fa-lock"></i></div>
    </div>
`)
colorpick='black1'
    }
}
plus.addEventListener("click",()=>noteGenerate());

let pink11=document.querySelector(".pink1");
let blue11=document.querySelector(".blue1");
let green11=document.querySelector(".green1");
let black11=document.querySelector(".black1");

pink11.addEventListener('click',()=>{
    pink11.style.border="3px solid white"
    green11.style.border="none"
    blue11.style.border="none"
    black11.style.border="none"
    colorpick='pink1';
   
})
blue11.addEventListener('click',()=>{
    blue11.style.border="3px solid white"
    green11.style.border="none"
    black11.style.border="none"
    pink11.style.border="none"
    colorpick='blue1';
})
green11.addEventListener('click',()=>{
    green11.style.border="3px solid white"
    black11.style.border="none"
    blue11.style.border="none"
    pink11.style.border="none"
    colorpick='green1';
})
black11.addEventListener('click',()=>{
    black11.style.border="3px solid white"
    green11.style.border="none"
    blue11.style.border="none"
    pink11.style.border="none"
    colorpick='black1';
})



