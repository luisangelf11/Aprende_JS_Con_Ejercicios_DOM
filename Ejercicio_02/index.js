const $modal = document.getElementById('modal'),
      $no = document.getElementById('noButton'),
      $yes = document.getElementById('yesButton'),
      $close = document.getElementById('btn-close');

const openModal = ()=>
    $modal.style.display = 'flex';

const closeModal = ()=>
    $modal.style.display = 'none';

const changePosition = ()=>{
    $no.style.left = Math.random() * window.innerWidth + 'px';
    $no.style.top = Math.random() * window.innerHeight + 'px';
    console.log($no.style.left, $no.style.top)
}

document.addEventListener('click', (e)=>{
    if(e.target === $yes) openModal();
    if(e.target === $close) closeModal();
});

document.addEventListener("mouseover", (e)=>{
    if(e.target === $no) changePosition();
});