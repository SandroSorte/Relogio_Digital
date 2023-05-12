let horario = document.querySelector(".timer")
let agora = document.querySelector(".tempo")


const relogio = () => {
    const data = new Date()
    let hr = data.getHours()
    hr = hr < 10 ? "0" + hr : hr
    let min = data.getMinutes()
    min = min < 10 ? "0" + min : min
    let seg = data.getSeconds()
    seg = seg < 10 ? "0" + seg : seg

    horario.textContent = hr + ":" + min + ":" + seg
    setInterval(relogio, 1000)
}
const calendario = () => {
    const hoje = new Date()
    let semana = hoje.getDay()

    let dia = hoje.getDate()
    dia = dia < 10 ? "0" + dia : dia
    let mes = hoje.getMonth() + 1
    mes = mes < 10 ? "0" + mes : mes
    let ano = hoje.getFullYear()

    switch (semana) {
        case 0:
            semana = 'Dom'
            break
        case 1:
            semana = 'Seg'
            break
        case 3:
            semana = 'Ter'
            break
        case 4:
            semana = 'Qua'
            break
        case 5:
            semana = 'Qui'
            break
        case 6:
            semana = 'Sex'
            break
        case 7:
            semana = 'Sab'
    }

    agora.textContent = semana + " " + dia + "/" + mes + "/" + ano

}
relogio()
calendario()