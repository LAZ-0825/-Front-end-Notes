console.error('It is an error');
console.warn('It is a wanning');

// 变量： var , let , const
// 数据类型： String，Numbers,Boolean, null, undefined,Symbol
// Symbol 是新增的，这里不讲

const x = null;
const y = undefined;
console.log(typeof x);
console.log(typeof y);

const name = 'Jone';
const age = 30;
console.log('My name is ' + name + ' and I am ' + age);
// 模板字符串
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello world!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
// 获取指定索引以内的字符串
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());

// 将字符串分割到数组
// 每个字符都分割
console.log(s.split(''))
// 用指定字符分割
const s1 = 'technology, comput, it, code'
console.log(s1.split(', '))


// 数组-保存多个值的变量
console.log('Arrays - variables that hold multiple values')

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true, undefined];
console.log(fruits);
console.log(fruits[1]);

// 修改
fruits[3] = 'grapes';
console.log(fruits);

// 末尾添加值
fruits.push('mangos');
console.log(fruits);

// 开头添加值
fruits.unshift('strawberries');
console.log(fruits);

// 删除末尾值（弹出）
fruits.pop();
console.log(fruits);

// 判断是否为数组
console.log(Array.isArray(fruits));
console.log(Array.isArray('Hello'));

// 查看指定元素索引
console.log(fruits.indexOf('oranges'));
console.log(fruits.indexOf('abcdefg'));

fruits.push('oranges');
console.log(fruits.indexOf('oranges')); // 看来只能查看第一次出现的索引


// 对象语法
console.log('对象语法');
const person = {
    firstName: 'John ',
    lastName: 'Doe ',
    age: 30,
    hobbies: ['music', 'movies ', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston ',
        state: 'MA'
    }
}

console.log('person: ');
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// 从person中取出一些内容作为实际变量(ES6新特性)
console.log('从person中取出一些内容作为实际变量(ES6新特性)')
const { firstName, lastName, address: { city } } = person;
console.log(firstName);
console.log(city);

// 添加属性
console.log('添加属性')
person.email = 'abcd@efg.com'
console.log(person)


// 数组对象
console.log('数组对象')
const todos = [
    {
        id: 1,
        text: 'Take out trach',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

// 转换为JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// while循环
let i = 0;
while (i < 5) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// for循环
for (let i = 0; i < 5; i++) {
    console.log(`For Loop Number: ${i}`);
}

for (let todo of todos) {
    console.log(todo.text);
}


// foreach: 循环
// map: 从数组中创建新数组
// filter: 根据条件创建新数组
console.log('foreach循环：');
todos.forEach(function (todo) {
    console.log(todo.text);
});

console.log('map：');
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

console.log('fliter：');
const todoCompleted = todos.filter(function (todo) {
    // 返回 isCompleted 是 true 的对象
    return todo.isCompleted === true;
});
console.log(todoCompleted);

console.log('不同之间的配合'); // 强大的函数式编程
const todoCompletedText = todos.filter(function (todo) {
    // 返回 isCompleted 是 true 的对象
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompletedText);



// 函数 function
// 有默认参数时，将需要默认值的参数放在参数列表的最前面
function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}
addNums(3);

// 箭头函数 （这里写的不全，建议查阅相关文档）
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2; // 甚至不需要返回值
console.log(addNums2(5, 5));
todos.forEach((todo) => console.log(todo.text));


// 面向对象编程

// 构造函数（结构体函数）
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // 这里的 Date 对象是默认自带的
//     this.dob = new Date(dob);
//     // this.gerBirthyear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function() {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }
// 
// // 这个必须写在类外，并且写了这个就不用在构造函数中写方法了
// // 访问这里写的方法跟在构造函数里写的方法一样，只是打印对象整体的时候有些区别
// // （具体干啥的没看懂，但感觉属性和方法分离更清爽）
// Person.prototype.gerBirthYear = function () {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        // 这里的 Date 对象是默认自带的
        this.dob = new Date(dob);
    }

    gerBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 实例化对象
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1);
// 对日期对象可以有很多操作，这里不一一演示了，具体可以查看文档
console.log(person2.dob);
console.log(person2.dob.getFullYear());

console.log(person1.gerBirthYear());
console.log(person1.getFullName());
console.log(person1);
