function horaatual(){
  let hora = window.document.querySelector("p.hr")
  let minutos = window.document.querySelector("p.min")
  let segundos = window.document.querySelector("p.seg")

  let diaatual = new Date()
  let hr = diaatual.getHours()
  let min = diaatual.getMinutes()
  let seg = diaatual.getSeconds()

  hora.innerHTML = ver(hr)
  minutos.innerHTML = ver(min)
  segundos.innerHTML = ver(seg)
}

setInterval(horaatual,100)

function ver(numero){
  if(numero < 10){
    return "0" + numero
  }else{
    return numero
  }
}