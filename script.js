const section_one = document.getElementById('section-one')
const section_two = document.getElementById('section-two')
const section_three = document.getElementById('section-three')

const btn_anterior = document.getElementById('btn-anterior')
const btn_iniciar = document.getElementById('btn-iniciar')
const btn_siguiente = document.getElementById('btn-siguiente')

const btn_anterior_2 = document.getElementById('s2-btn-anterior')
const btn_iniciar_2 = document.getElementById('s2-btn-iniciar')
const btn_siguiente_2 = document.getElementById('s2-btn-siguiente')

const btn_anterior_3 = document.getElementById('s3-btn-anterior')
const btn_iniciar_3 = document.getElementById('s3-btn-iniciar')
const btn_siguiente_3 = document.getElementById('s3-btn-siguiente')


iniciar()

function iniciar() {
    btn_anterior.disabled = true; 
}

btn_siguiente.addEventListener('click', ()=>{
    console.log('Presionó el botón siguiente');
    section_one.style.display = 'none';
    section_two.style.display = 'flex';
    section_three.style.display = 'none';
})

btn_iniciar.onclick = function() {
    
}

btn_anterior_2.addEventListener('click', ()=>{
    console.log('Presionó el botón siguiente');
    section_two.style.display = 'none'; 
    section_three.style.display = 'flex';
}) 