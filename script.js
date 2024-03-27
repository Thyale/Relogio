function horaatual(){
  let hora = window.document.querySelector("p.hr")
  let minutos = window.document.querySelector("p.min")
  let segundos = window.document.querySelector("p.seg")

  let diaatual = new Date()
  let hr = diaatual.getHours()
  let min = diaatual.getMinutes()
  let seg = diaatual.getSeconds()

  hora.innerHTML = hr
  minutos.innerHTML = min
  segundos.innerHTML = seg
}

setInterval(horaatual,100)