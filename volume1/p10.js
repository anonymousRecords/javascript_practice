var a = 5;
var star = ''
for (var i = 0; i < a; i++) {
    for (var j = 4; j > i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);