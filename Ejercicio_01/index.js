const $btnGuardar = document.getElementById('btn-task'),
      $list = document.getElementById("list"),
      $inputTask = document.getElementById("task");

let tasks = [{
    id: 1,
    title: 'First task'
}];

const getTasks=()=>{
    if(tasks.length){
        $list.innerHTML = ``;
        tasks.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `<p>${el.title}</p>
            <button id="delete-task" data-id="${el.id}" class="delete-task">Eliminar</button>`;
            $li.classList.add("items");
            $list.appendChild($li);
        });
    }else $list.innerHTML = `<h4>No hay tareas pendientes</h4>`
}

const saveTask=()=>{
    const task = {
        id: new Date().getTime(),
        title: $inputTask.value
    }

    tasks.push(task);
    $inputTask.value = "";
    getTasks();
}

const deleteTask =(id)=>{
    console.log(id);
    let newTask = [];
    newTask = tasks.filter(el=> parseInt(el.id) !== parseInt(id));
    console.log(newTask);
    tasks = newTask;
    getTasks();
}

document.addEventListener("DOMContentLoaded", (e)=> getTasks());
document.addEventListener("click", (e)=> {
    if(e.target === $btnGuardar) saveTask();
    if(e.target.matches("#delete-task")) deleteTask(e.target.dataset.id);
});
