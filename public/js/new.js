let main = document.getElementById("main");
let regionLeft = document.getElementById("playerOne");
let regionRight = document.getElementById("playerTwo");
let playerLeft = document.getElementById("playerLeft");
let playerRight = document.getElementById("playerRight");
let centerChanger = document.getElementById("centerChanger");
let BLOK = document.getElementById("BLOK");
const scoreBoard = document.getElementById("score");
const scoreBoard2 = document.getElementById("score2");
let widthOne,heightOne,width,height,BLOK_HEIGHT,BLOK_WIDTH,BLOK_TOP,speed_fluency,random_timer,x=0,y=0,dx,dy,distance;
let setUpLeftPlayer_L,setUpLeftPlayer_R,setUpRightPlayer_L,setUpRightPlayer_R,setupCHANGER_;
let CHANGE_NOW = "LEFT";let how_many_blocks;let CHANGE_NOW_;
const windowsss = document.querySelector("#windowsss");
const windowsssP = document.querySelector("#windowsssP");
//set up
width = 1920;
height = 700;
setUpLeftPlayer_L = "d";
setUpLeftPlayer_R = "f";
setUpRightPlayer_L = "j";
setUpRightPlayer_R = "k";
setupCHANGER_ = " ";
speed_fluency = 10;
random_timer = 300;
how_many_blocks = 100;
CHANGE_NOW_ ="TWO";
//process
const L_L= -(width/2.5);
const L_R= -(width/30);
const R_L= (width/5);
const R_R= (width-((width/2.5)+(width/30)));

BLOK_WIDTH = width/30;
BLOK_HEIGHT = width/30;
widthOne = width/2.5;
heightOne = width/30;
BLOK_TOP = height-200;
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

centerChanger.style.height = height+"px";
centerChanger.style.width = "20%";

BLOK.style.width = BLOK_WIDTH+"PX";
BLOK.style.height = BLOK_HEIGHT+"PX";
BLOK.style.top = BLOK_TOP+"px";
BLOK.style.left = "0px"
//process player
playerLeft.style.width = BLOK_HEIGHT+"px";
playerLeft.style.height = BLOK_HEIGHT+"px";
playerRight.style.width = BLOK_HEIGHT+"px";
playerRight.style.height = BLOK_HEIGHT+"px";

const ready = document.getElementById("ready");
ready.addEventListener("click",()=>{
    ready.remove();
    let how_many=0;
    const dedede = setInterval(() => {
        how_many = how_many+1;
        console.log(how_many);
        const random = (Math.floor(Math.random() * 4) + 1);
        create(random);
        if(how_many==how_many_blocks){
            const pepa = setInterval(() => {
                console.log(x+" <--> "+y);
                windowsss.style.display ="block";
                windowsssP.innerText = x;
                clearInterval(pepa);
            }, (speed_fluency*random_timer));
            clearInterval(dedede);
        };
    }, random_timer);
});
document.addEventListener("keypress",(event)=>{
    switch(true) {
        case event.key==setUpLeftPlayer_L||event.key==setUpLeftPlayer_L.toUpperCase(): 
            playerLeft.style.left = L_L+"px";
            if(CHANGE_NOW=="LEFT"||CHANGE_NOW_=="ONE"){
                BLOK.style.left = L_L+"px";
            };
            break;
        case event.key==setUpLeftPlayer_R||event.key==setUpLeftPlayer_R.toUpperCase():
            playerLeft.style.left = L_R+"px";
            if(CHANGE_NOW=="LEFT"||CHANGE_NOW_=="ONE"){
                BLOK.style.left = L_R+"px";
            };
            break;
        case event.key==setUpRightPlayer_L||event.key==setUpRightPlayer_L.toUpperCase():
            playerRight.style.left = R_L+"px";
            if(CHANGE_NOW=="RIGHT"||CHANGE_NOW_=="ONE"){
                BLOK.style.left = R_L+"px";
            };
            break;
        case event.key==setUpRightPlayer_R||event.key==setUpRightPlayer_R.toUpperCase():
            playerRight.style.left = R_R+"px";
            if(CHANGE_NOW=="RIGHT"||CHANGE_NOW_=="ONE"){
                BLOK.style.left = R_R+"px";
            };
            break;
        case event.key==setupCHANGER_:
            if(!(CHANGE_NOW_=="ONE")){
                if(CHANGE_NOW=="LEFT"){
                    CHANGE_NOW = "RIGHT";
                    let gloked = playerRight.style.left.split("px")[0];
                    BLOK.style.left = gloked+"px";
                } else if(CHANGE_NOW=="RIGHT"){
                    CHANGE_NOW = "LEFT";
                    let gloked = playerLeft.style.left.split("px")[0];
                    BLOK.style.left = gloked+"px";
                };
            };
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
function create(RANDOM){
    let c=0;
    const DO = document.getElementById("centerChanger");
    const neww = document.createElement("div");
    neww.style.width = (width/30)+"px";
    neww.style.height = (width/30)+"px";
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
    neww.setAttribute("class","AYAYA");
    DO.append(neww);
    let D = "No";
    const fic = setInterval(() => {
        let volesY = neww.style.getPropertyValue("top").split("px")[0];
        neww.style.top = Number(volesY-(-10))+"px";
        if(volesY>BLOK_TOP-20&&volesY<BLOK_TOP+90){
            volesY = neww.style.getPropertyValue("top").split("px")[0];
            let lesvX = neww.style.getPropertyValue("left").split("px")[0];
            let rn_position_Y = BLOK_TOP;
            let rn_position_X = (BLOK.style.getPropertyValue("left").split("px")[0]);
            dx=rn_position_X-lesvX;
            dy=volesY-rn_position_Y;
            distance = Math.sqrt(dx**2+dy**2);
            if(distance<10&&distance>-10){
                neww.remove();
                const vadd = setInterval(() => {
                    x=x+10;
                    scoreBoard.innerText = x;
                    c=c+1
                    if(c==10){
                        clearInterval(vadd);
                    };
                }, 10);
                D="Yes";
                clearInterval(fic);
            };
            if(D=="No"){
                y=(y+1);
                scoreBoard2.innerText = y;
                const vad = setTimeout(() => {
                    neww.remove();
                    clearTimeout(vad);
                    clearInterval(fic);
                }, 130);
            };
        };
    }, speed_fluency);
};