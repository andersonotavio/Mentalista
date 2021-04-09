
var numSecret = parseInt(Math.random() * (10 - 1 + 1) + 1)
var tentativas = 3
var res = document.getElementById('res')


function tentar(){
 while(tentativas > 0){
    num = parseInt(prompt('Digite um numero'))
    
    if(num == numSecret){
        alert(`Você acertou o numero secreto é ${numSecret}`)
        break
    }else if( numSecret > num){
        alert('O numero secreto é maior')
        tentativas -= 1
    }else if( numSecret < num){
        alert('O numero secreto é menor')
        tentativas -= 1
    }
    if(tentativas == 0){
        res.innerHTML = `Acabaram suas tentativas o numero secreto era ${numSecret}`
    }

    }
}
