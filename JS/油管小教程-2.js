// // 单元素选择器
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1')); // 有多个的话只能选到第一个

// // 多元素选择器
// console.log(document.querySelectorAll('.item')); // 建议使用这个
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// // 利用 JS 来改变界面内容
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// // 利用 JS 来改变界面样式
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// // 获取事件
// // 需要两个参数，第一个是要获取的事件，第二个是要执行的函数
// // 事件的种类有很多，比如click、mouseover、mouseout 等，具体可以查看文档
// btn.addEventListener('click', (e) => {
//     e.preventDefault(); // 阻止默认事件（打断了表单的提交，使得 console.log(); 输出的内容不是一闪而过）
//     console.log('click a btn');
//     console.log(e); // 打印事件对象 e
//     // 获取元素并打印一些属性
//     console.log(e.target);
//     console.log(e.target.className);

//     // 改变表单背景颜色
//     document.querySelector('#my-form').style.background = '#ccc';
//     // 将CSS样式中的 bg-dark 类的属性添加到 body 中去，可以通过 add 添加类，也可以通过 remove 删除类
//     document.querySelector('body').classList.add('bg-dark')
// });

// btn.addEventListener('mousemove', (e) => {
//     document.querySelector('.btn').style.background = 'skyblue'
// });

// btn.addEventListener('mouseout', (e) => {
//     document.querySelector('.btn').style.background = 'red'
// });


// 获取表单内容(要看这个的话叭前面的内容全都注释掉,不然会有奇怪的冲突导致无法显示)
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        // 不推荐用 alert 因为会打断程序的运行,一般不适用
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter fields';
        // 设置三秒后消失
        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('success');
        // 创建一个 li 元素并命名为 li 
        const li = document.createElement('li');
        // 在 li 中添加子元素(是文本模块)并为其添加内容(模板字符串)
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // 给 userList 添加子元素(li) 使其显示出来(只存在于界面,一刷新就没了.想要保留的话需要通过 后端/数据库/本地储存 来实现)
        userList.appendChild(li);

        // 清除输入框
        nameInput.value = '';
        emailInput.value = '';
    }
}