const $listAnime = document.getElementById('anime-list'),
      $loader = document.getElementById('loader');

const getData = async()=>{
    try{
        const res = await fetch('https://api.jikan.moe/v4/anime'),
              json = await res.json();
        json.data.forEach(element => {
            const $div = document.createElement('div');
            $div.classList.add('card');
            $div.innerHTML = `
                <img src="${element.images.jpg.image_url}" alt="${element.titles[0].title}" />
                <h3>${element.titles[0].title}</h3>
                <p>${element.synopsis}</p>
                <h4>💎Rankin: ${element.rank}</h4>
                <h4>⭐Score: ${element.score}</h4>
            `;
            $listAnime.appendChild($div);
        });
    }
    catch(err){
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", (e)=>{
    $listAnime.style.display = 'none';
    $loader.style.display = 'block';
    setTimeout(()=>{
        getData();
        $listAnime.style.display = 'grid';
        $loader.style.display = 'none';
    }, 3000);
});