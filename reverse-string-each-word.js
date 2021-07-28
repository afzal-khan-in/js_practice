const str = "Hello World";




function reverse(word){
    
    let revStr = '';
    for( i=word.length-1 ;i>=0;i--) {
        revStr+=word[i];
    }
    return revStr;

}
function reverseString(str) {
    let emptyString = "";
    let strArr = [];
    for (let i = 0; i <= str.length - 1; i++) {

        if (str[i] == " " ) {
           let reversedStr=  reverse(emptyString)
            strArr.push(reversedStr);
            emptyString = "";
        } else {
            emptyString += str[i];
            if(i==str.length-1){
                let reversedStr=  reverse(emptyString)
            strArr.push(reversedStr);
            }
        }

    }
    return strArr;
}
console.log(reverseString(str));


let res = str.split(' ').map((word)=>word.split('').reverse().join(''));
console.log(res);