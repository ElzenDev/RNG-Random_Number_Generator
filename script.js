//                ***FUNÇÕES***

function contar(){

    //      ** VARIAVEIS **
    var maxR = document.getElementById('max_range')
    var nMax = Number(maxR.value)

    var minR = document.getElementById('min_range')
    var nMin = Number(minR.value)
    
    var btn = document.getElementById('button')

    var res = document.getElementById('res')


    var sorteio = Math.floor(Math.random() * (nMax - nMin) + nMin); // CALCULO DO NUMERO

    
    res.innerHTML = 'O resultado é   ' + sorteio

//     **Verificações pós contagem**

    if(res.innerHTML = 'O resultado é: ' + sorteio){
        btn.value = 'Resortear'
    }

    if(btn.value = 'Resortear'){
        btn.addEventListener('click', function(){
            res.innerHTML = 'O resultado é: ' + sorteio 
            
        })
    }
    //console.log(sorteio)
    

    return Number(res)
    
}