const $textSegurity = document.querySelector('.segurity');

const validatePassowrd = (pass) => {
    let haveLetter = /[a-zA-Z]/.test(pass);
    let haveNumbers = /\d/.test(pass);
    let haveSymbols = /[!@#%^&*(),.?"{}|<>]/.test(pass);

    if (haveLetter && haveNumbers && haveSymbols)
        return "¡Contraseña muy segura!";
    else if ((haveNumbers && !haveLetter && !haveSymbols) || (haveLetter && !haveNumbers && !haveSymbols))
        return "Contraseña muy débil, utiliza letras y/o símbolos";
    else if ((haveLetter && haveNumbers) || (haveLetter && haveSymbols))
        return "¡Buena contraseña!";
    else
        return "Contraseña no válida. Asegúrate de tener letras y/o números."
}

document.addEventListener("input", (e)=>{
    if(e.target.matches("#password")) $textSegurity.textContent = validatePassowrd(e.target.value);
});