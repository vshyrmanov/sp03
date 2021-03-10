var ask1 = prompt("What's name of your team?")
var ask2 = prompt("Who's leader of your team?")
var ask3Arr = ["Leon", "James", "Craig"]
//ask3Arr.push(prompt("Members of your team?"))
var askArr = [];
var size = 5; //Maximum Array size
for(var i=0; i<size; i++) {
	//Taking Input from user
	askArr[i] = prompt('Take a names ' + (i+1));
}

var ask4 = prompt("What are the goals and ideas of the team?")
var ask5 = prompt("isEvil")
var heroes = {name:ask1, leader:ask2, members:askArr, memberCount:askArr.length, agenda:ask4, isEvil:ask5 };
alert("Here's the team: "+ "\n" + "name - " + heroes.name + "\n" + "leader - " + heroes.leader + "\n" + "members - " + heroes.members + "\n" + "memberCount - " + heroes.memberCount + "\n" + "agenda - " + heroes.agenda + "\n" + "isEvil - " + heroes.isEvil);