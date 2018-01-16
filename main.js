let luasPersegi = document.querySelector(`#squareArea`)
let kelilingPersegi = document.querySelector(`#squarePerimeter`)
let luasLingkaran = document.querySelector(`#circleArea`)
let kelilingLingkaran = document.querySelector(`#circleCircum`)
let luasKubus = document.querySelector(`#cubeArea`)
let volumeKubus = document.querySelector('#cubeVolume')

function squareArea(length) {
  length = Number(document.getElementById(`input-one`).value)
  result = Math.pow(length, 2);
  document.getElementById(`result`).innerHTML = result
}
luasPersegi.addEventListener('click', squareArea)


function squarePerimeter(length) {
  length = Number(document.getElementById(`input-one`).value)
  result = 4 * length
  document.getElementById(`result`).innerHTML = result
}
kelilingPersegi.addEventListener('click', squarePerimeter)


function circleArea(radius) {
  radius = Number(document.getElementById(`input-one`).value)
  result = Math.PI * Math.pow(r, 2)
  document.getElementById(`result`).innerHTML = result
}
luasLingkaran.addEventListener('click', circleArea)


function circleCircum(radius) {
  radius = Number(document.getElementById(`input-one`).value)
  result = 2 * Math.PI * r
  document.getElementById(`result`).innerHTML = result
}
kelilingLingkaran.addEventListener('click', circleCircum)


function cubeArea(length) {
  length = Number(document.getElementById(`input-one`).value)
  result = 6 * Math.pow(length, 2);
  document.getElementById(`result`).innerHTML = result
}
luasKubus.addEventListener('click', cubeArea)

function cubeVolume(length) {
  length = Number(document.getElementById(`input-one`).value)
  result = Math.pow(length, 3);
  document.getElementById(`result`).innerHTML = result
}
volumeKubus.addEventListener('click', cubeVolume)