function addWords(obj, wrds){ //   обьевляем функцию addWords с двумя аргументами, во второй будут добавлены слова
    let words = obj.words; //обьевляем переменную, в которую запишем обьект со свойством words
    let arr = words.split(' '); // обьевляем перемунную arr и запишем в нее массив который создат строка words 
    let arr2 = wrds.split (' '); // обьевляем переменную arr2 в которой будет записан массив из аргумента wrds функции obj
    for (let i=0; i<arr2.length; i++) { // запускаем цикл который найдет длину массива в переменной arr2
        let word = arr2[i]; // обьявим переменную и запишем значение текущенго счетчика i из массива 
        let index = arr.indexOf(word); // обьвим переменную index и запишем в нее значения перемееной word в массиве arr, если значения не будет то будет -1
        if (index == -1 && word !== ''){
            arr.push(word);
        }
    } 
    arr = arr.filter(function(value, index) { //филтруем дубликаты из массива arr при помощи метода filter и делаем перезапись значения arr на фильтрованые
        return arr.indexOf(value) === index; 
    });
    words = arr.join(' '); //в переменную words записываем значение с массива arr преобразованым в строку при помощи метода join который добавляет пробел между словами
    obj.words = words; // в обьект, который выступет в качестве аргуемента функции obj запишем новое значение свойства words, после вызова которой будет равно нашей переменной words
}

function removeWords(obj, wrds){ //обьевляем новую функцию, в которой будет два аргумента, wrds будет хранить слова для удаления
    let words = obj.words;
    let arr = words.split(' ');
    let arr2 = wrds.split(' ');
    for (let i=0; i<arr2.length; i++) {
        let word = arr2[i];
        let index = arr.indexOf(word);
        if (index !== -1) {
            arr.splice(index,1);
        }
    }
    words = arr.join(' '); 
    obj.words = words;
}
function changeWords(obj, oldWrds, newWrds){
    let words = obj.words;
    let arr = words.split(' ');
    let arr2 = oldWrds.split(' ');
    let arr3 = newWrds.split(' ');
    for (let i=0; i <arr2.length; i++){
        let word = arr2[i];
        let index = arr.indexOf(word);
        if (index !== -1){
            arr.splice(index,1, arr3.shift());
        }
    }
    words = arr.join(' ');
    obj.words = words;
}

const obj = {
    words: 'newspapers newspapers books magazines' };
    console.log(obj); // {words: "newspapers newspapers books magazines"}
    addWords(obj, 'radio newspapers ');
    console.log(obj); // {words: "newspapers books magazines radio"}
    removeWords(obj, 'newspapers radio'); 
    console.log(obj); // {words: "books magazines"}
    changeWords(obj, 'books radio magazines', 'tv internet'); 
    console.log(obj); // {words: "tv internet"} 