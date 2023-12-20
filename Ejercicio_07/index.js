const $formData = document.getElementById('data'),
      $graphicContainer = document.querySelector('.graphic');

const data = [];

const addToGraphic = ()=>{
    const newBar = {
        title: $formData.title.value,
        value: $formData.points.value
    }
    data.push(newBar);
    loadData();
    clearData();
}

const clearData =()=>{
    $formData.title.value = '';
    $formData.points.value = '';
}

const loadData = ()=>{
    $graphicContainer.innerHTML = '';
    data.forEach(element =>{
        const $div = document.createElement('div');
        $div.innerHTML = `
        <p>${element.value}<p>
        <div class="bar" style="height:${element.value}px"></div>
        <p>${element.title}</p>
        `;
        $div.classList.add('bar-container');
        $graphicContainer.appendChild($div);
    });
}

document.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(e.target === $formData) addToGraphic();
});