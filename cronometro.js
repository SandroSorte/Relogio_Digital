let hr = 00
let min = 00
let seg = 00
let interval

function start(){
    interval = setInterval(ponteiro,1000)
}
function pause(){
    interval = setInterval(cronometro,1000)
}
function stop(){
    interval = setInterval(cronometro,1000)
}
function ponteiro(){
    seg++
    document.querySelector('.crono').textContent = seg
}