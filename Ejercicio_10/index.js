const $modal = document.getElementById('modal'),
      $btnCloseModal = document.getElementById('btn-close'),
      $list = document.getElementById('list'),
      $profile = document.getElementById('profile');

const friends = [
    {
        id: 1,
        avatar: './img/logo.jpg',
        name: 'Luis Angel',
        lastname: 'Fernandez',
        phone: '000-000-0000',
        email: 'luisangel123@gmail.com',
        birthday: '11-11-2003'
    },
    {
        id: 2,
        avatar: './img/images.jpg',
        name: 'Steve',
        lastname: 'James',
        phone: '000-000-0000',
        email: 'steve123@gmail.com',
        birthday: '01-01-2000'
    },
    {
        id: 3,
        avatar: './img/avatar.jpg',
        name: 'Elizabeth',
        lastname: 'Abreu',
        phone: '000-000-0000',
        email: 'elizabethabreu@gmail.com',
        birthday: '10-12-1998'
    }
]

const generateItems =()=>{
    friends.forEach(element=>{
        const $li = document.createElement('li');
        $li.classList.add('user');
        $li.dataset.id = element.id;
        $li.innerHTML = `
        <img src="${element.avatar}" alt="${element.name}"/>
        <p>${element.name} ${element.lastname}</p>
        `;
        $list.appendChild($li);
    });
}

const openModal =()=>
    $modal.style.display = 'flex';

const closeModal =()=>  
    $modal.style.display = 'none';

const getAge =(birthday)=>{
    const dateB = new Date(birthday);
    const today = new Date();
    const age = Math.floor((today.getTime() - dateB.getTime()) / (1000 * 60 * 60 * 24 * 365));
    return age;
}

const findProfile =(id)=>{
    const user = friends.find(el=> el.id === parseInt(id));
    $profile.innerHTML = `
        <img src="${user.avatar}" alt="${user.name}"/>
        <h4>Nombres:${user.name} ${user.lastname}</h4>
        <h4>E-mail: ${user.email}</h4>
        <h4>Telefono: ${user.phone}</h4>
        <h4>Fecha de Nacimiento: ${user.birthday}</h4>
        <h4>Edad: ${getAge(user.birthday)}</h4>    
    `;
    getAge();
}

document.addEventListener("DOMContentLoaded", (e)=> generateItems());

document.addEventListener("click", (e)=>{
    if(e.target === $btnCloseModal) closeModal();
    if(e.target.matches('.user')){
        openModal();
        findProfile(e.target.dataset.id)
    }
});