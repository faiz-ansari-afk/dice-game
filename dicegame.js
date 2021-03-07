function randomNumber() {
return  Math.floor(Math.random()*6 + 1);
}
function getImage(random){
    return randomDiceImage = "img/dice" + random + ".png"
}
function showImage(randomNumber,i){
    switch (randomNumber){
        case 1:{
            document.querySelectorAll('img')[i].setAttribute("src",getImage(1));
            break;
        }
        case 2:{
            document.querySelectorAll('img')[i].setAttribute("src",getImage(2));
            break;
        }
        case 3:{
            document.querySelectorAll('img')[i].setAttribute("src",getImage(3));
            break;
        }
        case 4:{
            document.querySelectorAll('img')[i].setAttribute("src",getImage(4));
            break;
        }
        case 5:{
            document.querySelectorAll('img')[i].setAttribute("src",getImage(5));
            break;
        }
        case 6:{
            document.querySelectorAll('img')[i].setAttribute("src",getImage(6));
            break;
        }
        
    }
}
function main(){
    let random1 = randomNumber();
    showImage(random1,0);
    let random2 = randomNumber();
    showImage(random2,1);
    if(random1 === random2){
        document.querySelector('strong').textContent = 'Draw! click again';
    }else if(random1 > random2){
        document.querySelector('strong').textContent = 'Player 1 Won!';
    }else{
        document.querySelector('strong').textContent = 'Player 2 Won!';
    }
}
document.querySelector('.btn').addEventListener('click',main);