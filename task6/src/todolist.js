import './css/todolist.css'

window.onload = () => {
    'use strict';
    let left = document.getElementsByClassName("left");
    let right = document.getElementsByClassName("right");
    left[0].style.height = window.screen.height * 1.1 + 'px';
    right[0].style.height = window.screen.height * 1.1 + 'px';
    // 添加事件
    let text = document.querySelector('#text');
    let add = document.querySelector('.add');
    let todolist = document.querySelector('.todolist');
    let donelist = document.querySelector('.donelist');
    let clear = document.querySelector('.clear');
    text.focus();
    text.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            todoAdd();
        }
    })
    add.onclick = () => {
        todoAdd();
    };
    const todoAdd = () => {
        let local = getData();
        local.push({ text: text.value, done: false });
        text.value = '';
        saveData(local);
        load();
    }
    //删除事件
    const del = (e) => {
        let t = e.target;
        if (t.nodeName == 'A') {
            let data = getData();
            // e.target.parentNode
            let index = t.id;
            data.splice(index, 1);
            saveData(data);
            load();
        };
    }
    todolist.addEventListener("click", del);
    donelist.addEventListener("click", del);
    //已完成事件
    const done = (e) => {
        let t = e.target;
        if (t.nodeName == 'INPUT') {
            let data = getData();
            // let index = t.nextElementSibling.nextElementSibling.id;
            let index = t.parentNode.children[2].id;
            data[index].done = e.target.checked;
            saveData(data);
            load();
        }
    }
    todolist.addEventListener("click", done);
    donelist.addEventListener("click", done);
    // 读取本地存储数据
    const getData = () => {
        let data = localStorage.getItem("todolist");
        if (data != null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存本地存储数据
    const saveData = (data) => {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    //渲染加载数据
    const load = () => {
        todolist.innerHTML = '';
        donelist.innerHTML = '';
        let data = getData();
        data.forEach((val, i) => {
            // let li = document.createElement('li');
            // li.innerHTML = '<input type="checkbox" class="check"><p>' + val.text + '</p><a href="javascript: ; ">x</a>';
            // todolist.insertBefore(li, todolist.firstChild);
            if (val.done) {
                donelist.insertAdjacentHTML("afterbegin", '<li><input type="checkbox" class="check" checked="checked"><p>' + val.text + '</p><a href="javascript:;" id=' + i + '>x</a></li>');
            } else {
                todolist.insertAdjacentHTML("afterbegin", '<li><input type="checkbox" class="check"><p>' + val.text + '</p><a href="javascript:;" id=' + i + '>x</a></li>');
            }
        });
    }
    load();
    //清空
    clear.addEventListener("click", () => {
        localStorage.removeItem("todolist");
        load();
    })
}
