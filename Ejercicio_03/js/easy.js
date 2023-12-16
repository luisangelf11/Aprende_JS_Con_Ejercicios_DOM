const $warning = document.getElementById('warning'),
      $validate = document.getElementById('validate'),
      $data = document.getElementById('data'),
      $modal = document.getElementById('modal'),
      $points = document.getElementById('pts'),
      $ptsLabel = document.getElementById('pts-label');

let pts = 0,
    valueRandom = 0;

const generateValueRandom = (min, max)=>
    valueRandom = Math.floor(Math.random() * (max - min) + min);

const openModal = ()=>{
    $modal.style.display = 'flex';
    $points.textContent = 'Cantidad de intentos: ' + pts;
}

const validateData = ()=>{
    pts++;
    if(parseInt($data.value) === valueRandom) openModal();
    else if(valueRandom < parseInt($data.value)) $warning.textContent = "El número es menor al ingresado"
    else if(valueRandom > parseInt($data.value)) $warning.textContent = "El número es mayor al ingresado"
    $ptsLabel.textContent = pts;
}

document.addEventListener("DOMContentLoaded", (e)=>{
    generateValueRandom(0, 100);
    console.log(valueRandom)
})

document.addEventListener("click", (e)=>{
    if(e.target === $validate) validateData();
});
