// manipular tags e elementos de aqruivo,atribuo a seleçaõ , dentro do meu bdy,tds as informaç~es vao estar dentro dessa constante
//  . classes
// #ids
// nome elemento
// div h1=>eemnto dentrop de outro eemento(o primeiro que ele encontrar)
// querySelectorAll=>seleciona todos os elementos com aquela caracteristica e coloca dentro de um array  
const body = document.querySelector('body')
// selecionando o game , que é uma div que contem a graminha
const game = document.querySelector('.game')

const count = document.querySelector('h1')
const reset = document.querySelector('#reset')

const ash = document.querySelector('#ash')

const charmander = document.querySelector('#charmander')
const pikachu = document.querySelector('#pikachu')
const zubat = document.querySelector('#zubat')

//e quando eu encontrar , colocar que fopram encontrados,verifico o pokemon, antes de mostrar , verifico que ja ou encontrado
// criar 3 lets , para pegar os bichinhos e assim , eles mecerem tambem 
let findCharmander = false
let findPikachu = false
let findZubat = false

const audio = document.querySelector('audio')
audio.volume = 0.1


const musicControl = document.querySelector('.music-control')
// quando clicar , fazer as coisas axcontecerem no audio

musicControl.addEventListener('click', (event) => {
    event.stopPropagation()
    // paraq eu nn fique clicando em elementos que nn deseja

    event.target.src = `${event.target.src}`.includes('on.png')
        ? '../assets/icons/off.png'
        : '../assets/icons/on.png';
    // se não tem o on.png , eu passo esse caminho :?'..assets, agor se tiver o on , eu faço outra vaidação para ele :
    // Verificar oq tem dentro escrito .verificando se o texto que esta aqui dentro,por exemplo dentro do meu scr tem o off.png

    // pegando meu elemento que foi clicado , e pego o evento dele ,pego tds as informações que pega dentro dele , valor , texto ,imagem ,aq alterando o src
    // Se dentro da propriedade events.target.src tem o on ai eu coloco off , trooco o icone de audio ou sem audio
    // Se for on o envento , eu faço meu audio apertar o paly

    `${event.target.src}`.includes('on.png') ? audio.play() : audio.pause();
});


// function getRightPosition(){
//     // retornar a posição atual,pego a posição qeu tem o nosso bonec na tela aonde tem split eu qr dar u px na tela, caso não tenha nada , ele retorna
// isso vai fazer comq ue o nossoboneco ander
//     return =  parseInt(ash.style.right.split("px"))||2

// }
// function getTopPosition(){
//     console.log(ash.style.top)
// }
// function verifyLookPokemon(){
//     if(getTopPosition()>=2 &&
//     // verifica se meu ash esta a 2px do topo e menos que 98
//      getTopPosition()<=98 &&
// o topo tem que ser maior que 2 e menor qu 98
//     //  Se ele esta a menos de 130px para a esquerda ou menos 216
//       getRightPosition()>=130 &&
//        getRightPosition<= 216 ){
//         // Aqui eu sei que estou encontrando um charmander
// verifico se ash esta 2px do topo e menos que 98 , se sesta a 130px da esquerda e menos que 216
//        }, dentro de um ponto especifico aqui , ele vai encontarro charmander
// }
// Aqui temos 3 ifs , um para cada personagem , consigo pegar as condições , pora saber onde o ash pasa para pega 



// controle e movimentar o ash , quando eu clicar nas minhas teclas de controle 
// vou adicionar para ouvir um elemento que é o keydown,eventos que eu posso observar , e cada um faz algo quando meu usurio interagir
// quando digitar algo :keydown , pois quando apertar ja qr ouvir
// passo o eventoq eu eu qr , e depois eu passo uma função de call back
// crio um evento , que vai observ ar o keydown e que por padrao ja recebe o evento
// assim eu ja estou observando as minhas teclas , e sao elas que vao movimentar o meu personagem na teal
// Vou tomar decisoes para cada tecla que foi selecionada 



// body.addEventListener('keydown',(event)=>{
//     // para pegar o evento somento no lugar que eu cliquei eu coloco o stoppropagation
//     event.stopPropagation()

//     // ash virar na tela , precisamdo movmentar , pego a posição atual da direita e para cima

//     switch(event.code){
//         // se for ArrowLeft , vou tomar uma decisao
//         // getrightPosition()
//         // getTopPosition()
//         // aqui eu estou manipulando a distancia que ele tem da minha borda
//         // Aqui o ash vai vir mais para o lado esquerdo e mais para baixo com a borda,posso ir encrementando esse 30px para ele ir se afastando das brdas

//         // ash.style.right='30px'
//         // ash.style.top='30px'

//         case 'ArrowLeft':
//             // Ao aperatr no top , ele vai realizar as daus funções,manipulando de dentro do ash o estilo right e top

//              o if aqui , vai fazer com que ele nn pase do quadrdo que eu qr q ele ande

//             // Como eu qr q ele ande de 8 e 8 px eu colocvo o + 8 , mas ele sai do gramado e preciso fazer a validação.Não pode passar de 160px para direia
//             ash.style.right=`${getRightPosition()+8}px`
//             ash.src='../assets/left.png'
//             getRightPosition()
//             // pego o ash que ja havia colocado em cima , seleciono para mudar a imagem para esquerda 


//         break
//         case 'ArrowRight':
//             ash.src='../assets/right.png'
//         break
//         case 'ArrowDown':
//             ash.src='../assets/front.png'


//         break
//         case 'ArrowUp':
//             ash.src='../assets/back.png'

//         break

//         default:
//         break
//     }
// })

// Criar estrutura de decisão 
// fazer andar p frenet , baixo , lafi e cima e ativa o som , agora encontrar os pockemons
// Criar a função para chaar o tempo,coloco o set interval e coloco o intervalo de tempo que eu qr q isso aconteca

reset.addEventListener('click', () => {
    window.location.reload()
    // vai dar como se fosse um f5.E esconde o elemento novamente
    reset.style = 'none'
})


function clearCharacters() {
    ash.style.display = 'none'
    pikachu.style.display = 'none'
    charmander.style.display = 'none'
    zubat.style.display = 'none'

    // qr que mostre o reset 

    reset.style.display = 'block'
    count.textContent = ''
    // vazio pois irei zerar, cahmo ele no setInterval , pois quando acabar , eu qr que ele zere meu jogo

}

let currentcount = 60
// mostra o botao de reestarr , quando encontra e consegue voltar 

const interval = setInterval(() => {
    if (currentcount <= 0) {
        game.style.backgroundImage = "url('../assets/game-over.jpg')"

        clearCharacters()
        clearInterval(interval)
        return
        // coloco o return para nn aparecer o numero de tempo ali
    }
    currentcount--
    // vai subtraindo os números,faz a contagem , e ostar a tela de game over
    count.textContent = currentcount
}, 1000)

// depois eu realizo uma função para limpar os pokemos na frente do game over

// Finalizar o game , quando o ash achar tds os pokemons , dizer que foi vencedor

function finishGame() {
    if (findCharmander && findPikachu && findZubat) {
        // se eu ja encontrei tds , nn igualei , pois é true
        clearCharacters()//tds saem da tela

        const timeOut = setTimeout(() => {
            game.style.backgroundImage = "url('../assets/winner.jpg')"
            clearInterval(interval)
            cleartimeOut(interval)
            // paerrar de fazer validação qnd o game for finalizado

            audio.pause


        }, 400)


    }
}





function getRightPosition() {
    // retornar a posição atual,pego a posição qeu tem o nosso bonec na tela aonde tem split eu qr dar u px na tela, caso não tenha nada , ele retorna

    return parseInt(ash.style.right.split("px")) || 2

}
function getTopPosition() {
    return parseInt(ash.style.top.split('px')) || 2
}
// dentro dele , vamos ter 3 ifs para ver a distancia que o ash tem que passar por cima para revelar esse pokemon



// function verifyLookPokemon(){
//     if(getTopPosition()>=2 &&
//     // verifica se meu ash esta a 2px do topo e menos que 98
//      getTopPosition()<=98 &&
//     //  Se ele esta a menos de 130px para a esquerda ou menos 216
//       getRightPosition()>=130 &&
//        getRightPosition<= 216 
//     ){
//         charmander.style.display='block'
//         return
//     }
//     //    para testar , no final do sqwtch eu coloco essa função
// }criar funcionalidades para os bihso seguirem 
// o to é para onde, pois se ficar seguindo o ash fixo , ele segue o ash taticamente , ete  que ficar sempre atrs,tem que saber de onde o ash esta vindo
// se o ah a direita , coloco ele atras, vai p esquera , tmb fica atras
// Se ele estuiver andando para a esquerda , eu quero pegar a posição do ash paar direita e tirar 64 px para o pokemon ficar atras dele , agora se for o contrário eu faço o ao contrario o pokemon tem 64 px para a direita

function verifyLookPokemon(to) {
    // se o to for igal a arrow left ,vou fazer , eu cvou pegar o getRightPosition do ash - 64


    finishGame()
    // toda vez que eu encontrar um pokemon, eu verifico se ele encontrou os 3, dou um clear , espero 400mg, para io game finalizar em menos de 1 seg

    const pokemonRightPosition = to === 'ArrowLeft'
        ? `${getRightPosition() - 64}px`
        : `${getRightPosition() + 64}px`

    if (findCharmander) {
        // verifico se o meuTo é igual a arrow up , meu posição precisa segui em cima na arte de baixo e decendo em cima

        const newTopPosition = to === 'ArrowUp'
            ? `${getTopPosition() + 8}px`
            // Posiçaõ do ash mais 8px para cima , se não eu faço o inverso eu quero que ele fique na parte de baixo do ash
            // Se ele tiver subuindo eu qr q ele fique em baixo e se ele tiver descendo eu qr q ele fiqeu em cima 
            : `${getTopPosition() - 8}px`

        charmander.style.right = pokemonRightPosition
        charmander.style.top = newTopPosition
    }



    if (findPikachu) {
        // verifico se o meuTo é igual a arrow up , meu posição precisa segui em cima na arte de baixo e decendo em cima

        const newTopPosition = to === 'ArrowUp'
            ? `${getTopPosition() + 36}px`
            // Posiçaõ do ash mais 8px para cima , se não eu faço o inverso eu quero que ele fique na parte de baixo do ash
            // Se ele tiver subuindo eu qr q ele fique em baixo e se ele tiver descendo eu qr q ele fiqeu em cima 
            : `${getTopPosition() - 36}px`

        pikachu.style.right = pokemonRightPosition
        pikachu.style.top = newTopPosition
    }


    if (findZubat) {
        // verifico se o meuTo é igual a arrow up , meu posição precisa segui em cima na arte de baixo e decendo em cima

        const newTopPosition = to === 'ArrowUp'
            ? `${getTopPosition() + 72}px`
            // Posiçaõ do ash mais 8px para cima , se não eu faço o inverso eu quero que ele fique na parte de baixo do ash
            // Se ele tiver subuindo eu qr q ele fique em baixo e se ele tiver descendo eu qr q ele fiqeu em cima 
            : `${getTopPosition() - 72}px`

        zubat.style.right = pokemonRightPosition
        zubat.style.top = newTopPosition
    }


    if (
        getTopPosition() >= 2 &&
        getTopPosition() <= 98 &&
        getRightPosition() >= 130 &&
        getRightPosition() <= 216 // Aqui estava faltando parênteses no getRightPosition()
    ) {
        // Agora só aparece se a condição for verdadeira
        charmander.style.display = 'block';
        findCharmander = true
        return;
    }
    if (
        getTopPosition() >= 474 &&
        getTopPosition() <= 594 &&
        getRightPosition() <= 138 &&//teste para ver onde eu vou pegar esses pokemons
        getRightPosition() >= 42 // Aqui estava faltando parênteses no getRightPosition()
    ) {
        // Agora só aparece se a condição for verdadeira
        zubat.style.display = 'block';
        findZubat = true
        return;
    }
    if (
        getTopPosition() >= 266 &&
        getTopPosition() <= 394 &&
        getRightPosition() >= 546 &&//teste para ver onde eu vou pegar esses pokemons
        getRightPosition() <= 650 // Aqui estava faltando parênteses no getRightPosition()
    ) {
        // Agora só aparece se a condição for verdadeira
        pikachu.style.display = 'block';
        findPikachu = true
        return;
    }
}



body.addEventListener('keydown', (event) => {

    event.stopPropagation()


    switch (event.code) {

        case 'ArrowLeft':

            if (getRightPosition() < 770) {
                ash.style.right = `${getRightPosition() + 8}px`
                ash.src = '../assets/left.png'
                getRightPosition()
            }
            // aqui eu aumento a distancia para o lado direiro



            break
        case 'ArrowRight':
            // se ele for maior do que 2 , ele faz isso , para nn estourar e aqui eu dimiuo 8px
            if (getRightPosition() > 2) {
                ash.style.right = `${getRightPosition() - 8}px`
                ash.src = '../assets/right.png'
                getRightPosition()
            }

            break
        case 'ArrowDown':
            if (getTopPosition() < 625) {
                ash.style.top = `${getTopPosition() + 8}px`
                ash.src = '../assets/front.png'
                getTopPosition()

            }


            break
        case 'ArrowUp':
            if (getTopPosition() > 2) {
                ash.style.top = `${getTopPosition() - 8}px`
                ash.src = '../assets/back.png'
                getTopPosition()

            }


            break

        default:
            break
    }
    verifyLookPokemon(event.code)
})
