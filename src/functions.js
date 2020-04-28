let sentence = "";

document.onkeydown = e => {
    playSounds(e.key)
};


let playSounds = key => {
    switch (key) {
        case "a": document.getElementById('A').play();
            break;
        case "0": document.getElementById('0').play();
            break;
        case "1": document.getElementById('1').play();
            break;
        case "2": document.getElementById('2').play();
            break;
        case "3": document.getElementById('3').play();
            break;
        case "4": document.getElementById('4').play();
            break;
        case "5": document.getElementById('5').play();
            break;
        case "6": document.getElementById('6').play();
            break;
        case "7": document.getElementById('7').play();
            break;
        case "8": document.getElementById('8').play();
            break;
        case "9": document.getElementById('9').play();
            break;
        case "b": document.getElementById('B').play();
            break;
        case "c": document.getElementById('C').play();
            break;
        case "d": document.getElementById('D').play();
            break;
        case "e": document.getElementById('E').play();
            break;
        case "f": document.getElementById('F').play();
            break;
        case "g": document.getElementById('G').play();
            break;
        case "h": document.getElementById('H').play();
            break;
        case "i": document.getElementById('I').play();
            break;
        case "j": document.getElementById('J').play();
            break;
        case "k": document.getElementById('K').play();
            break;
        case "l": document.getElementById('L').play();
            break;
        case "m": document.getElementById('M').play();
            break;
        case "n": document.getElementById('N').play();
            break;
        case "o": document.getElementById('O').play();
            break;
        case "p": document.getElementById('P').play();
            break;
        case "q": document.getElementById('Q').play();
            break;
        case "r": document.getElementById('R').play();
            break;
        case "s": document.getElementById('S').play();
            break;
        case "t": document.getElementById('T').play();
            break;
        case "u": document.getElementById('U').play();
            break;
        case "v": document.getElementById('V').play();
            break;
        case "w": document.getElementById('W').play();
            break;
        case "x": document.getElementById('X').play();
            break;
        case "y": document.getElementById('Y').play();
            break;
        case "z": document.getElementById('Z').play();
            break;
        default: console.log("Key is not found!");
    }

}