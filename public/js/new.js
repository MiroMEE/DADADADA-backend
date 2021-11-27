let main = document.getElementById("main");
let regionLeft = document.getElementById("playerOne");
let regionRight = document.getElementById("playerTwo");
let playerLeft = document.getElementById("playerLeft");
let playerRight = document.getElementById("playerRight");
let centerChanger = document.getElementById("centerChanger");
let BLOK = document.getElementById("BLOK");
const scoreBoard = document.getElementById("score");
const scoreBoard2 = document.getElementById("score2");
let widthOne,heightOne,width,height,BLOK_HEIGHT,BLOK_WIDTH,BLOK_TOP;
//set up
width = 1920;
height = 900;
setUpLeftPlayer_L = "d";
setUpLeftPlayer_R = "f";
setUpRightPlayer_L = "j";
setUpRightPlayer_R = "k";

// NENÍ HOTOVO - NENÍ S AUTOMATIZOVANÉ
const L_L= -768;
const L_R= -64;
const R_L= 384;
const R_R= 1088;
BLOK_WIDTH = 64;
BLOK_HEIGHT = 64;
BLOK_TOP = 600;

//process
widthOne = width/2.5;
heightOne = height/8;
playerLeft.style.left = L_L+"px";
playerRight.style.right = R_L+"px";
playerRight.style.left = R_L+"px";
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
BLOK.style.top = BLOK_TOP+"px";
BLOK.style.left = "0px"
//process player
playerLeft.style.width = (width/8)+"px";
playerLeft.style.height = (height/8)+"px";

playerRight.style.width = (width/8)+"px";
playerRight.style.height = (height/8)+"px";

document.addEventListener("keypress",(event)=>{
    switch(true) {
        case event.key==setUpLeftPlayer_L||event.key==setUpLeftPlayer_L.toUpperCase(): 
            playerLeft.style.left = L_L+"px";
            BLOK.style.left = L_L+"px";
            break;
        case event.key==setUpLeftPlayer_R||event.key==setUpLeftPlayer_R.toUpperCase():
            playerLeft.style.left = ((-(width/8)))+"px";
            BLOK.style.left = L_R+"px";
            break;
        case event.key==setUpRightPlayer_L||event.key==setUpRightPlayer_L.toUpperCase():
            playerRight.style.left = R_L+"px";
            BLOK.style.left = R_L+"px";
            break;
        case event.key==setUpRightPlayer_R||event.key==setUpRightPlayer_R.toUpperCase():
            playerRight.style.left = (R_R-L_R+(-(width/8)))+"px";
            BLOK.style.left = R_R+"px";
            break;
        default:
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
let x=0;let y=0;
let dx;let dy;let distance;
function create(RANDOM){
    const DO = document.getElementById("centerChanger");
    const neww = document.createElement("div");
    neww.style.top = "-1000px";
    switch (true) {
        case RANDOM==1:
            neww.style.left = L_L+"px";
            break;
        case RANDOM==2:
            neww.style.left = L_R+"px";
            break;
        case RANDOM==3:
            neww.style.left = R_L+"px";
            break;
        case RANDOM==4:
            neww.style.left = R_R+"px";
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
            let rn_position_Y = BLOK_TOP;
            let rn_position_X = (BLOK.style.getPropertyValue("left").split("px")[0]);
            dx=rn_position_X-lesvX;
            dy=volesY-rn_position_Y;
            distance = Math.sqrt(dx**2+dy**2);
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