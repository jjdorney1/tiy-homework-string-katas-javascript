// /**
//  * Created by jeffreydorney on 8/12/16.
//  */

var givenWord = "";


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
    console.log(explodeWordFin);

    // for(var x = 0; x < length; x++){
    //     explodedWord[x] = explodedWord[x] + " ";
    //     console.log( explodedWord );
    // }
}

explode("example");
explode("cat");
explode("");
explode("c");

