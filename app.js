
// Mostrar section coluna 01
const coluna01 = document.getElementsByClassName('coluna1')[0]
async function col1(){
    coluna01.innerHTML = `<section class="coluna1">
    <img class="logo" src="assets/logott.png" alt="">


    <div class="item-col1">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-hash" viewBox="0 0 16 16">
            <path
                d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
        </svg>
        <span id="expl">Explorar</span>
    </div>

    <div class="item-col1">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
            <path
                d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
        </svg>
        <p>Configurações</p>
    </div>
</section>`
}
col1()

// EVENTO MOUSE : LIKE
document.querySelector('.like').addEventListener('mouseover',()=>{
    document.querySelector('.like').style.color = 'red';
})
document.querySelector('.like').addEventListener('mouseout',()=>{
    document.querySelector('.like').style.color = 'black';
})

document.querySelector('.like3').addEventListener('mouseover',()=>{
    document.querySelector('.like3').style.color = 'red';
})
document.querySelector('.like3').addEventListener('mouseout',()=>{
    document.querySelector('.like3').style.color = 'black';
})

document.querySelector('.like5').addEventListener('mouseover',()=>{
    document.querySelector('.like5').style.color = 'red';
})
document.querySelector('.like5').addEventListener('mouseout',()=>{
    document.querySelector('.like5').style.color = 'black';
})

document.querySelector('.like7').addEventListener('mouseover',()=>{
    document.querySelector('.like7').style.color = 'red';
})
document.querySelector('.like7').addEventListener('mouseout',()=>{
    document.querySelector('.like7').style.color = 'black';
})


// MODAL

var modal = document.getElementById('myModal'); // Obtem o modal

var btn = document.getElementById('myBtn'); // Obtem o botao que abre o modal

var span = document.getElementsByClassName('close')[0]; // Obtém o elemento <span> que fecha o modal

// quando o usuario clicar no botao, abre o modal
btn.onclick = function(){
    modal.style.display = "block";

}

// quando o usuario clicar no <span> (x), frecha o modal
span.onclick = function(){
    modal.style.display = "none";

}

// quando o usuario clicar fora do modal, fecha o modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
