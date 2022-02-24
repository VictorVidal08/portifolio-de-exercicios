const chessPiece = "peao";

switch (chessPiece.toLowerCase()) {
    case "rei":
        console.log("rei -> Uma casa apenas em qualquer direção.");
        break;
    case "bispo":
        console.log("bispo -> Diagonal");
        break;
    case "rainha":
        console.log("rainha -> diagonal, horizontal e vertical");
        break;
    case "cavalo":
        console.log("Cavalo -> Movimento em 'L',pode pular sobre peças");
        break;
    case "torre":
        console.log("Torre -> Horizontal e vertival");
    case "peao":
        console.log("peao -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas");
        break;
         
    default:
        console.log("erro, pelça invalida");
        break;
};