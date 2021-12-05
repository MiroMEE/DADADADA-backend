let width,height,background,how_many_players;
width = 900;
height = 600;
background = "grey";
how_many_players = 2
// next
const mainDiv = document.getElementById("mainDiv");
mainDiv.style.width = width+"px";
mainDiv.style.height = height+"px";
mainDiv.style.backgroundColor = background;
const DisplayMessage = (x) =>{
    console.log(x);
};
const player = document.createElement("div");
player.setAttribute("id","player");
player.style.backgroundColor = "red";
mainDiv.append(player);
player.style.height = "10px";
player.style.width = "10px";
player.style.left = 0+"px";
//
let xx=0;
class movementPlayer{
    constructor(x,y,main){
        this.x = x;
        this.y = y;
        this.main = main;
    };
    leftPlayer(){
        this.main.style.left = (this.x -= 1)+"px";
    };
    rightPlayer(valuern){
        if(valuern=="stop"){
            if(xx==0){
                console.log(xx);
                const b = setInterval(() => {
                    this.main.style.left = (this.x += 1)+"px";
                });
                xx==1;
            };
        };
    };
};

const movement = new movementPlayer(document.getElementById("player").clientLeft,document.getElementById("player").clientTop,document.getElementById("player"));
document.addEventListener("keydown",(event)=>{
    switch (true) {
        case event.key=="a"||event.key=="a".toUpperCase():
            document.addEventListener("keyup",(event)=>{
                movement.leftPlayer("go");
            });
            movement.leftPlayer("stop");
            break;
        case event.key=="d"||event.key=="d".toUpperCase():
            movement.rightPlayer("stop");
            break;    
        default:
            console.log("tried: "+event.key);
            break;
    };
});/*
document.addEventListener("keyup",(event)=>{
    switch (true) {
        case event.key=="a"||event.key=="a".toUpperCase():
            movement.leftPlayer("go");
            break;
        case event.key=="d"||event.key=="d".toUpperCase():
            movement.rightPlayer("go");
            break;
        };
});*/



// if(valuern=="stop"){
//     console.log("ha");
//     
// };