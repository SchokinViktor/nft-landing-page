export function navOpener(openerSelector, toggleSelector, toggleClass) {
    const navOpener = document.querySelector(openerSelector);
    const header = document.querySelector(toggleSelector);
    
    navOpener.addEventListener('click', ()=> {
        header.classList.toggle(toggleClass);
    })
} 