let statusPS = 'aprovada';
switch (statusPS) {
    case 'aprovada':
        console.log("Parabéns! Você foi aprovado(a)!" );
        break;
    case 'lista':
        console.log("Você está na nossa lista de espera.");
        break;
    case 'reprovada':
        console.log("Sinto muito, você foi reporvado(a).");
        break;
    default:
        console.log("Não se aplica");
}
