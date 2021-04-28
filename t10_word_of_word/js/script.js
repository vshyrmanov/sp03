function addWords(obj, wrds){
    var words = obj.words;
    var h = words.split(' ');
    var k = wrds.split(' ');
    for (var x=0; x<k.length; x++){
        var word = k[x];
        var index = h.indexOf(word);
        if (index == -1 && word !== ''){
            h.push(word);
        }
    }
    
    h = h.filter((value, index) => h.indexOf(value) === index)
    
    words = h.join(' ');
    obj.words = words;

}
function removeWords(obj, wrds){
    var words = obj.words;
    var h = words.split(' ');
    var k = wrds.split(' ');
    for (var x=0; x<k.length;x++){
        var word = k[x];
        var index = h.indexOf(word);
        if (index !== -1){
            h.splice(index, 1)
        }
    }
    words = h.join(' ');
    obj.words = words;
}
function changeWords(obj, oldWrds, newWrds){
    var words = obj.words;
    var h = words.split(' ');
    var k = oldWrds.split(' ');
    var m = newWrds.split(' ');
    for (var x=0; x<k.length;k++){
        var word = k[x];
        var index = h.indexOf(word);
        if (index !== -1){
            h.splice(index,1, m.shift())
        }
    }
    words = h.join(' ');
    obj.words = words;
}

const obj = {
    words: 'newspapers newspapers books magazines' 
};

console.log(obj);
addWords(obj, 'radio newspapers   ');
console.log (obj); 

removeWords(obj, 'newspapers  radio');
console.log(obj);

changeWords(obj, 'books radio magazines', 'tv internet');
console.log(obj);
    