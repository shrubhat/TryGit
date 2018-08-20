function LetterChanges(str){

    let converted = str.replace(/[a-z]/gi,function(char){
        return (char === 'z' || char === 'Z' ? a : String.fromCharCode(char.charCodeAt()+1))
    });

    let capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel){
        return vowel.toUpperCase();
    });

    return capitalized;
}

let a = LetterChanges("Shruti G Bhat");
console.log(a);
