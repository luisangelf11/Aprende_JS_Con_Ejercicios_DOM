const $modal = document.getElementById('modal'),
      $btnCloseModal = document.getElementById('btn-close'),
      $imageCard = document.getElementById('image-card');

const openModal =()=>
      $modal.style.display = 'flex';

const closeModal =()=>
      $modal.style.display = 'none';

const openImage =(src, alt)=>{
    $imageCard.src = src;
    $imageCard.alt = alt;
    openModal();
}

document.addEventListener('click', (e)=>{
    if(e.target === $btnCloseModal) closeModal();
    if(e.target.matches('#photo')) openImage(e.target.src, e.target.alt);
})