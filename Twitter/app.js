
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
