// /**
//  * Created by jeffreydorney on 8/12/16.
//  */

var givenWord = "";
var fullStatement = "";

function explode(givenWord){
    var length = givenWord.length;
    var explodedWord = [];
    var explodeWordFin = "";

    for(var i = 0; i < length; i++){
        explodedWord[i] = givenWord.slice(i, i+1);
        explodedWord[i] = explodedWord[i] + " ";
        explodeWordFin = explodeWordFin + explodedWord[i].valueOf();
    }
    explodeWordFin = explodeWordFin.trim();
    fullStatement = "explode(\"example\") ==> " + explodeWordFin;
    console.log(fullStatement);
}

console.log("** Explode Method **");
explode("example");
explode("cat");
explode("");
explode("c");
console.log("");


function notString(givenWord){
    if(givenWord.startsWith("not", 0)){
        console.log(givenWord);
    } else {
        console.log("not " + givenWord);
    }
}

console.log("** NotString Method **");
notString("candy");
notString("x");
notString("not bad");
console.log("");

function missingChar(givenWord, place){
    console.log( givenWord.slice(0, place) + givenWord.slice(place+1));
}

console.log("** MissingChar Method **");
missingChar("kitten", 1);
missingChar("kitten", 0);
missingChar("kitten", 4);
console.log("");


function frontBack(givenWord){
    if(givenWord.length == 1){
        console.log(givenWord);
    } else {
        console.log(givenWord.slice(givenWord.length-1) + givenWord.slice(1, givenWord.length-1) + givenWord.slice(0,1));
    }
}

console.log("** FrontBack Method **");
frontBack("code");
frontBack("a");
frontBack("ab");
console.log("");


function front3(givenWord){
    front3Fin = givenWord.slice(0, 3) + givenWord.slice(0, 3) + givenWord.slice(0, 3)
    console.log(front3Fin);
}


console.log("** Front3 Method **");
front3("JavaScript");
front3("Chocolate");
front3("abc");
console.log("");


function backAround(givenWord){
    aroundedWord = givenWord.slice(givenWord.length-1) + givenWord + givenWord.slice(givenWord.length-1);
    console.log(aroundedWord);
}

console.log("** BackAround Method **");
backAround("cat");
backAround("Hello");
backAround("a");
console.log("");


function front22(givenWord){
    front22Fin = givenWord.slice(0, 2) + givenWord + givenWord.slice(0, 2);
    console.log(front22Fin);
}

console.log("** Front22 Method **");
front22("kitten");
front22("Ha");
front22("abc");
console.log("");


function delDel(givenWord){
    delDelFin = "";

    if(givenWord.slice(1,4)==="del"){
        delDelFin =  givenWord.slice(0, 1) + givenWord.slice(4);
        console.log(delDelFin);
    } else {
        console.log(givenWord);
    }
}

console.log("** DelDel Method **");
delDel("adelbc");
delDel("adelHello");
delDel("adedbc");
console.log("");


function startOz(givenWord){
    outputWord = "";

    if(givenWord.slice(0, 1) == "o"){
        outputWord = outputWord + "o";
    }

    if(givenWord.slice(1, 2) == "z"){
        outputWord = outputWord + "z"
    }

    if(outputWord == ""){
        outputWord = givenWord.slice(0, 2);
    }

    console.log(outputWord);
}

console.log("** StartOz Method **");
startOz("ozymandias");
startOz("bzoo");
startOz("oxx");
startOz("kitten");
console.log("");


function endUp(givenWord){
    if(givenWord.length > 3){
        endUpOut = givenWord.slice(0, givenWord.length-3) + givenWord.slice(givenWord.length-3).toUpperCase();
        console.log(endUpOut);
    } else {
        console.log(givenWord.toUpperCase());
    }
}

console.log("** EndUp Method **");
endUp("Hello");
endUp("hi there");
endUp("hi");
console.log("");

