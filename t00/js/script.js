var heroes = { //создаем обьект heroes со свойствами 
	name:"", 
	leader:"", 
	members: ["", ""], 
	agenda:"", 
	isEvil:"", 
	memberCount: function () { // метод обьекта который отвечает за подсчет членов команды
		return this.members.length +1; // возвращаем значение длины свойства обьекта в котором хранится массив
		}
}
var name = prompt("What's name of your team?") 
var leader = prompt("Who's leader of your team?")
var members = prompt("Whats members of your team?")
var agenda = prompt("What are the goals and ideas of the team?")
var isEvil = prompt("Is it Evil ? (yes/no)")
heroes.name = name;
heroes.leader = leader;
heroes.agenda = agenda;
heroes.members = members.split(","); // преобразовние в массив при помощи метода split с запятой 
if (isEvil == "yes") {heroes.isEvil = true;} 
else if (isEvil == "no") {heroes.isEvil = false;} 

alert("Here's the team: name - " + heroes.name + "\n" +
"leader - " + heroes.leader + "\n" +
"members - " + heroes.members + "\n" +
"memberCount - " + heroes.memberCount() + "\n" +
"agenda - " + heroes.agenda + "\n"+
"isEvil - " + heroes.isEvil
);