let a = promt();

function reverse(a) {
    let reverse = a.split('');
 
    reverse = reverse.reverse();
 
    return reverse.join('')
}
 
console.log(reverse(a)); 