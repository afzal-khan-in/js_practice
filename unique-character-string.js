const stringg = "Hello World";
function uniqueString(str){
    let unq="";
    for(i=0; i<str.length; i++){
        if(unq.includes(str[i])===false){
            unq+=str[i];
        }
    }
    return unq;
}
console.log(uniqueString(stringg));


/*
Map 
filter 
reduce 
functions 
split
splice

*/