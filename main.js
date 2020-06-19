console.log('welcome to my website');
console.warn('This is a warning');
// let, const
//<script src ="main.js"></script>
let age= 30;
console.log(age);
console.log("my name is John");
const s="hello world this is John";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.replace(' ','%20'));
console.log(s);
//arrays -variables with multiple values 
const numbers= new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);//javascript is not statistly written you don't nee to define size or have the same type in the array
console.log(fruits[1]);
fruits[3]='bananas';
console.log(fruits);
fruits.unshift('watermelon');
console.log(fruits);
//isArray gives true or false 
//indexof 
//object literals(key value pairs)
const person={
    firsName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies:['cooking','movies','travelling'],
    address:{
        street: '50 main st.',
        city: 'Boston',
        state:'MA',
    }
}
console.log(person);
//alert(person); not a good way 
console.log(person.firstName, person.age);
const{firstName, lastName}=person;
console.log(person.city);
const todos=[
    {
        id:1,
        text: 'take out trash',
        isComplete: true,
    },
    {
        id:2,
        text: 'Meeting with boss',
        isComplete: false ,
    }
    

];
console.log(todos);
console.log(todos[1].text);
console.log(todos[1].isComplete);
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
for(let todo of todos){
    console.log(todo.text);

}
//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});
const todoCompleted= todos.filter(function(todo){
return todo.isComplete==true;
});
console.log(todoCompleted);

if(true) {
   // let h=1;
    var b=4;
    const f=4;
};
//console.log(h);
console.log(b);
const f=5;






