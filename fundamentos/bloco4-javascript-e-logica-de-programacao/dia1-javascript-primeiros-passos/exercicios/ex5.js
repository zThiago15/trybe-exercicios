function somarAngulos(ang1, ang2, ang3){
    const somaAngulos = ang1 + ang2 + ang3;

    if(somaAngulos == 180){
        return "true";
    } else {
        return "false";
    }
}

console.log(somarAngulos(43, 50, 53));