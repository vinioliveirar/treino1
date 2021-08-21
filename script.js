function Verificar(){
    var name = document.getElementById('txtnome')
    var snome = document.getElementById('txtsnome')
    var pais = document.getElementById('txtpais')
    var res = document.getElementById('res')
    
    
    var vel = String(txtpais.value)
    var velN = String(txtnome.value)

    if (name.value.length < 3 ){
        alert('Por favor verifique se o Nome está correto!')
    }
    else if (snome.value.length < 4){
        alert('Por favor verifique os Sobrenome está correto')
    }else if(pais.value.length < 3){
        alert('Por favor verifique sua nascionalidade')
    } else {
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        var paisp = ''
    }
    if (fsex[0].checked){
        gênero = 'Homem'
    } else(fsex[1].checked)
        gênero ='Mulher'
    

    if(String(pais.value) == 'Brasil'){
    res.innerHTML = `Olá ${velN}, verificamos que voce é Brasileiro `
    }else(
        res.innerHTML = `Olá ${velN}, verificamos que você é estrangeiro`
    )
}
    


    