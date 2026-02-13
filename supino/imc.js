const calcular =document.getElementById('calcular');

function supino(){

    const nome = document.getElementById('nome').value;
    const tempo = document.getElementById('tempo').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    

    if(nome !==''&& tempo !==''&& peso !==''){

        const pontossupino=((tempo*peso)/2).toFixed(1);

        let classificacao = '';

        if(pontossupino <10){
            classificacao = 'iniciante';

        }else if(pontossupino <=20){
            classificacao = 'media';
        }else if(pontossupino <=30){
            classificacao = 'intermediario';
        }else if(pontossupino <=40){
            classificacao = 'avançado';
        }else if(pontossupino <=50){
            classificacao = 'lenda';
        }else if (pontossupino <=200) {
            classificacao = 'lenda';
        }
        else{
            classificacao = 'RONNIE COLLEMAN';
        }

        resultado.textContent = `${nome} sua pontuação no supino é ${pontossupino}, seu nivel de supino é ${classificacao}`

    }
    

    else{
        resultado.textContent = 'Preencha TODOS os campos';
    }

}
calcular.addEventListener('click',supino)