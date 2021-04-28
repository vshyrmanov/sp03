function concat(string1, string2){
    if (!string1 || !string2){
        function funcCl(){
            funcCl.count++;
            var l = prompt("Enter something");
            return string1.concat(" " + l);
        }
        funcCl.count = 0;
        return funcCl;
    }
    return string1.concat(" "+ string2);
}

let phrase1 = concat("Hulk", "smash!"); 
let output = phrase1; 
console.log(output); // Hulk smash!
let phrase2 = concat("Leave");
output = phrase2();
// a prompt appears. Enter "Hulk alone!" into the prompt
console.log(output); // Leave Hulk alone! 
console.log(phrase2.count); // 1
output = phrase2();
// a prompt appears. Enter "me alone, please!" into the prompt
console.log(output); // Leave me alone, please!
output = phrase2();
// a prompt appears. Enter "HULK ALONE!" into the prompt
console.log(output); // Leave HULK ALONE! 
console.log(phrase2.count); // 3
let phrase3 = concat("Go");
output = phrase3();
// a prompt appears. Enter "away!" into the prompt
console.log(output); // Go away! 
console.log(phrase3.count); // 1 
console.log(phrase2.count);


function Calculator(){
    let ladder = {
    result:0,
    init(x){
        this.result=x;
        return this;
    },
    add(a) {
        this.result+=a;
        return this;
    },
    mul(m){
        this.result*=m;
        return this;
    },
    div(b){
        this.result/=b;
    return this;
    },
    sub(s){
        this.result-=s;
    return this;
    },
    result:function result5(){alert(this.result);},
    alert(){
        alert(this.result);
    }
    
    }};
    let br2 = new Calculator();
    console.log(br2.init(2)
    .add(2)
    .mul(3)
    .div(4)
    .sub(2)
    .result);
    
    br2.alert();