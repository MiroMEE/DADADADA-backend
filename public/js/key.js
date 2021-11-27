// This is key function
let main = document.getElementById("main");
let playerFirst = document.getElementById("playerOne");
let widthOne = 40;
let heightOne = 90;
playerFirst.style.width = widthOne+"px";
playerFirst.style.height = heightOne+"px";
let width = 600;
let height = 900;
main.style.width = width+"px";
main.style.height = height+"px";
let topp = 100;
let leftt = 100;
playerFirst.style.top = topp+"px";
playerFirst.style.left = leftt+"px";

// VONDROVA LEVEL
let startSpeed,_a_,_v_,_t_,_vo_;
function mySpeed(){
    _v_ = 1;
    _t_ = 1000;
    _vo_ = playerFirst.style.left.split("px")[0];
    _a_ = Math.abs((_v_-_vo_)/(_t_));
    startSpeed = (_vo_*_t_+(1/2)*_a_*(_t_*_t_))/10000;
    return startSpeed;
};
function mySpeed2(){
    _v_ = 1;
    _t_ = 1000;
    _vo_ = playerFirst.style.top.split("px")[0];
    _a_ = Math.abs((_v_-_vo_)/(_t_));
    startSpeed = (_vo_*_t_+(1/2)*_a_*(_t_*_t_))/10000;
    return startSpeed;
};

document.addEventListener("keypress",(event)=>{
    switch(true){
        /*
        case event.key=="w" || event.key=="W":
            playerFirst.style.top = (topp=topp-mySpeed2())+"px";
            break;
        case event.key=="a" || event.key=="A":
            playerFirst.style.left = (leftt=leftt-mySpeed())+"px";
            break;
        case event.key=="s" || event.key=="S":
            playerFirst.style.top = (topp=topp+mySpeed2())+"px";
            break;
        case event.key=="d" || event.key=="D":
            playerFirst.style.left = (leftt=leftt+mySpeed())+"px";
            break;*/
        case event.key=="x" || event.key=="X":
            if(distance<10){
                console.log()
            }
        default:
            break;
    };

    if(topp<0){
        playerFirst.style.top = 0;
        topp=0;
    };
    if(topp>height-heightOne){
        playerFirst.style.top = (topp = height-heightOne)+"px";
    };
    if(leftt<0){
        playerFirst.style.left = 0;
        leftt=0;
    };
    if(leftt>width-widthOne){
        playerFirst.style.left = (leftt = width-widthOne)+"px";
    };
});


