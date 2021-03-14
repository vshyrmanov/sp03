function getFormattedDate (date){ // создаем функцию с аргументом date
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // создаем массив, где запишем названия 7 дней (к этому мы приходим не сразу ;))
    let daynum = date.getDay(); // создаем переменную, которая запишет номер дня недели методом getDay (это понадобится в дальнейшем)
    var show = { 
        monthday:getZeroBefore (date.getDate()), // создаем свойство обьекта, которое запишет день месяца методом getDate
        month: getZeroBefore (date.getMonth()), // создаем свойтсво обьекта, которое запишет месяц методом getMonth
        year:getZeroBefore (date.getFullYear()), // создаем свойтсво обьекта, которое запишет год методом getFullYear
        hours:getZeroBefore (date.getHours()), // создаем свойства обьекта, которое запишет часы методом getHours
        minutes:getZeroBefore (date.getMinutes()), // создаем свойтсво обьекта, которое запишет минуты методом getMinutes
        weekday: days[daynum] // создаем свойство обьекта, которое запишет название дня недели, выбрав его из масива days при помощи метода getDay(покажет только порядочный номер дня недели) который мы применили для переменной daynum 
    } 
    return (`${show.monthday}.${show.month}.${show.year} ${show.hours}:${show.minutes} ${show.weekday}`) // возвращаем все значения в нужном нам формате
}
function getZeroBefore (date) { // создаем функцию, которая будет добавлять 0 перед числами от 1 до 9 в формате 01,09 etc
    if (date <= 9) { // если меньше равно 9 
        return (`0${date}`) // добавим к аргументу 0
    }
    else { 
        return date // если нет, тогда число как есть
    }
}

/*const date0 = new Date(1993, 11, 1); 
const date1 = new Date(1998, 0, -33); 
const date2 = new Date('42 03:24:00') ;
console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday 
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday 
console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday */