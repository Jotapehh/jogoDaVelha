const reload = document.getElementById("reload");
const msg = document.getElementById("msg")
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const ptPlayer = document.getElementById("ptPlayer");
const ptEnemy = document.getElementById("ptEnemy");
const botNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let box1Clicked = false;
let box2Clicked = false;
let box3Clicked = false;
let box4Clicked = false;
let box5Clicked = false;
let box6Clicked = false;
let box7Clicked = false;
let box8Clicked = false;
let box9Clicked = false;

let pointsEnemy = 0;
let pointsPlayer = 0;


box1.addEventListener("click", function(){
    verificar();

    if(box1Clicked === false){
        box1Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box1.appendChild(p);

        
        vezDoBot();
    }
});
box2.addEventListener("click", function(){
    verificar();

    if(box2Clicked === false){
        box2Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box2.appendChild(p);

        vezDoBot();
    }
});
box3.addEventListener("click", function(){
    verificar();

    if(box3Clicked === false){
        box3Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box3.appendChild(p);

        vezDoBot();
    }
});
box4.addEventListener("click", function(){
    verificar();

    if(box4Clicked === false){
        box4Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box4.appendChild(p);

        vezDoBot();
    }
});
box5.addEventListener("click", function(){
    verificar();

    if(box5Clicked === false){
        box5Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box5.appendChild(p);

        vezDoBot();
    }
});
box6.addEventListener("click", function(){
    verificar();

    if(box6Clicked === false){
        box6Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box6.appendChild(p);

        vezDoBot();
    }
});
box7.addEventListener("click", function(){
    verificar();

    if(box7Clicked === false){
        box7Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box7.appendChild(p);

        vezDoBot();
    }
});
box8.addEventListener("click", function(){
    verificar();

    if(box8Clicked === false){
        box8Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box8.appendChild(p);

        vezDoBot();
    }
});
box9.addEventListener("click", function(){
    verificar();

    if(box9Clicked === false){
        box9Clicked = true;
        const p = document.createElement('p');
        p.setAttribute('id', 'player');
        p.innerText = "X";
        box9.appendChild(p);

        vezDoBot();
    }
});

async function vezDoBot(){
    let randomInimigo = Math.floor(Math.random() * botNumber.length);
    let escolhaBot = botNumber[randomInimigo];

    
    await delay(500)

    if(box1Clicked && box2Clicked && box3Clicked && box4Clicked && box5Clicked && box6Clicked && box7Clicked && box8Clicked && box9Clicked === true && box1Clicked && box2Clicked && box3Clicked && box4Clicked && box5Clicked && box6Clicked && box7Clicked && box8Clicked && box9Clicked !== verificar()){
        sairOk()
    }

    else{
        while(escolhaBot === 1 && box1Clicked === true || 
        escolhaBot === 2 && box2Clicked === true || 
        escolhaBot === 3 && box3Clicked === true ||
        escolhaBot === 4 && box4Clicked === true ||
        escolhaBot === 5 && box5Clicked === true ||
        escolhaBot === 6 && box6Clicked === true ||
        escolhaBot === 7 && box7Clicked === true ||
        escolhaBot === 8 && box8Clicked === true ||
        escolhaBot === 9 && box9Clicked === true
        ){
            randomInimigo = Math.floor(Math.random() * botNumber.length);
            escolhaBot = botNumber[randomInimigo];
        }
        //await delay(1000);
        if(escolhaBot === 1){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box1.appendChild(p);

            box1Clicked = true;
        }

        if(escolhaBot === 2){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box2.appendChild(p);

            box2Clicked = true;
        }

        if(escolhaBot === 3){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box3.appendChild(p);

            box3Clicked = true;
        }

        if(escolhaBot === 4){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box4.appendChild(p);

            box4Clicked = true;
        }

        if(escolhaBot === 5){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box5.appendChild(p);

            box5Clicked = true;
        }

        if(escolhaBot === 6){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box6.appendChild(p);

            box6Clicked = true;
        }

        if(escolhaBot === 7){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box7.appendChild(p);

            box7Clicked = true;
        }

        if(escolhaBot === 8){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box8.appendChild(p);

            box8Clicked = true;
        }

        if(escolhaBot === 9){
            const p = document.createElement('p');
            p.setAttribute('id', 'enemy');
            p.innerText = "O";
            box9.appendChild(p);

            box9Clicked = true;
        }
        if(ptPlayer = !pointsPlayer){
            verificar();
        }
        

    }
}

async function verificar(){
    await delay(900);
    //123
    if(box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }

    //159
    if(box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }

    //147
    if(box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }

    //258
    if(box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }

    //357
    if(box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }

    //369
    if(box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }

    //456
    if(box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }

    //789
    if(box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X"){
        pointsPlayer += 1;
        ptPlayer.innerHTML = pointsPlayer;
       
        reload.style.visibility = 'visible';
    }
    if(box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O"){
        pointsEnemy += 1;
        ptEnemy.innerHTML = pointsEnemy;
       
        reload.style.visibility = 'visible';
    }
}

async function sairOk(){

    box1Clicked = false;
    box2Clicked = false; 
    box3Clicked = false;
    box4Clicked = false;
    box5Clicked = false;
    box6Clicked = false;
    box7Clicked = false;
    box8Clicked = false;
    box9Clicked = false;
    
    box1.innerHTML = null;
    box2.innerHTML = null;
    box3.innerHTML = null;
    box4.innerHTML = null;
    box5.innerHTML = null;
    box6.innerHTML = null;
    box7.innerHTML = null;
    box8.innerHTML = null;
    box9.innerHTML = null;
    
    reload.style.visibility = 'hidden';
};

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}