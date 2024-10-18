var name1 = "chaechae";
var name2 = "chaechae";

console.log(name1 == name2);

var name3 = Symbol("yooyoo");
var name4 = Symbol("yooyoo");

console.log(name3 == name4);

var myClass = {
    [Symbol("yooyoo")]: 1, 
    [Symbol("yooyoo")]: 2
};
