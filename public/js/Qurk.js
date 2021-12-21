const main = document.querySelector(".trashBin");
const bin = document.querySelector(".trashBin");
let Up_p1,Left_p1,Right_p1,Down_p1,deeS;
deeS = null;
class changeXO{
    constructor(x,y){
        this.x = x;
        this.y = y;
    };
    setUp(how_many){
        for(let j=0;j<how_many;j++){
            for(let i=0;i<how_many;i++){
                deeS+=1;
                const div = document.createElement("div");
                div.setAttribute("class","hxClass");
                if(i!==how_many-1 && typeof(div) != 'undefined' && div != null){
                    div.style.float = "left";
                    div.id = "hx"+deeS;
                }else{
                    div.id = "hohoho";
                };
                bin.append(div);
            };
        };
    };
    down(){
        const texx = String(Number(this.y.parentNode.id.replace(/\D/g,''))+20);
        ife(texx,this.y);
    };
    up(){
        const texx = String(Number(this.y.parentNode.id.replace(/\D/g,''))-20);
        ife(texx,this.y);
    };
    left(){
        const texx = String(Number(this.y.parentNode.id.replace(/\D/g,''))-1);
        ife(texx,this.y);
    };
    right(){
        const texx = String(Number(this.y.parentNode.id.replace(/\D/g,''))+1);
        ife(texx,this.y);
    };
};
const clas = new changeXO();
function soHowMany(x,y,mode){
    for(let i=x;i<=y;i++){
        clas.x = document.querySelector('#hx'+i);
        clas[mode]();
    };
};
function createPlayer(){
    const blok = document.createElement("div");
    blok.setAttribute("class","blok");
    document.querySelector("#hx5").append(blok);
    clas.y = blok;
};
function ife(texx,y){
    const uf = document.querySelector("#hx"+texx);
    if(uf !==null)
        uf.append(y);
};
clas.setUp(20);
createPlayer();
//player key binding
Up_p1 = "w";
Down_p1 = "s";
Left_p1 = "a";
Right_p1 = "d";

document.addEventListener("keypress",(e) =>{
    switch (e.isTrusted == true) {
        case e.key == Up_p1||e.key ==  Up_p1.toUpperCase:
            clas.up();
            break;
        case e.key == Down_p1||e.key ==  Down_p1.toUpperCase:
            clas.down();
            break;
        case e.key == Left_p1||e.key ==  Left_p1.toUpperCase:
            clas.left();
            break;
        case e.key == Right_p1||e.key ==  Right_p1.toUpperCase:
            clas.right();
            break;
        default:
            console.log("NotBK: "+e.key);
            break;
    };
});