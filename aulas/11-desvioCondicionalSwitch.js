//Swistch Case -> estruturas de decisão usada quando queremos comparar o valor de 
//uma variavel com varios possiveis resultados.
//REGRA DO PROFCASTELLO - se tiver mais que 3 comparadores, faça um switch Case

//Exemplo 01 - MENU
//Neste exemplo a variavel menuSelecionado Guardará o nome de uma opção de menu.
//O switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente

let menuSelecionado = "Home";
switch (menuSelecionado) {
    case "Home":
        console.log("Você clicou no link 'Home'");
        break;
        case "Quem somos":
    console.log("Você clicou no link 'Quem somos'")
        break;
        case "Contato":
            console.log("Você clicou no link 'Contato'");
            break;

            case "Redes Sociais":
            console.log("Você clicou no link 'Redes Sociais'");
            break;
        
case "Pague um café":
            console.log("Você clicou no link 'Pague um café'");
            break;

            default:
        console.log("Opção incorreta, selecione uma opção no menu!");
        break;

        

}