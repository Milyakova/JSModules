import './switch.js'
import {screens}  from './switch.js'

const deviceList = document.querySelector('#device-list');

deviceList.addEventListener('click', (event)=>{
    event.preventDefault();
    let num = parseInt(event.target.getAttribute('data-num'));
    for (let i = 0; i <= num; i++) {
        screens[i].classList.add('up')
        
    }
})


