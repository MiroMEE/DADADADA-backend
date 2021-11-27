let main = document.getElementById("main");
let regionLeft = document.getElementById("playerOne");
let regionRight = document.getElementById("playerTwo");
let playerLeft = document.getElementById("playerLeft");
let playerRight = document.getElementById("playerRight");
let centerChanger = document.getElementById("centerChanger");
let BLOK = document.getElementById("BLOK");
let widthOne,heightOne,width,height,leftt,topp,BLOK_HEIGHT,BLOK_WIDTH;
//set up
width = 1920;
height = 900;
widthOne = width/2.5;
heightOne = height/8;
setUpLeftPlayer_L = "a";
setUpLeftPlayer_R = "d";
setUpRightPlayer_L = "k";
setUpRightPlayer_R = "ů";

BLOK_WIDTH = 64;
BLOK_HEIGHT = 64;
//process
regionLeft.style.width = widthOne+"px";
regionLeft.style.height = heightOne+"px";
regionLeft.style.bottom = -(height-heightOne)+"px";

regionRight.style.width = widthOne+"px";
regionRight.style.height = heightOne+"px";
regionRight.style.bottom = -(height-heightOne)+"px";

main.style.width = width+"px";
main.style.height = height+"px";

centerChanger.style.height = (height)+"px";
centerChanger.style.width = "20%";

BLOK.style.width = BLOK_WIDTH+"PX";
BLOK.style.height = BLOK_HEIGHT+"PX";
BLOK.style.top = "600px";
BLOK.style.left = "0px"
//process player
playerLeft.style.width = (width/8)+"px";
playerLeft.style.height = "100%";

playerRight.style.width = (width/8)+"px";
playerRight.style.height = "100%";
let works="Ano";
let dis_X;
document.addEventListener("keypress",(event)=>{
    switch(true) {
        case event.key==setUpLeftPlayer_L||event.key==setUpLeftPlayer_L.toUpperCase(): 
            playerLeft.style.float = "left";
            BLOK.style.left = (-768)+"px";
            dis_X = -780;
            break;
        case event.key==setUpLeftPlayer_R||event.key==setUpLeftPlayer_R.toUpperCase():
            playerLeft.style.float = "right";
            BLOK.style.left = (-64)+"px";
            dis_X = -64;
        break;
            break;
        case event.key==setUpRightPlayer_L||event.key==setUpRightPlayer_L.toUpperCase():
            playerRight.style.float = "left";
            BLOK.style.left = (384)+"px";
            dis_X = 384;
            break;
        case event.key==setUpRightPlayer_R||event.key==setUpRightPlayer_R.toUpperCase():
            playerRight.style.float = "right";
            BLOK.style.left = (1088)+"px";
            dis_X = 1088;
            break;
        default:
            console.log("<"+event.key+">")
            break;
   };
   if(BLOK.style.left.split("px")[0]>0){
        centerChanger.style.backgroundColor = "hotpink";

   } else{
        centerChanger.style.backgroundColor = "yellow";
   };
});
setInterval(() => {
    const random = (Math.floor(Math.random() * 4) + 1);
    create(random); 
}, 500);
const scoreBoard = document.getElementById("score");
const scoreBoard2 = document.getElementById("score2");
let x=0;let y=0;
function create(RANDOM){
    let dx;let dy;let distance;
    const DO = document.getElementById("centerChanger");
    const neww = document.createElement("div");
    neww.style.top = "-1000px";
    switch (true) {
        case RANDOM==1:
            neww.style.left = "-768px";
            break;
        case RANDOM==2:
            neww.style.left = "-64px";
            break;
        case RANDOM==3:
            neww.style.left = "384px";
            break;
        case RANDOM==4:
            neww.style.left = "1088px";
            break;
        default:
            break;
    }
    neww.setAttribute("class","AYAYA")
    DO.append(neww);
    let D = "No";
    const fic = setInterval(() => {
        let volesY = neww.style.getPropertyValue("top").split("px")[0];
        neww.style.top = Number(volesY-(-10))+"px";
        if(volesY>580&&volesY<690){
            volesY = neww.style.getPropertyValue("top").split("px")[0];
            let lesvX = neww.style.getPropertyValue("left").split("px")[0];
            let rn_position_Y = 600;
            let rn_position_X = (BLOK.style.getPropertyValue("left").split("px")[0]);
            dx=rn_position_X-lesvX;
            dy=volesY-rn_position_Y;
            distance = Math.sqrt(dx**2+dy**2);
            console.log(distance);
            if(distance<10&&distance>-10){
                x=x+10;
                neww.remove();
                D="Yes";
                scoreBoard.innerText = x;
            };
            if(D=="No"){
                y=y+1;
                neww.remove();
                clearInterval(fic);
                scoreBoard2.innerText = y;
            };
        };
    }, 10);
};