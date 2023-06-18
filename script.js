
const chk = document.getElementById('chk')
const ger = document.getElementById('gerador')
const ball = document.getElementById('ball')
const label = document.getElementById('label')
const button = document.getElementById('Sortear')
let btn = document.getElementById('button')
let res = document.getElementById('res')

chk.addEventListener('change', ()=> {
    document.body.classList.toggle('dark')
    ger.classList.toggle('dark')
    ball.classList.toggle('dark')
    label.classList.toggle('dark')
    btn.classList.toggle('dark')
    res.classList.toggle('dark')
})

//                **SORTEIO DE NÚMEROS***

function sortear(){

    //      ** VARIAVEIS **
    var maxR = document.getElementById('max_range')
    var nMax = Number(maxR.value)

    var minR = document.getElementById('min_range')
    var nMin = Number(minR.value)

    if(nMax > nMin){
        var sorteio = Math.floor(Math.random() * ((nMax + 1) - nMin) + nMin ); // CALCULO DO NUMERO

    
        res.innerHTML = sorteio

        //     **Verificações pós contagem**

        if(res.innerHTML = sorteio){
            btn.value = 'Resortear'
        }

        if(btn.value = 'Resortear'){
            btn.addEventListener('click', function(){
                res.innerHTML = sorteio 
                
            })
        }
        //console.log(sorteio)
        

        return Number(res)
        }

    else if(nMax < nMin){
            window.alert('[ERROR] O Valor Máximo deve ser maior do que o Valor Minímo')
        }
        
    else{
            window.alert('[ERROR] O Valores devem ser diferentes')
        }
    


    
    
}