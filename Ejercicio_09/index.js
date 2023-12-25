const $profile = document.getElementById('profile'),
    $stats = document.getElementById('stats'),
    $noPokedex = document.getElementById('noPokedex'),
    $btnFind = document.getElementById('find');

const colorType = (type) => {
    if (type === 'steel') return '#60A1B8';
    else if (type === 'water') return '#2980EF';
    else if (type === 'bug') return '#91A119';
    else if (type === 'dragon') return '#5061E1';
    else if (type === 'electric') return '#FAC000';
    else if (type === 'ghost') return '#704170';
    else if (type === 'fire') return '#E62829';
    else if (type === 'fairy') return '#F170F1';
    else if (type === 'ice') return '#7CD3FF';
    else if (type === 'fighting') return '#FF8000';
    else if (type === 'normal') return '#9FA19F';
    else if (type === 'grass') return '#3FA129';
    else if (type === 'psychic') return '#F14179';
    else if (type === 'rock') return '#AFA981';
    else if (type === 'dark') return '#50413F';
    else if (type === 'ground') return '#915121';
    else if (type === 'poison') return '#9141CB';
    else if (type === 'flying') return '#81B9EF';
}

const getData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
            json = await res.json();
        //Limpiar contendores
        $profile.innerHTML = '';
        $stats.innerHTML = '';

        //Apartado de el perfil
        const $image = document.createElement('img');
        $image.src = json.sprites.other.home.front_default !== null ? json.sprites.other.home.front_default : json.sprites.front_default;
        $image.alt = json.name;
        $profile.appendChild($image);
        const $name = document.createElement('h4');
        $name.textContent = `#${id} ~ ${json.name}`;
        $profile.appendChild($name);
        //Agregando tipos
        json.types.forEach(element => {
            const $typeBox = document.createElement('div');
            $typeBox.classList.add('typeBox');
            $typeBox.style.backgroundColor = colorType(element.type.name);
            $typeBox.innerHTML = `<p>${element.type.name}</p>`;
            $profile.appendChild($typeBox);
        });

        //Apartado de los Stats
        const $titleStat = document.createElement('h3');
        $titleStat.textContent = "Estadisticas base";
        $titleStat.classList.add('titleStat');
        $stats.appendChild($titleStat);
        //Agregar barra de los stats
        json.stats.forEach(element => {
            const $containerStat = document.createElement('div');
            $containerStat.classList.add('container-stat');
            $containerStat.innerHTML = `
            <h4>${element.stat.name}</h4>
            <div class="bar-stat" style="width: ${element.base_stat}px;"></div>
            <h4>${element.base_stat}</h4>
            `;
            $stats.appendChild($containerStat);
        });

        //Limpiar el input
        $noPokedex.value = '';
    }
    catch (err) {
        console.error(err);
    }
}

document.addEventListener('click', (e) => {
    if (e.target === $btnFind) getData($noPokedex.value);
})