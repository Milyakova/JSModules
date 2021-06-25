
export const screens = document.querySelectorAll('.screen');
const restartBtn = document.querySelectorAll('#restart');

for (let i=1; i < screens.length; i++){
    restartBtn[i-1].addEventListener('click', ()=>{

        for (let j = 0; j < i; j++) {
            screens[j].classList.remove('up')
        }
    })
}

