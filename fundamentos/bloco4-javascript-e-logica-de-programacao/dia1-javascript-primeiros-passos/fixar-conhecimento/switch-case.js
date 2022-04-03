let estadoCandidato = "reprovada";

switch (estadoCandidato) {
    case 'aprovada':
        console.log("Parabéns, você foi aprovada!");
        break;
    case 'lista':
        console.log("Aguarde, você está na lista de espera.");
        break;
    case 'reprovada':
        console.log("Sinto muito, você foi reprovada. Mas não desista, tente novamente!");;
        break;
    default:
        console.log("não se aplica");
}