function checkP(str){
    str = str.toLowerCase().replace(/\ + /g,'');
    return str===str.split('').reverse().join('');
}
console.log(checkP("hello"));
console.log(checkP("pep"));