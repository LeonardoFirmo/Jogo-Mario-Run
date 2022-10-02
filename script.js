const introMusic = new Audio ('./assets/audio/theme.mp3')
const marioPuloSong = new Audio ('./assets/audio/pulo.mp3')
const gameOverSong = new Audio ('./assets/audio/gameOver.mp3')

const gameBoard = document.querySelector('.game-board')
const gameOver = document.querySelector('.gameOver')
const iniciargame = document.querySelector('.iniciargame')
const tubo = document.querySelector('.tubo')
const mario = document.querySelector('.mario')

const verificaTeclado=document.addEventListener('keydown',addClassJump)

function iniciaJogo(){
    introMusic.play()
    introMusic.volume=0.3
    marioPuloSong.volume=0.3
    iniciargame.style.display='none'
    gameBoard.style.display = 'flex'
    gameOver.style.display='flex'
    verificaDerrota()
    
    setTimeout(() => {
        
        const verificaClickCel=document.addEventListener('click',addClassJump)
    }, 200);

}

function addClassJump (){
    
    

    if(!mario.classList.contains('jump')){
    
        marioPuloSong.play()
        mario.classList.add('jump')
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 810);
       
    }

   
}


function verificaDerrota (){
    setInterval(() => {
        const marioAlturaPulo = +window.getComputedStyle(mario).bottom.replace('px','')
        const tuboAltura = +window.getComputedStyle(tubo).height.replace('px','')
        const tuboPosition =  tubo.offsetLeft
        
        if(tuboPosition < 39 && marioAlturaPulo < tuboAltura){
            console.log('é menor que 39');
            mario.src="./assets/img/game-over.png"
            introMusic.pause()
            chamaGameOver()
        }
        
    }, 50);
    
  
}




function chamaGameOver(){
    gameOverSong.play()
    gameOverSong.volume=0.3
    marioPuloSong.volume=0
    clearInterval(verificaDerrota)
    tubo.style.animation = 'none'
    mario.style.animation = 'none'
    tubo.classList.add('tuboDerrota')

    
    setTimeout(() => {
        gameBoard.classList.add('fimDeJogo')

        setTimeout(() => {
           
            
            gameOver.innerHTML=
            `<div style="display: flex;flex-direction:column;justify-items:center;">
                <h2>GAME OVER</h2><br>
                <button class="jogarNovamente" style="height:80px; width:150px;margin:0 auto;">
                <a href="./index.html">JOGAR NOVAMENTE</a>
                </button>
            </div>`
            // const jogarNovamente = document.querySelector('.jogarNovamente')
            // jogarNovamente.addEventListener('click',resetaJogo)
            
        }, 6000);
    }, 150);

   

}

