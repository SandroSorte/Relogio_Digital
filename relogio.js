let horario = document.querySelector(".timer")


const relogio = ()=>{
    const data = new Date()

    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    horario.textContent = hora + ":" + minutos + ":" + segundos
    setInterval(relogio,1000)
}
relogio()