const $modal = document.getElementById('modal'),
    $btnCloseModal = document.getElementById('btn-close'),
    $minutes = document.getElementById('minutes'),
    $textTime = document.getElementById('text-time'),
    $btnStart = document.getElementById('start');

const openModal = () =>
    $modal.style.display = 'flex';

const closeModal = () =>
    $modal.style.display = 'none';

const startTime = () => {
    //Variables principales
    let minutes = parseInt($minutes.value);
    let seconds = minutes * 60;

    //Contador
    let timeRun = setInterval(() => {
        let minutesRest = Math.floor(seconds / 60);
        let secondsRest = seconds % 60;
        let hoursRest = Math.floor((seconds / 60) / 60);

        //Validar mins > a 59
        if (minutesRest > 59) {
            let minutesConvert = minutesRest - 60;
            $textTime.textContent = `${hoursRest >= 10 ? hoursRest : "0" + hoursRest}:${minutesConvert >= 10 ? minutesConvert : "0" + minutesConvert}:${secondsRest >= 10 ? secondsRest : "0" + secondsRest}`;
        } else $textTime.textContent = `${hoursRest >= 10 ? hoursRest : "0" + hoursRest}:${minutesRest >= 10 ? minutesRest : "0" + minutesRest}:${secondsRest >= 10 ? secondsRest : "0" + secondsRest}`;

        //Comprobar tiempo
        if(seconds === 0){
            clearInterval(timeRun);
            openModal();
            $minutes.value = "";
            $textTime.textContent = "00:00:00";
        }else seconds --;
    }, 1000);
}

document.addEventListener("click", (e)=>{
    if(e.target === $btnStart) startTime();
    if(e.target === $btnCloseModal) closeModal();
});